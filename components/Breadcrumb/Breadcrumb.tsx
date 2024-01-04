"use client";
import Link from "next/link";
import { Album } from "@prisma/client";

import { usePathname } from "next/navigation";

interface LinkProps {
  album: Album;
}

export default function Breadcrumb({ album }: LinkProps) {
  const pathname = usePathname();
  console.log(pathname);

  const slugLink = `/albums/${album.slug}`;
  const active = pathname === slugLink ? "active" : "";

  return (
    <div>
      <nav className="secondary-nav">
        <ul className="nav-items">
          <li className="nav-items__item">
            <Link href={"/albums"} className="nav-items__item--albums-link">
              Albums
            </Link>
          </li>
          <li className="nav-items__item">
            <Link
              href={"/albums/" + album.slug}
              className={`nav-items__item--albums-link-active ${active}`}
            >
              {album.title}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
