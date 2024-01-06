"use client";
import Link from "next/link";
import "./breadcrumb.scss";

interface BreadcrumbItem {
  label: string;
  link: string;
}

interface BreadcrumbItemsProps {
  items: BreadcrumbItem[];
}

export const BreadcrumbMenu = ({ items }: BreadcrumbItemsProps) => {
  return (
    <div className="breadcrumbs-container">
      <nav className="secondary-nav">
        <ul className="nav-items">
          {items.map((item, index) => (
            <li key={index} className="nav-items__item">
              <Link
                href={item.link}
                className={`nav-items__item--link ${
                  index === items.length - 1 ? "active" : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
