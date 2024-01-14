export interface ColumnData {
  link: string;
  imageUrl: string;
  heading: string;
  text: string;
}

export interface ColumnsProps {
  columnsData: ColumnData[];
}

export const columnsData: ColumnData[] = [
  {
    link: "/albums",
    imageUrl: "/",
    heading: "View all albums",
    text: "",
  },
  {
    link: "/about",
    imageUrl: "/",
    heading: "What's our story?",
    text: "",
  },
  {
    link: "/contact",
    imageUrl: "/",
    heading: "Get in touch! 🖤 ",
    text: "",
  },
  {
    link: "/contact",
    imageUrl: "/",
    heading: "Request an album",
    text: "",
  },
];
