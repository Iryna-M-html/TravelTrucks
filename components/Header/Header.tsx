"use client";

import Link from "next/link";
import css from "./Header.module.css";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={css.header}>
      <div className={`container ${css.headerContent}`}>
        {/* Logo */}
        <Link href="/" className={css.logoLink}>
          <svg width={136} height={16}>
            <use href="/img/icons.svg#icon-Logo"></use>
          </svg>
        </Link>

        {/* Desktop navigation */}
        <nav>
          <ul className={css.navigation}>
            <li className={pathname === "/" ? css.active : css.navigationItem}>
              <Link href="/">Home</Link>
            </li>
            <li
              className={
                pathname === "/catalog" ? css.active : css.navigationItem
              }
            >
              <Link href="/catalog">Catalog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
