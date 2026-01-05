"use client";

import Link from "next/link";
import css from "./Header.module.css";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <div className="container">
      <header className={css.header}>
        <div>
          {/* Logo */}
          <Link href="/" className={css.logoLink}>
            {/* <svg width={136} height={16}>
              <use href="/  "></use>
            </svg> */}
          </Link>

          {/* Desktop navigation */}
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

          {/* Desktop favorites */}
          {/* <div>
            <Button />
          </div> */}

          {/* Mobile menu button */}
          {/* <div>
            <Menu />
          </div> */}
        </div>
      </header>
    </div>
  );
}
