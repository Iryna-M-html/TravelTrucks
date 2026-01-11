"use client";
import Link from "next/link";
import type { Camper } from "../../types/camper";
import css from "./CatalogcampersList.module.css";
import Image from "next/image";
import ShowmoreButton from "../ShowmoreButton/ShowmoreButton";
import { AiFillStar } from "react-icons/ai";

import FavouriteHeartButton from "../FavoriteHeartButton/FavoriteHartButton";

interface CampersListProps {
  campers: Camper[];
}

const CampersList = ({ campers }: CampersListProps) => {
  const formLabels: Record<string, string> = {
    panelTruck: "Van",
    fullyIntegrated: "Fully Integrated",
    alcove: "Alcove",
  };

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {campers.map((camper) => (
          <li key={camper.id} className={css.card}>
            <div className={css.imageWrapper}>
              <Image
                src={camper.gallery[0]?.thumb || "/placeholder.jpg"}
                alt={camper.name}
                fill
                className={css.image}
                sizes="(max-width: 768px) 100vw, 290px"
              />
            </div>

            <div className={css.content}>
              <div className={css.header}>
                <h2 className={css.name}>{camper.name}</h2>
                <div className={css.priceWrapper}>
                  <span className={css.price}>€{camper.price}.00</span>
                  <FavouriteHeartButton id={camper.id} />
                </div>
              </div>

              <div className={css.meta}>
                <span className={css.rating}>
                  <AiFillStar
                    size={16}
                    color="#ffc531"
                    style={{ flexShrink: 0 }}
                  />
                  {camper.rating} ({camper.reviews.length} Reviews)
                </span>
                <span className={css.location}>
                  <svg width="16" height="16" className={css.metaIcon}>
                    <use href="/img/icons.svg#icon-map"></use>
                  </svg>
                  {camper.location}
                </span>
              </div>

              <p className={css.description}>{camper.description}</p>

              <ul className={css.features}>
                <li className={css.featureItem}>
                  <svg width="20" height="20">
                    <use href={`/img/icons.svg#icon-${camper.form}`}></use>
                  </svg>
                  <span>{formLabels[camper.form] || camper.form}</span>
                </li>

                {/* Трансмісія */}
                <li className={css.featureItem}>
                  <svg width="20" height="20">
                    <use href="/img/icons.svg#icon-automatic"></use>
                  </svg>
                  <span>{camper.transmission}</span>
                </li>

                {/* Двигун */}
                <li className={css.featureItem}>
                  <svg width="20" height="20">
                    <use href="/img/icons.svg#icon-petrol"></use>
                  </svg>
                  <span>{camper.engine}</span>
                </li>

                {/* Зручності */}
                {camper.kitchen && (
                  <li className={css.featureItem}>
                    <svg width="20" height="20">
                      <use href="/img/icons.svg#icon-kitchen"></use>
                    </svg>
                    <span>Kitchen</span>
                  </li>
                )}
                {camper.AC && (
                  <li className={css.featureItem}>
                    <svg width="20" height="20">
                      <use href="/img/icons.svg#icon-ac"></use>
                    </svg>
                    <span>AC</span>
                  </li>
                )}
                {camper.TV && (
                  <li className={css.featureItem}>
                    <svg width="20" height="20">
                      <use href="/img/icons.svg#icon-tv"></use>
                    </svg>
                    <span>TV</span>
                  </li>
                )}
                {camper.bathroom && (
                  <li className={css.featureItem}>
                    <svg width="20" height="20">
                      <use href="/img/icons.svg#icon-bathroom"></use>
                    </svg>
                    <span>Bathroom</span>
                  </li>
                )}
              </ul>

              <Link href={`/catalog/${camper.id}`} className={css.detailLink}>
                <ShowmoreButton
                  textBtn="Show more"
                  handleButtonClick={() => {}}
                />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CampersList;
