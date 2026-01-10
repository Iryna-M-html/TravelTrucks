"use client";
import { useState } from "react";
import Link from "next/link";
import type { Camper } from "../../types/camper";
import css from "./CatalogcampersList.module.css";
import Image from "next/image";
import ShowmoreButton from "../ShowmoreButton/ShowmoreButton";
import { AiFillStar } from "react-icons/ai";

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

  const formLabels: Record<string, string> = {
    panelTruck: "Van",
    fullyIntegrated: "Fully Integrated",
    alcove: "Alcove",
  };

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
            kitchen,
            TV,
            bathroom,
            gallery,
            form,
          }) => (
            <li key={id} className={css.card}>
              <div className={css.imageWrapper}>
                <Image
                  src={gallery[0]?.thumb || "/placeholder.jpg"}
                  alt={name}
                  fill
                  className={css.image}
                  sizes="(max-width: 768px) 100vw, 290px"
                />
              </div>

              <div className={css.content}>
                <div className={css.header}>
                  <h2 className={css.name}>{name}</h2>
                  <div className={css.priceWrapper}>
                    <span className={css.price}>€{price}.00</span>
                    <button
                      className={css.heartBtn}
                      aria-label="Add to favorites"
                    >
                      <svg width="24" height="24" className={css.heartIcon}>
                        <use href="/img/icons.svg#icon-heart"></use>
                      </svg>
                    </button>
                  </div>
                </div>

                <div className={css.meta}>
                  <span className={css.rating}>
                    <AiFillStar
                      size={16}
                      color="#ffc531"
                      style={{ flexShrink: 0 }}
                    />
                    {rating} (Reviews)
                  </span>
                  <span className={css.location}>
                    <svg width="16" height="16" className={css.metaIcon}>
                      <use href="/img/icons.svg#icon-map"></use>
                    </svg>
                    {location}
                  </span>
                </div>

                <p className={css.description}>{description}</p>

                <ul className={css.features}>
                  {/* Тип техніки (Vehicle Type) */}
                  <li className={css.featureItem}>
                    <svg width="20" height="20">
                      <use href={`/img/icons.svg#icon-${form}`}></use>
                    </svg>
                    <span>{formLabels[form] || form}</span>
                  </li>

                  {/* Трансмісія */}
                  <li className={css.featureItem}>
                    <svg width="20" height="20">
                      <use href="/img/icons.svg#icon-automatic"></use>
                    </svg>
                    <span>{transmission}</span>
                  </li>

                  {/* Двигун */}
                  <li className={css.featureItem}>
                    <svg width="20" height="20">
                      <use href="/img/icons.svg#icon-petrol"></use>
                    </svg>
                    <span>{engine}</span>
                  </li>

                  {/* Зручності */}
                  {kitchen && (
                    <li className={css.featureItem}>
                      <svg width="20" height="20">
                        <use href="/img/icons.svg#icon-kitchen"></use>
                      </svg>
                      <span>Kitchen</span>
                    </li>
                  )}
                  {AC && (
                    <li className={css.featureItem}>
                      <svg width="20" height="20">
                        <use href="/img/icons.svg#icon-ac"></use>
                      </svg>
                      <span>AC</span>
                    </li>
                  )}
                  {TV && (
                    <li className={css.featureItem}>
                      <svg width="20" height="20">
                        <use href="/img/icons.svg#icon-tv"></use>
                      </svg>
                      <span>TV</span>
                    </li>
                  )}
                  {bathroom && (
                    <li className={css.featureItem}>
                      <svg width="20" height="20">
                        <use href="/img/icons.svg#icon-bathroom"></use>
                      </svg>
                      <span>Bathroom</span>
                    </li>
                  )}
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
