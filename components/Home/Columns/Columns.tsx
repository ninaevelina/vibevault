"use client";
import "./columns.scss";
import Image from "next/image";
import Link from "next/link";
import { ColumnsProps } from "@/types/columnData";
import { useState } from "react";

export const Columns = ({ columnsData }: ColumnsProps) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [indexHovered, setIndexHovered] = useState<number | null>(null);
  const items = columnsData;
  console.log(items);

  const handleMouseMoveEnter = (index: number) => {
    setIndexHovered(index);
  };

  const handleMouseLeave = () => {
    setIndexHovered(null);
    console.log("handleMouseLeave");
  };

  const handleMouseMoveEvent = (e: React.MouseEvent) => {
    setCursorPosition({ x: e.pageX, y: e.pageY });
    console.log("handleMouseMoveEvent");
  };

  return (
    <>
      {items.map((item, i) => {
        const validImageUrl = item.imageUrl && item.imageUrl.length >= 3;
        const isHovered = i === indexHovered;
        return (
          <Link href={item.link} className="column" key={i}>
            <article
              className={`innercolumn ${isHovered ? "translated" : ""}`}
              onMouseMove={handleMouseMoveEvent}
              onMouseEnter={() => handleMouseMoveEnter(i)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="wrapper">
                {validImageUrl ? (
                  <Image
                    src={item.imageUrl}
                    height={150}
                    width={150}
                    alt="image"
                    className={`innercolumn__image ${
                      isHovered ? "translated" : ""
                    }`}
                    style={{
                      top: `${cursorPosition.y}px`,
                      left: `${cursorPosition.x}px`,
                    }}
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
