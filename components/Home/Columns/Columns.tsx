import "./columns.scss";
import Image from "next/image";
import Link from "next/link";
import { ColumnsProps } from "@/types/columnData";

export const Columns = ({ columnsData }: ColumnsProps) => {
  const items = columnsData;
  console.log(items);

  return (
    <>
      {items.map((item, i) => {
        const validImageUrl = item.imageUrl && item.imageUrl.length >= 3;
        return (
          <Link href={item.link} className="column" key={i}>
            <article className="innercolumn">
              <div className="wrapper">
                {validImageUrl ? (
                  <Image
                    src={item.imageUrl}
                    height={50}
                    width={50}
                    alt="image"
                    className="innercolumn__image"
                  />
                ) : (
                  <span></span>
                )}
                <h3 className="innercolumn__heading">{item.heading}</h3>
                <span className="innercolumn__text">{item.text}</span>
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
