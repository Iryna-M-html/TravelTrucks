"use client";
import { useState } from "react";
import Link from "next/link";
import type { Camper } from "../../types/camper";
import css from "./CatalogcampersList.module.css";
import Image from "next/image";
import ShowmoreButton from "../ShowmoreButton/ShowmoreButton";

interface CampersListProps {
  campers: Camper[];
}

const CampersList = ({ campers }: CampersListProps) => {
  const [visibleCount, setVisibleCount] = useState(4);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  const visibleCampers = campers.slice(0, visibleCount);

  const isFinished = visibleCount >= campers.length;

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {visibleCampers.map(
          ({
            id,
            name,
            price,
            rating,
            location,
            description,
            transmission,
            engine,
            AC,
            gallery,
          }) => (
            <li key={id} className={css.card}>
              <Image
                src={gallery[0]?.thumb || "/placeholder.jpg"}
                alt={name}
                width={292}
                height={320}
                className={css.image}
              />

              <div className={css.content}>
                <div className={css.header}>
                  <h2 className={css.name}>{name}</h2>
                  <span className={css.price}>€{price}.00</span>
                </div>

                <div className={css.meta}>
                  <span className={css.rating}>⭐ {rating}</span>
                  <span className={css.location}>{location}</span>
                </div>

                <p className={css.description}>{description}</p>

                <ul className={css.features}>
                  <li>{transmission}</li>
                  <li>{engine}</li>
                  {AC && <li>AC</li>}
                </ul>

                <Link href={`/catalog/${id}`} className={css.detailLink}>
                  <ShowmoreButton
                    handleButtonClick={() => {}}
                    textBtn="Show more"
                  />
                </Link>
              </div>
            </li>
          )
        )}
      </ul>

      <button
        type="button"
        className={css.loadMoreBtn}
        onClick={loadMore}
        disabled={isFinished}
      >
        Load more
      </button>
    </div>
  );
};

export default CampersList;
