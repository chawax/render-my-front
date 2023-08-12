import { useLoaderData } from "react-router-dom";
import { MovieLoaderdata } from "./loader";

export default function MovieDetailsPage() {
  const { movie } = useLoaderData() as MovieLoaderdata;
  if (movie) {
    const imgUrl = `https://image.tmdb.org/t/p/w500${movie.posterPath}`;
    return (
      <article>
        <h2>{movie.title}</h2>
        <p>{movie.tagline}</p>
        <img src={imgUrl} alt={movie.title} />
        <p>{movie.overview}</p>
        <p>{movie.releaseDate}</p>
        <p>{movie.popularity}</p>
        {movie.genres ? (
          <section>
            <h3>Genres</h3>
            <ul>
              {movie.genres.map((genre) => (
                <li key={genre}>{genre}</li>
              ))}
            </ul>
          </section>
        ) : null}
        {movie.actors ? (
          <section>
            <h3>Casting</h3>
            {movie.actors.map((actor) => {
              return (
                <div key={actor.id}>
                  <p>{actor.name}</p>
                  <img
                    src={`https://image.tmdb.org/t/p/w200${actor.profilePath}`}
                    alt={actor.name}
                  />
                </div>
              );
            })}
          </section>
        ) : null}
      </article>
    );
  } else {
    return <p>Film introuvable !</p>;
  }
}
