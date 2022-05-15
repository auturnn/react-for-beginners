import { Link } from "react-router-dom";

interface MovieData {
  id?: string;
  title: string;
  cover_image: string;
  genres: string[];
  year: number;
  summary: string;
}

function Movie(movie: MovieData) {
  return (
    <div>
      <img src={movie.cover_image} alt="" />
      <h2>
        <Link to={`${process.env.PUBLIC_URL}/movie/${movie.id}`}>
          {movie.title}
        </Link>
      </h2>
      <p>
        {movie.summary.length > 235
          ? `${movie.summary.slice(0, 235)}`
          : movie.summary}
      </p>
      <ul>
        {movie.genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
