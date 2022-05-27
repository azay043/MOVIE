import React, { useState } from "react";
import api from "../api";
import Search from "../components/SearchForm";
import MovieList from "../components/MovieList";
import Favorites from "../components/Favourites";
import styles from "./MainPage.module.css";

export default function MainPage() {
  const [films, setFilms] = useState([]);

  const onSearchHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchStr = formData.get("search");

    try {
      const response = await api.getFilms(searchStr);
      setFilms(response.Search);
    } catch (error) {
      alertify.error(error.toString());
    }
  };

  return (
    <div className={styles.mainPage}>
      <div className={styles.movies}>
        <Search onSearch={onSearchHandle} />
        <MovieList movies={films} />
      </div>
      <div className={styles.favorites}>
        <Favorites />
      </div>
    </div>
  );
}
