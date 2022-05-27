import React, { useEffect } from "react";
import config from "../config.json";

const FavListItem = ({ id, poster, title, year }) => {

  return (
    <>
      <a href={config.moviesUrl + id + "/"} target="_blank">
        <img src={poster} alt=""/>
      </a>
      <p>
        {title}
      </p>
      <p>{year}</p>
    </>
  );
};

export default FavListItem;
