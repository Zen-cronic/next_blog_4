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

type Project = {
  title: string;

  skillStack: string[];
  sourceCodeLink: string;
  description: string;
  imgUrl?: string;
  link?: string;
};
