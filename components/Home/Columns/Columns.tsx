"use client";
import "./columns.scss";
import Link from "next/link";
import { ColumnsProps } from "../../../types/columnData";

export const Columns = ({ columnsData }: ColumnsProps) => {
  const items = columnsData;

  return (
    <>
      {items.map((item, i) => {
        return (
          <Link href={item.link} className="column" key={i}>
            <article className="innercolumn">
              <div className="wrapper">
                <h3 className="innercolumn__heading">{item.heading}</h3>
                <div className="innercolumn__arrow"> </div>
              </div>
            </article>
          </Link>
        );
      })}
    </>
  );
};

export default Columns;
