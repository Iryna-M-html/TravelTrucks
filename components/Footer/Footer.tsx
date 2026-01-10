import css from "./Footer.module.css";
// import Link from "next/link";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        {/* <p>© {new Date().getFullYear()} TravelTrucks</p>
        <div className={css.wrap}>
          <p>Developer: Iryna Mokhnata</p>
          <p>
            Contact us:
            <Link href="mailto:student@traveltrucks.app">
              student@traveltrucks.app
            </Link>
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
