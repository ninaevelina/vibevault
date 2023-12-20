import { Navbar } from "../Navbar";
import "./header.scss";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="header-container">
      <div className="header-container__logo-container">
        <Link href="/">Logo</Link>
      </div>
      <Navbar />
    </header>
  );
};
