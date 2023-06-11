import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ movie }) {
  return (
    <div>
      <img src={movie.medium_cover_image} alt={movie.title} />
      <h2>
        <Link to={"/movie"}>{movie.title}</Link>
      </h2>
      <p>{movie.summary}</p>
      <ul>
        {movie.hasOwnProperty("genres")
          ? movie.genres.map((genre, index) => <li key={index}>{genre}</li>)
          : null}
      </ul>
      <hr />
    </div>
  );
}

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Movie;
