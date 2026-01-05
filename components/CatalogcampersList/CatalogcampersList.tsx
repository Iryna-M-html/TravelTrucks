"use client";
import type { Camper } from "../../types/camper";

import css from "./CatalogcampersList.module.css";
import Link from "next/link";

interface CampersListProps {
  campers: Camper[];
}
//  id: string;
//  name: string;
//  price: number;
//  rating: number;
//  location: string;
//  description: string;
//  transmission: string; //automatic
//  engine: string;
//  AC: boolean;

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
          <li key={id} className={css.listItem}>
            <div>
              <h2 className={css.name}>{name}</h2>
              <p className={css.price}>{price}</p>
              <p className={css.rating}>{rating}</p>
              <p className={css.location}>{location}</p>
              <p className={css.description}>{description}</p>
              <p className={css.transmission}>{transmission}</p>
              <p className={css.engine}>{engine}</p>
              <p className={css.AC}>{AC}</p>
            </div>
            {/* <div className={css.footer}>
              <span className={css.tag}>{tag}</span>

              <Link href={`/notes/${id}`} className={css.link}>
                View details
              </Link>
            </div> */}
          </li>
        )
      )}
    </ul>
  );
};

export default CampersList;
