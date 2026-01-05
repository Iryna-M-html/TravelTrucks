"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div>
          {/* Logo */}
          <Link href="/">
            {/* <svg width={136} height={16}>
              <use href="/  "></use>
            </svg> */}
          </Link>

          {/* Desktop navigation */}
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
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
      </div>
    </header>
  );
}
