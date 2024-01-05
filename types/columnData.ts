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
    link: "/albums",
    imageUrl: checkoutImg.src,
    heading: "View all albums",
    text: "Lorem",
  },
  {
    link: "/about",
    imageUrl: "/",
    heading: "What's our story?",
    text: "Lorem",
  },
  {
    link: "/contact",
    imageUrl: checkoutImg.src,
    heading: "Get in touch! 🖤 ",
    text: "Lorem ipsum",
  },
  {
    link: "/contact",
    imageUrl: "",
    heading: "Request an album",
    text: "Yay",
  },
];
