import React from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../feautures/favListSlice";
import styles from "./MovieListItem.module.css";

export default function MovieItem({ movie, disable }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(
      addMovie({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster,
      })
    );
  };

  return (
    <div className={styles.cardFilm}>
      <img
        src={movie.Poster}
        className={styles.poster}
        onError={(e) => (
          (e.target.onerror = null),
          (e.target.src =
            "https://cringemdb.com/img/movie-poster-placeholder.png")
        )}
      />

      <div >
        <h3 className={styles.movieInfo}>
          {movie.Title} {`(${movie.Year})`}
        </h3>
        <button
          type="button"
          className={styles.addBtn}
          disabled={disable}
          onClick={handleAdd}
        >
          Add to favorite ⭐
        </button>
      </div>
    </div>
  );
}
