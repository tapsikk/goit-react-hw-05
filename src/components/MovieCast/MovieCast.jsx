// import "./MovieCast.css";

const MovieCast = ({ cast }) => {
  return (
    <div className="movie-cast">
      <h2>Cast</h2>
      <div className="cast-list">
        {cast.map((actor) => (
          <div key={actor.id} className="cast-item">
            <img
              src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
              alt={actor.name}
            />
            <h3>{actor.name}</h3>
            <p>{actor.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCast;