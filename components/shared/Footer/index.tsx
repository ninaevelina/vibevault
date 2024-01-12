import Link from "next/link";
import "./footer.scss";
export const Footer = () => {
  return (
    <footer>
      <div className="columns">
        <div className="columns__column">
          <div className="columns__column--logo-container"></div>
        </div>
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
        <div className="columns__column">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 411 401"
            className="columns__column--star-icon"
          >
            <path d="M205.5 401l-34.89-138.06-129.69 58.8 86.2-113.35L.27 143.66l142.36-3.3L114.17.86 205.5 110.1 296.83.85l-28.47 139.52 142.36 3.29-126.83 64.73 86.19 113.36-129.7-58.8L205.5 401z"></path>
          </svg>
        </div>
      </div>
      <div className="copyright">
        <span>&copy; 2024 VibeVault</span>
      </div>
    </footer>
  );
};
