import { useEffect, useState } from "react";
import useFavorites from "./useFavorites";

const useFavorite = (id: number) => {
  const { favorites, isFavorite, addFavorite, removeFavorite } = useFavorites();
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    setFavorite(isFavorite(id));
  }, [favorites, id, setFavorite, isFavorite]);

  const handleAddFavorite = () => {
    setFavorite(true);
    addFavorite(id);
  };

  const handleRemoveFavorite = () => {
    setFavorite(false);
    removeFavorite(id);
  };

  return {
    favorite,
    addFavorite: handleAddFavorite,
    removeFavorite: handleRemoveFavorite,
  };
};

export default useFavorite;
