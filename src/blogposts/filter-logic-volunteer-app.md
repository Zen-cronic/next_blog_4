---
title: "Filtering in ExpressJS"
date: "2024-01-05"
subtitle: "How I implemented the filter feature in my volunteer management application"
---

_This article is part of the series explaining the principles and algorithms implemented in my capstone web application project. You can check out the app [here](https://volunteer-mern.vercel.app/). Or view the [source code](https://github.com/Zen-cronic/volun-mern)._

### **Introduction**

A major ingredient for modern management applications (be it content, e-commerce, customer, or financial) is the filter feature, alongside sorting and searching. Here’s how I’ve implemented it in my web app. It filters volunteer events in the backend, according to the filter category sent by the client.

![Filtering for events located externally (outside the organization) and with open shift positions](/img/filter-volun-sc.jpg)
Filtering for events located externally (outside the organization) and with open shift positions

The goal here is to build a custom filter feature using what Express can offer, without depending on any third-party library. So, I decided to make use of the request-response lifecycle and the “locals” property of the response.

Following the modern **MCV** architecture for ExpressJS applications, I’ve refactored the previous code by separating business logic from the controller. This logic is contained in service functions. Let’s take a look at the filter controller first.

### **Filter events controller**

This controller is an array of request handlers, each wrapped in an express-async-handler function to manage asynchronous errors. Its length depends on the number of filter categories that are stored as constants. As of now, these are:

1. **Event date (date)**
2. **Event venue (venue)**
3. **Events with open positions (isOpen)**
4. **Events that are happening in the future (isUpcoming)**

Plus, the service function of the last handler is responsible for curating the filtered results (event IDs) from the above 4 filters and sorting each result based on how many filter categories it falls under. So, I’ve got an array of 5 request handlers.

Let’s examine the request handler for the event venue category (venue).

### **Filter Events by Venue**

```js
const filterEventsHandler = [
  //venue filter
  asyncHandler(async (req, res, next) => {
    if (!objKeysIncludes(req.body, FILTER_OPTIONS.VENUE)) {
      return next();
    }

    const { venue } = req.body;
    res.locals.filteredVenue = await filterEventsByVenue(venue);

    next();
  }),

//...more handlers
```

Inside the handler, there’s a helper function that checks whether or not req.body (sent from the client) includes the category “venue”. This function serves as a form of data validation for the user input.

```js
const objKeysIncludes = (obj, checked) => {
  if (!(obj instanceof Object)) {
    throw new Error("Obj param must be an object");
  }

  return Object.keys(obj).includes(checked);
};
```

If it’s included, the value of the venue is extracted (e.g., {venue: “External”}), after which it’s processed by the service that filters events by venue. The result is an array of event IDs, which are then stored in res.locals property.

The data/variable stored() in res.locals is not shared between requests as they belong only to the current request-response cycle. If the client didn’t include the “venue” filter, this request handler is skipped by returning the next function.

```js
if (!objKeysIncludes(req.body, FILTER_OPTIONS.VENUE)) {
  return next();
}

const { venue } = req.body;
res.locals.filteredVenue = await filterEventsByVenue(venue);

next();
```

Even after storing the filtered result in res.locals, next has to be called, moving on to the following handler that checks for another filter category.

### **Final Handler**

After repeating this process for all categories, we arrive at the last handler. Its service function (filterEvents) sorts all the filtered event IDs from res.locals, attaches the filter tags that each event belongs to, and returns a sorted array of events based on the number of tags.

```js
  //sorted filter
  asyncHandler(async (req, res) => {

    const {
      filteredResultsByKey,
      filteredAllIds,
      idsWithTags,
      sortedIdsWithTags,
    } = filterEvents(req.body, res.locals);

    return res.status(200).json({
      filteredResultsByKey,
      filteredAllIds,
      idsWithTags,
      sortedIdsWithTags,
    });
  }),

```

Let’s see how it works. The values of the properties in res.locals stored by the preceding filter handlers are assigned to respective variables. Object destructing is not used because the client may not have selected all filter categories, making these variables undefined.

```js
const filterEvents = (filterObj, resLocals) => {

  const filteredVenue = resLocals.filteredVenue;
  const filteredDate = resLocals.filteredDate;
  const filteredIsOpen = resLocals.filteredIsOpen;
  const filteredIsUpcoming = resLocals.filteredIsUpcoming;

//...
```

Then, the filteredResultsByKey object is declared which will house the name of the filter category (e.g., venue, isOpen) as the key, and the value of the corresponding filtered result as the property. See the example below, where each event ID qualifies as the selected venue.

```js
//{"venue": [id1, id2, id3]}

let filteredResultsByKey = {};

Object.keys(filterObj).forEach((filterKey) => {
  switch (filterKey) {
    case FILTER_OPTIONS.DATE:
      filteredResultsByKey = {
        ...filteredResultsByKey,
        [filterKey]: filteredDate,
      };
      break;

    case FILTER_OPTIONS.IS_OPEN:
      filteredResultsByKey = {
        ...filteredResultsByKey,
        [filterKey]: filteredIsOpen,
      };

      break;

    case FILTER_OPTIONS.VENUE:
      // filteredResultsByKey[filterKey] = filteredVenue

      filteredResultsByKey = {
        ...filteredResultsByKey,
        [filterKey]: filteredVenue,
      };

      break;

    case FILTER_OPTIONS.IS_UPCOMING:
      filteredResultsByKey = {
        ...filteredResultsByKey,
        [filterKey]: filteredIsUpcoming,
      };

    default:
      break;
  }
});
```

Next, the property values of filteredResultsByKey are turned into a 1-D array (from a 2-D array). This service function returns an array of event IDs, each with only one occurrence, which is stored in the filteredAllIds variable.

```js
const filteredAllIds = filterArrSortLoose(Object.values(filteredResultsByKey));
//filterArrSortLoose helper
const filterArrSortLoose = (twoDArr) => {
  if (!twoDArr.every((arr) => Array.isArray(arr))) {
    throw new Error("each elem must be an arr - an arr of arr");
  }

  const oneDArr = twoDArr.flatMap((arr) => arr);

  const matchIds = [];

  oneDArr.forEach((id) => {
    if (!matchIds.includes(id)) {
      matchIds.push(id);
    }
  });

  console.log("matchIds from loose filter: ", matchIds);
  return matchIds;
};
```

### **Filter Tags**

Finally, it’s time for the most challenging task yet. Assign filter tags to each event ID. To do so, we need to relate the filteredResultsByKey object and filteredAllIds array, resulting in an idsWithTags array.

```js
//filteredResultsByKey
{
filterKey1 : [id1, id2, id3],
filterKey2 : [id3, id1, id4]
}

//filteredAllIds
[id1, id2, id3, id4]

//filteredResultsByKey + filteredAllIds -> idsWithTags
[
 {id1: [{filterKey1: filterValue}, {filterKey2: filterValue}]
 {id2: [{filterKey2: filterValue}]},
 {id3: [{filterKey1: filterValue}]}.
 ...
 }
]

```

Remember that an event ID can appear under more than one filter category. In this case, we assign all the associated filter tags to the event ID object.

In the following nested loop, the outer loop iterates over all filtered IDs, and the inner loop runs through each entry of the filteredResultsByKey object.

```js

  filteredAllIds.forEach((id) => {

    Object.entries(filteredResultsByKey).forEach(([filterKey, result]) => {

      const [_, filterKeyVal] = Object.entries(filterObj).find(
        ([key, _]) => key === filterKey
      );

//...
```

For each event ID, we must find the corresponding filter category it belongs to by iterating through each entry in the filteredResultsByKey and cross-checking with req.body (filterObj).

If the key from the req.body equals the current key of filteredResultsByKey, we access the value of the key (e.g., in {date: “2023–12–31”, 2023–12–31 is the value). This filter category value (filterKeyVal object) and the filter key are appended as a filter tag for each qualifying event ID.

If the current event id (outer loop) is included in a property array of filteredResultsByKey (inner), there are two possible scenarios:

1. **The event ID object is already included in the idsWithTags array, which means the event qualifies for more than one filter category.**
2. **The event ID object is not included yet.**

Both scenarios are determined by finding in the idsWithTags array an object whose eventId property has the same value as the current event id. The responsible helper function returns an index number if found, and -1 if not found.

```js
  if (result.includes(id)) {

        const isEventIdAlrExists = elemObjPropValIncludes(
          idsWithTags,
          "eventId",
          id
        );
  //...
```

```js
//helper to determine if current event ID is already in idsWithTags
const elemObjPropValIncludes = (arr, propKey, checkedPropVal) => {
  //propKey must exists in all objs in the array
  if (arr.some((obj) => !Object.hasOwn(obj, propKey))) {
    throw new Error(
      `all elem obj in the arr must contain propKey: ${propKey} : as a property key`
    );
  }

  const included = arr.findIndex(
    (obj) => obj[propKey].toString() === checkedPropVal.toString()
  );

  return included;
};
```

Dealing with the second scenario is simple. We just push an object with “eventId” and “filterTags” entries into the parent array.

```js
idsWithTags.push({
  eventId: id,
  filterTags: [{ [filterKey]: filterKeyVal }],
});
```

For the first case, however, there’s an extra step involved. We must map through the idsWithTags array until we arrive at the current event. Then, reassign that event ID object with the additional filter category entry it belongs to.

```js
const bufferArr = idsWithTags.map((event) => {
  if (event.eventId === id) {
    event = {
      ...event,
      filterTags: [...event.filterTags, { [filterKey]: filterKeyVal }],
    };
  }

  return event;
});

idsWithTags = bufferArr;
```

After assigning tags to each event, we must sort them in descending order based on the number of tags. At the end of the request-response cycle, this final handler returns sortedIdsWithTags to the client. It’s now the front-end’s job to manage how the events with filtered tags will be displayed.

That’s it! That’s how I’ve implemented filtering in my Express API using the nature of the **request-response cycle** and **res.locals** property.

The key takeaways I got from coming up with this feature are:

- **Request-response cycle**
- **Modular middleware and using next()**
- **Data Validation**
- **Higher Order functions**
- **Filtering logic!**

Further improvements in the future:

- **Use Map and Set for a simpler data structure**
- **Implementing Bloom’s filter algorithm**

You can interact with the app live [here](https://volunteer-mern.vercel.app/). Or view the code on my [GitHub repo](https://github.com/Zen-cronic/volun-mern).
