---
title: "Why write a library?"
date: "2024-05-03"
subtitle: "The value of building things from scratch"
description: "No matter your level of experience, making a library as a project broadens your programming horizon. A step-by-step guide included."
eventName: "TorontoJS Lightning Talks"
eventDate: "2024-04-30"
imgUrl: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hs64mu4vk9nmp2jz9szy.png"
slides: "https://docs.google.com/presentation/d/1H9Nc3KR0HWgp8yAxtDi6awdoE2AEjvmTNALVD-LDAOg/edit?usp=sharing"
---

_This is a blog version of the talk I gave at [TorontoJS](https://www.linkedin.com/company/torontojs/) Lightning Talks event on Apr 30, 2024._

## My technical pet peeve

![console-log](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h7vmgyh5dpuvx9gzhiwd.png)

This _irritates_ me - typing a variable’s name beside the variable in the log statement. It isn’t that big of a problem for just a few variables here and there. But many variables multiplied by many files in your app? You do the math.

That's when I realized writing my own [logging library](https://github.com/Zen-cronic/scope-logger) could save me some headaches.

## The rant continues...

![Many logs to comment and delete](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/syppqe2w415nu35x5vig.png)

Now, who enjoys commenting out or deleting log statements before pushing their code to production? I _really_ don't.

Fortunately, there are tools available to solve this such as the [`debug` library](https://github.com/debug-js/debug) which is based on the core NodeJS logging utility.

We already have a solution. So why bother? Let’s take a look at my personal use case:

![A variable logged inside nested functions](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5qodu2hfka2dcik4wb73.png)

More often than not, a variable is logged from within nested function calls, and across multiple files. When I wanted to quickly check from where a variable is being logged (that happens after you’re debugging and have called it a day and you return to it later), I would write the metadata (the function name) **next** to the log variable.

Instead of a quick check, this process became quickly _tedious_. Here was a use case that i hadn't found any JS library addressing (as far as I know).

## Time to _modify_ the wheel!

![My library in action](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/txq3zycdcgs1t5i4y1s1.png)

So, I decided to write a [module](https://github.com/Zen-cronic/scope-logger) that logs the value of the variable alongside its name without having to type the name manually. And I'll share with you how I did it from scratch.

Of course, this can be done using `console.log()` with the object destructing `{ }` property.

But what `console.log()` lacks is the ability to print the **function scopes** of the logged variable in a developer-friendly way. Here's the output:

![My library's output](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vk655or0g8s1bnq4nwy9.png)

By **developer-friendly**, I mean anyone seeing this log message in their terminal can immediately tell the function scope of the variable being logged. The order of function scopes is parsed from the call stack provided by the NodeJS stack trace API. Hence the name, [_scope-logger_](https://github.com/Zen-cronic/scope-logger).

_Note: “Object.<anonymous>” just means the outermost function is invoked from the global object/topmost level of the file._

Here's the recipe on how to write a library by studying others (in pseudo-code!):

## Steps.length = 4

![Library making steps in pseudo-code](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gf1i1izih6hiwlu6w745.png)

## Step 0: Just build it!

“Zero” not only because we are programmers, also because it’s one fundamental step before taking any further. You must be building the Minimum Viable Product (**MVP**) as soon as possible, or at the very least, a small chunk of it.

You’re **not** striving for perfection. You just need a working version.

## Step 1: Start small

As a reference, pick a small library with similar use cases to your idea.
Here’s my criteria for selecting one:

- **Popular**: not because it’s the new kid on the block, but because it’s been well-maintained for a long while with a large, active user-base.

- **Well-tested**: because quality is important - look for integration/e2e tests and unit tests.

- **Challenging enough for analysis**: you don’t wanna be tackling the Express framework or React on your first go. Pick a library that is considerably smaller, which you can determine by the following factor.

- **Number of dependencies**: one way to tell if a library is **not** too challenging to be used as study source is based on the production dependencies count. The fewer the better. For example, I chose [`debug`](https://github.com/debug-js/debug) because it only has 1 dependency ([ms](https://github.com/vercel/ms)), while the rest of the code relies on core NodeJS modules - which is exactly what I was looking for - to learn how to build a library from scratch, not off the shelf libraries with many external deps, which in turn are based on more deps. There you go, dependency hell.

## Step 2: Break it down smaller

After you’ve picked a library, break it down even smaller. Study how the main functions work by replicating their behaviors: **isolate** those functions, provide input, and see the output.

This is one of the few times that you should allow yourself to fall into **rabbit holes**, and really understand the in’s and out’s of each line of code in a function.

For example:

![debugjs formatArgs function](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lhty7tjo2kzdtm4q7apt.png)

This is the `formatArgs()` function of the [`debug`](https://github.com/debug-js/debug) library. By isolating it, I learned about ANSI colour escape codes, and where and how the properties of one debug instance is used (`namespace`, `useColours`, and `this.colour`)

## Step 3: Publish

After you’ve studied other approaches and built your own module, all there's left to do is hit publish, right? Well, not before you complete these three things.

- **Semantic Versioning**: for every update (major, minor, or patch) made, increment the version number according to [semantic versioning](https://semver.org/).

- **Changelog/history**: track and display the updates you’ve made so far - the version number, the date you published it, and a brief description of those changes.

![scope-logger changelog/history](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nnhdpfn4h4ee7askboud.png)

- **Documentation**: You cannot expect other developers to magically figure out how to use your library without detailed descriptions of the features. It also serves as a roadmap of what you’ve built. You can either dedicate a whole website for it or simply fill in the [README.md](https://github.com/Zen-cronic/scope-logger/#readme) file.

_Note: I left out **tests** because we should be writing them as the library is being built, not just before hitting publish._

---

### Recipe Recap

- **Zero**: you build a working version.
- **One**: start small by picking a small but challenging enough library to learn from
- **Two**: analyze that library by breaking it down into even smaller pieces
- **Three**: after attaching semantic versioning, changelog, and documentation, hit publish.

## Breaks are Great!

These steps are in a loop, repeated until it’s time for a **break**, which is just as important as the preceding steps.

As a rule of thumb, after publishing your major or minor version, or several patch updates in a row, take your _well-deserved_ break!

Taking a break is great for discovering more use cases as you use the library/module you just made in other projects.

As you might’ve guessed, I did use [`scope-logger`](https://github.com/Zen-cronic/scope-logger) to develop other modules. By doing so, I found features that I _really_ needed, not just stuff that I thought would be cool to have.

When a particular use case keeps popping up, that’s my **cue** to update the library with a new feature to address it.

## Key Takeaways:

1. **Solve your own problems first**: As a budding developer, how do you go about determining what projects to pursue? The idea for this library occurred to me as I was building projects for my portfolio. With limited industry connections and programming know-how to cater to a target audience, I felt stuck. But there lurked a hidden opportunity. If you're in the same boat, try this: _ditch the latest trends, and double down on understanding the nuts and bolts of one technology, to tackle a problem that's currently bogging **you** down_.

2. **Reinvent the wheel, sometimes**: And to solve your developer problem, contrary to conventional advice, you must reinvent the wheel to understand in-depth how the wheel is built. In the long haul, the **time** and **effort** put into studying a great library, and building one using core modules and fundamental programming principles, is what’s gonna make you _stand out_.

3. **Depth && Breadth (not versus)**: With that said, depth is **not** the superior path. Tread both. The _breadth_ part involves exploring other libraries, studying their differences, and observing patterns that show up repeatedly.

---

So, I invite you to try this project idea - create a library by studying great examples. As slow as it may seem, your programming craft will grow exponentially.
