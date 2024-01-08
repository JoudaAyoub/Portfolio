interface Project {
  title: string;
  description: string;
  content: content;
  imageUrl: string;
}
interface content {
  icon: string;
  title: string;
  description: string;
  pictures: Picture[];
  url: string;
  stack: string;
  industry: string;
  services: string;
}

type Picture = {
  imageUrl: string;
};
