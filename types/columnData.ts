import checkoutImg from "../public/img-checkout.jpg";
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
    link: "/",
    imageUrl: checkoutImg.src,
    heading: "View all albums",
    text: "Lorem",
  },
  {
    link: "/",
    imageUrl: "/",
    heading: "Lorem ipsum",
    text: "Lorem ipsum",
  },
  {
    link: "/",
    imageUrl: "/",
    heading: "Lorem ipsum",
    text: "Lorem ipsum",
  },
  {
    link: "/",
    imageUrl: "/",
    heading: "What's our story?",
    text: "Lorem",
  },
  {
    link: "/",
    imageUrl: checkoutImg.src,
    heading: "Get in touch! 🖤 ",
    text: "Lorem ipsum",
  },
  {
    link: "/",
    imageUrl: "",
    heading: " ✨ Join the community",
    text: "Yay",
  },
];
