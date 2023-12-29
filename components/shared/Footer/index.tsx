import Link from "next/link";
import "./footer.scss";
export const Footer = () => {
  return (
    <footer>
      <div className="columns">
        <div className="columns__column">Vibevault logo</div>
        <div className="columns__column">
          <ul>
            <li>
              <Link href={"/albums"} className="columns__column--link-item">
                Albums
              </Link>
            </li>
            <li>
              <Link href={"/about"} className="columns__column--link-item">
                About
              </Link>
            </li>
            <li>
              <Link href={"/contact"} className="columns__column--link-item">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="columns__column">Lorem ipsum dolor sit amet</div>
      </div>
      <div className="copyright">
        <span>&copy; 2024 VibeVault</span>
      </div>
    </footer>
  );
};
