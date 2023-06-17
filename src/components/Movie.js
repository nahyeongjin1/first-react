import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ movie }) {
  return (
    <div className={styles.movie}>
      <img
        src={movie.medium_cover_image}
        alt={movie.title}
        className={styles.movie__img}
      />
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
        </h2>
        <h3 className={styles.movie__year}>{movie.year}</h3>
        <p>
          {movie.summary.length > 235
            ? `${movie.summary.slice(0, 235)}...`
            : movie.summary}
        </p>
        <ul className={styles.movie__genres}>
          {movie.hasOwnProperty("genres")
            ? movie.genres.map((genre, index) => <li key={index}>{genre}</li>)
            : null}
        </ul>
      </div>
      <hr />
    </div>
  );
}

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Movie;
