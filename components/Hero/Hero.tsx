import Link from "next/link";
export default function Hero() {
  return (
    <section>
      <div>
        <div className="container">
          <div>
            <h1>Campers of your dreams</h1>
            <p>You can find everything you want in our catalog</p>
            <Link href="/catalog">View Now</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
