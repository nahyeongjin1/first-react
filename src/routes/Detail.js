import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  const getMovie = async (id) => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setMovie(json.data.movie);
    console.log(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie(id);
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>{movie.title_long}</h1>
          <hr />
          <img src={movie.large_cover_image} alt={movie.title} />
          <br />
          <span>⭐️: {movie.rating} / 10</span>
          <br />
          <span>👍: {movie.like_count}</span>
          <br />
          <span>
            <Link to={movie.url}>{movie.url}</Link>
          </span>
        </div>
      )}
    </div>
  );
}

export default Detail;
