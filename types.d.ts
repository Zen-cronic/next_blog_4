type BlogPost = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
};

type Talk = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  eventDate: string;
  eventName: string;
  description: string;
  imgUrl: string;
  slides: string;
};

type TalkExcerpt = Omit<Talk, 
// "id" | 
"subtitle" | "slides" | "date">
