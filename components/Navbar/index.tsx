import "./navbar.scss";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/albums">Albums</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
