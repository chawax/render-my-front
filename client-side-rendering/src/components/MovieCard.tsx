import { format, parse } from "date-fns";
import { MovieResume } from "../types";

type MovieCardProps = {
  movie: MovieResume;
};

const voteFormatter = new Intl.NumberFormat("fr-FR", {
  style: "decimal",
  maximumFractionDigits: 1,
});

const MovieCard = ({ movie }: MovieCardProps) => {
  const imgUrl = `https://image.tmdb.org/t/p/w300${movie.posterPath}`;
  const formattedReleaseDate = format(
    parse(movie.releaseDate, "yyyy-MM-dd", new Date()),
    "dd/MM/yyyy",
  );
  const formattedVote = voteFormatter.format(movie.voteAverage);
  return (
    <article className="p-4 rounded mb-4">
      <h2 className="text-xl truncate font-bold text-center mb-4">
        {movie.title}
      </h2>
      <img
        src={imgUrl}
        className="rounded mx-auto hover:scale-105 w-[300px] sm:w-[200px]"
        alt={movie.title}
        title={movie.title}
      />
      <p className="text-sm text-center mt-4">
        Sortie le {formattedReleaseDate}
      </p>
      <div className="text-sm text-center mt-4">
        Note :{" "}
        <span className="text-sm text-white text-center bg-stone-500 p-2 rounded-xl">
          {formattedVote}
        </span>
      </div>
    </article>
  );
};

export default MovieCard;
