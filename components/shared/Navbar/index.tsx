"use client";
import "./navbar.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="nav-container">
      <ul className="nav-items">
        <li className="nav-items__item">
          <Link
            href="/albums"
            className={`nav-items__item--green ${
              pathname === "/albums" ? "active" : ""
            }`}
          >
            Albums
          </Link>
        </li>
        <li
          className={`nav-items__item ${pathname === "/about" ? "active" : ""}`}
        >
          <Link href="/about">About</Link>
        </li>
        <li
          className={`nav-items__item ${
            pathname === "/contact" ? "active" : ""
          }`}
        >
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
