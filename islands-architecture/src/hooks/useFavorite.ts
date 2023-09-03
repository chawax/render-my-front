import { useEffect, useState } from "react";

const loadFavorites = (): number[] => {
  const value = localStorage.getItem("favorites");
  const favorites: number[] = value ? JSON.parse(value) : [];
  return favorites;
};

const saveFavorites = (favorites: number[]): void => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const useFavorite = (id: number) => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const favorites = loadFavorites();
    setFavorites(favorites);
  }, []);

  const favorite = favorites.includes(id);

  const handleRemoveFavorite = () => {
    const newFavorites = favorites.filter((element) => element !== id);
    setFavorites(newFavorites);
    saveFavorites(newFavorites);
  };

  const handleAddFavorite = () => {
    if (!favorites.includes(id)) {
      const newFavorites = [...favorites, id];
      setFavorites(newFavorites);
      saveFavorites(newFavorites);
    }
  };

  return {
    favorite,
    addFavorite: handleAddFavorite,
    removeFavorite: handleRemoveFavorite,
  };
};

export default useFavorite;
