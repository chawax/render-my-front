import { addFavorite, isFavorite, removeFavorite } from "@/services";
import { useEffect, useState } from "react";

const useFavorites = (id: number) => {
  const [favorite, setFavorite] = useState(false);
  useEffect(() => {
    setFavorite(isFavorite(id));
  }, [id]);

  const handleAddFavorite = () => {
    setFavorite(!favorite);
    addFavorite(id);
  };

  const handleRemoveFavorite = () => {
    setFavorite(!favorite);
    removeFavorite(id);
  };

  return {
    isFavorite: favorite,
    addFavorite: handleAddFavorite,
    removeFavorite: handleRemoveFavorite,
  };
};

export default useFavorites;
