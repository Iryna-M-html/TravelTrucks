import { useFavouritesStore } from "@/lib/store/camperFavouritestore";
import { LuHeart } from "react-icons/lu";
import css from "./FavoriteHeartButton.module.css";
import { Camper } from "@/types/camper";

interface FavouriteHeartButtonProps {
  id: Camper["id"];
}

export default function FavouriteHeartButton({
  id,
}: FavouriteHeartButtonProps) {
  const { favourites, toggleFavourite } = useFavouritesStore();

  const isFavourite = favourites.includes(id);

  return (
    <button
      className={css.favorites}
      onClick={() => toggleFavourite(id)}
      aria-label="Обране"
    >
      <LuHeart
        className={css.iconHeart}
        size={24}
        stroke={isFavourite ? "#e44848" : "#101828"}
        fill="transparent"
        strokeWidth={2}
      />
    </button>
  );
}
