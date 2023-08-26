import { Actor } from "../types";

type ActorCardProps = {
  actor: Actor;
  className: string;
};
const ActorCard = ({ actor, className }: ActorCardProps) => {
  return (
    <div className={className}>
      {actor.profilePath ? (
        <img
          src={`https://image.tmdb.org/t/p/w200${actor.profilePath}`}
          alt={actor.name}
          title={actor.name}
          width={100}
          className="rounded"
        />
      ) : (
        <div className="w-[100px] h-[150px] border rounded grid justify-items-center justify-self-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 my-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </div>
      )}
      <p className="text-xs text-left mt-1">{actor.name}</p>
    </div>
  );
};

export default ActorCard;
