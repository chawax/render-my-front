import { useQuery } from "@tanstack/react-query";
import { format, parse } from "date-fns";
import { useParams } from "react-router-dom";
import { ActorCard, FavoriteButton, Loader } from "../../components";
import { fetchOneMovie } from "../../services";

const voteFormatter = new Intl.NumberFormat("fr-FR", {
  style: "decimal",
  maximumFractionDigits: 1,
});

export default function MovieDetailsPage() {
  // Use Tanstack Query to retrieve and cache the movie details

  const { id } = useParams();
  const {
    data: movie,
    error,
    isError,
    isFetching,
    isSuccess,
  } = useQuery({
    queryKey: ["movies", id],
    // @ts-expect-error We always have an id
    queryFn: () => fetchOneMovie(id!),
  });

  // Displays a loader while fetching

  if (isFetching) {
    return <Loader />;
  }

  // Displays the error message if fetching failed

  if (isError) {
    return (
      <p className="text-red-400">
        Impossible de charger les données : {error.message}
      </p>
    );
  }

  // Displays the details of movie if fetching was successful

  if (isSuccess) {
    const imgUrl = `https://image.tmdb.org/t/p/w500${movie.posterPath}`;
    const formattedReleaseDate = format(
      parse(movie.releaseDate, "yyyy-MM-dd", new Date()),
      "dd/MM/yyyy",
    );
    const formattedVote = voteFormatter.format(movie.voteAverage);
    return (
      <article className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold">{movie.title}</h2>
        <p className="text-md italic">{movie.tagline}</p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <img
            src={imgUrl}
            alt={movie.title}
            width={500}
            className="rounded w-fit sm:basis-1/4 sm:w-[100px]"
          />

          <div className="flex flex-col gap-4 sm:basis-3/4 sm:ml-4">
            <FavoriteButton id={movie.id} />
            <p className="text-md">{movie.overview}</p>
            {movie.genres ? (
              <ul className="list-none">
                {movie.genres.map((genre) => (
                  <span
                    key={genre}
                    className="text-sm text-white text-center bg-stone-500 py-2 px-4 rounded-xl mr-1 mb-1 inline-block"
                  >
                    {genre}
                  </span>
                ))}
              </ul>
            ) : null}
            <p className="text-sm">
              Sortie le{" "}
              <span className="font-bold">{formattedReleaseDate}</span>
            </p>
            <p className="text-sm">
              Note : <span className="font-bold">{formattedVote}</span>
            </p>
            {movie.actors ? (
              <section>
                <h3 className="text-xl font-bold">Casting</h3>
                <div className="flex flex-row flex-wrap sm:flex-nowrap sm:w-200">
                  {movie.actors.map((actor) => {
                    return (
                      <ActorCard
                        key={actor.id}
                        className="p-1 basis-1/2"
                        actor={actor}
                      />
                    );
                  })}
                </div>
              </section>
            ) : null}
          </div>
        </div>
      </article>
    );
  }
}
