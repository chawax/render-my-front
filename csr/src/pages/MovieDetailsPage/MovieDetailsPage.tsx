import { useLoaderData } from "react-router-dom";
import { MovieLoaderdata } from "./loader";

export default function MovieDetailsPage() {
  const { movie } = useLoaderData() as MovieLoaderdata;
  if (movie) {
    return (
      <>
        <h2>{movie?.title}</h2>
        <p>{movie?.resume}</p>
      </>
    );
  } else {
    return <p>Film introuvable !</p>;
  }
}
