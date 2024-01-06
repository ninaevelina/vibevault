import { Navbar } from "../Navbar";
import "./header.scss";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="header-container">
      <div className="header-container__logo-container">
        <Link
          href="/"
          className="header-container__logo-container--link"
        ></Link>
      </div>
      <Navbar />
    </header>
  );
};
