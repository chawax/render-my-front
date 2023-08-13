import { loadMovie } from "@/services";
import { MovieDetails } from "@/types";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Image from "next/image";

export default function MoviePage({
  movie,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const imgUrl = `https://image.tmdb.org/t/p/w500${movie.posterPath}`;
  return (
    <article>
      <h2>{movie.title}</h2>
      <p>{movie.tagline}</p>
      <Image src={imgUrl} alt={movie.title} width={250} height={375} />
      <p>{movie.overview}</p>
      <p>{movie.releaseDate}</p>
      <p>{movie.popularity}</p>
      {movie.genres ? (
        <section>
          <h3>Genres</h3>
          <ul>
            {movie.genres.map((genre: any) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </section>
      ) : null}
      {movie.actors ? (
        <section>
          <h3>Casting</h3>
          {movie.actors.map((actor: any) => {
            return (
              <div key={actor.id}>
                <p>{actor.name}</p>
                <Image
                  src={`https://image.tmdb.org/t/p/w200${actor.profilePath}`}
                  alt={actor.name}
                  width={100}
                  height={150}
                />
              </div>
            );
          })}
        </section>
      ) : null}
    </article>
  );
}

export const getServerSideProps: GetServerSideProps<{
  movie: MovieDetails;
}> = async ({ params }) => {
  if (params && params.id) {
    // @ts-ignore
    const movie = await loadMovie(params.id);
    return { props: { movie: movie! } };
  } else {
    throw new Error("Missing id parameter");
  }
};
