import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import FavListItem from "../components/FavListItem";
import { selectFavs } from "../feautures/favListSlice";
import { selectFavName } from "../feautures/listNameSlice";
import "./FavoritesPage.css";

const FavoritesPage = () => {
  const favs = useSelector(selectFavs);

  const listName = useSelector(selectFavName);

  return (
    <div className="favContainer">
      <h3>Your List is {listName}</h3>
      <section
        id="image-carousel"
        className="splide favSlider"
        aria-label="Beautiful Images"
      >
        <div className="splide__track">
          <ul className="splide__list">
            {favs.map((m) => (
              <li key={m.id} className="splide__slide">
                <FavListItem
                  id={m.id}
                  title={m.title}
                  year={m.year}
                  poster={m.poster}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default FavoritesPage;
