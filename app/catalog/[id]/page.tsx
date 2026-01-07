import { fetchCamperById } from "@/lib/api/clientApi";
import css from "./camperid.module.css";
import Image from "next/image";
import NavigationTabs from "@/components/NavigationTabs/NavigationTabs";

export default async function CamperDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const camper = await fetchCamperById(params.id);

  return (
    <div className="container">
      <h1>{camper.name}</h1>
      <div className={css.meta}>
        <span className={css.rating}>⭐{camper.rating} </span>
        <span className={css.location}>{camper.location}</span>
      </div>
      <span className={css.price}>€{camper.price}.00</span>
      <ul className={css.galleryList}>
        {camper.gallery.map((item, index) => (
          <li key={index} className={css.galleryItem}>
            <Image
              src={item.original || item.thumb}
              alt={`${camper.name} ${index}`}
              width={292}
              height={310}
              className={css.galleryImage}
            />
          </li>
        ))}
      </ul>

      <p className={css.description}>{camper.description}</p>
      <NavigationTabs />
    </div>
  );
}
