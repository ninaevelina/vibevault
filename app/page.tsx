import { Hero } from "@/components/Hero/Hero";
import "../styles/_globals.scss";
import Columns from "@/components/Home/Columns/Columns";
import { columnsData } from "@/types/columnData";

export default function Home() {
  return (
    <>
      <Hero />
      <Columns columnsData={columnsData} />
    </>
  );
}
