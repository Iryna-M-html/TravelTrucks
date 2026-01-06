import Link from "next/link";
import Image from "next/image";
import css from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={css.heroSection}>
      <div className="container">
        {/* Фоновое изображение */}
        <div className={css.imageWrapper}>
          <Image
            src="/img/hero.jpg"
            alt="Campers background"
            fill
            priority
            className={css.image}
          />
        </div>

        <div>
          <div className={css.content}>
            <h1 className={css.title}>Campers of your dreams</h1>
            <p className={css.text}>
              You can find everything you want in our catalog
            </p>
            <Link href="/catalog" className={css.button}>
              View Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
