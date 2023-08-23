import { loadFavorites, saveFavorites } from "../services";
import { useEffect, useState } from "react";

const useFavorites = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const favorites = loadFavorites();
    setFavorites(favorites);
  }, []);

  const isFavorite = (id: number) => {
    return favorites.includes(id);
  };

  const addFavorite = (id: number) => {
    const newFavorites = [...favorites, id];
    setFavorites(newFavorites);
    saveFavorites(newFavorites);
  };

  const removeFavorite = (id: number) => {
    const newFavorites = favorites.filter((element) => element !== id);
    setFavorites(newFavorites);
    saveFavorites(newFavorites);
  };

  return {
    favorites,
    isFavorite,
    addFavorite,
    removeFavorite,
  };
};

export default useFavorites;
