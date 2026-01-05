"use client";
import type { Camper } from "../../types/camper";

import css from "./CatalogcampersList.module.css";
import Link from "next/link";

interface CampersListProps {
  campers: Camper[];
}

const CampersList = ({ campers }: CampersListProps) => {
  return (
    <ul className={css.list}>
      {campers.map(
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
        }) => (
          <li key={id} className={css.card}>
            {/* <img src="/placeholder.jpg" alt={name} className={css.image} /> */}

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

              <button className={css.button}>Show more</button>
            </div>
          </li>
        )
      )}
    </ul>
  );
};

export default CampersList;
