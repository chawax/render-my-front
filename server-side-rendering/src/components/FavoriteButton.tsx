import useFavorites from "@/hooks/useFavorites";

type FavoriteProps = {
  id: number;
};

const Button = ({
  children,
  ...otherProps
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="bg-stone-500 hover:bg-stone-600 hover:scale-105 text-white text-sm text-center rounded-xl w-max py-2 px-4"
      {...otherProps}
    >
      {children}
    </button>
  );
};

const Favorite = ({ id }: FavoriteProps) => {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites(id);
  if (isFavorite) {
    return <Button onClick={removeFavorite}>Supprimer des favoris</Button>;
  } else {
    return <Button onClick={addFavorite}>Ajouter aux favoris</Button>;
  }
};

export default Favorite;
