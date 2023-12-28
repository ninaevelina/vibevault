import Columns from "@/components/Home/Columns/Columns";
import "./container.scss";
import { columnsData } from "@/types/columnData";

export const Container = () => {
  return (
    <section className="wrapper">
      <Columns columnsData={columnsData} />
    </section>
  );
};

export default Container;
