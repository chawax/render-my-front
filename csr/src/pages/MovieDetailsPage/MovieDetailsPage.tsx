import { useLoaderData } from "react-router-dom";
import { MovieLoaderdata } from "./loader";
import { format, parse } from "date-fns";

const popularityFormatter = new Intl.NumberFormat("fr-FR", {
  style: "decimal",
});

export default function MovieDetailsPage() {
  const { movie } = useLoaderData() as MovieLoaderdata;
  if (movie) {
    const imgUrl = `https://image.tmdb.org/t/p/w500${movie.posterPath}`;
    const formattedReleaseDate = format(
      parse(movie.releaseDate, "yyyy-MM-dd", new Date()),
      "dd/MM/yyyy"
    );
    const formattedPopularity = popularityFormatter.format(movie.popularity);
    return (
      <article>
        <div>
          <h2 className="text-3xl font-bold mb-4">{movie.title}</h2>
          <p className="text-md mb-4 italic">{movie.tagline}</p>
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex-initial basis-1/4">
            <img
              src={imgUrl}
              alt={movie.title}
              width={400}
              className="rounded"
            />
          </div>
          <div className="basis-3/4">
            <p className="text-md mb-4">{movie.overview}</p>
            <p className="text-sm mb-4">Sortie le {formattedReleaseDate}</p>
            <p className="text-sm mb-4">Popularité : {formattedPopularity}</p>
            {movie.genres ? (
              <section className="mb-4">
                <h3 className="text-xl font-bold">Genres</h3>
                <ul className="list-none mt-1">
                  {movie.genres.map((genre) => (
                    <span
                      key={genre}
                      className="text-sm text-white text-center bg-stone-500 py-2 px-4 rounded-xl mr-1"
                    >
                      {genre}
                    </span>
                  ))}
                </ul>
              </section>
            ) : null}
            {movie.actors ? (
              <section className="mt-4">
                <h3 className="text-xl font-bold">Casting</h3>
                <div className="flex flex-row">
                  {movie.actors.map((actor) => {
                    return (
                      <div key={actor.id} className="p-1 w-200">
                        {actor.profilePath ? (
                          <img
                            src={`https://image.tmdb.org/t/p/w200${actor.profilePath}`}
                            alt={actor.name}
                            title={actor.name}
                            width={100}
                            className="rounded"
                          />
                        ) : null}
                        <p className="text-xs text-center mt-1">{actor.name}</p>
                      </div>
                    );
                  })}
                </div>
              </section>
            ) : null}
          </div>
        </div>
      </article>
    );
  } else {
    return <p>Film introuvable !</p>;
  }
}
