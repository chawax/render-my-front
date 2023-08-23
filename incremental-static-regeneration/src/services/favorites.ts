const loadFavorites = (): number[] => {
  const value = localStorage.getItem("favorites");
  const favorites: number[] = value ? JSON.parse(value) : [];
  return favorites;
};

const saveFavorites = (favorites: number[]): void => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export { loadFavorites, saveFavorites };
