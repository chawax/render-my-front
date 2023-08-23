import { MovieResume } from "@/types";
import { format, parse } from "date-fns";
import Image from "next/image";

type MovieCardProps = {
  movie: MovieResume;
};

const popularityFormatter = new Intl.NumberFormat("fr-FR", {
  style: "decimal",
});

const MovieCard = ({ movie }: MovieCardProps) => {
  const imgUrl = `https://image.tmdb.org/t/p/w300${movie.posterPath}`;
  const formattedReleaseDate = format(
    parse(movie.releaseDate, "yyyy-MM-dd", new Date()),
    "dd/MM/yyyy"
  );
  const formattedPopularity = popularityFormatter.format(movie.popularity);
  return (
    <article className="p-4 rounded mb-4">
      <h2 className="text-xl truncate font-bold text-center mb-4">
        {movie.title}
      </h2>
      <Image
        src={imgUrl}
        className="rounded mx-auto hover:scale-105 w-[300px] sm:w-[200px]"
        alt={movie.title}
        title={movie.title}
        width={300}
        height={200}
      />
      <p className="text-sm text-center mt-4">
        Sortie le {formattedReleaseDate}
      </p>
      <div className="mt-4 text-center">
        <span className="text-sm text-white text-center bg-stone-500 p-2 rounded-xl">
          {formattedPopularity}
        </span>
      </div>
    </article>
  );
};

export default MovieCard;
