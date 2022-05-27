import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeMovie } from "../feautures/favListSlice";
import { addFavID } from "../feautures/apiSlice";
import { addFavListName } from "../feautures/listNameSlice";
import api from "../api";
import { Link } from "react-router-dom";
import { setDisable } from "../feautures/saveToggle";
import styles from "./Favourites.module.css";

function Favorites() {
  const favs = useSelector((state) => state.favs);
  const dispatch = useDispatch();

  const apiID = useSelector((state) => state);

  const [listName, setListName] = useState("Example List");
  const handleSave = async (e) => {
    await api
      .save({
        title: listName,
        movies: favs,
      })
      .then((d) => {
        dispatch(addFavID(d.id));
        dispatch(addFavListName(listName));
        dispatch(setDisable());
      });
  };

  return (
    <>
      <input
        placeholder="New list name: "
        className={styles.favListName}
        defaultValue="Example List"
        onChange={(e) => setListName(e.target.value)}
        disabled={apiID.api}
      />
      <div className={styles.favList}>
        {favs.map((f) => (
          <div key={f.id} className={styles.favListItem}>
            <span>
              {f.title} {f.year}
            </span>
            <button
              type="button"
              className={styles.delBtn}
              onClick={() => {
                dispatch(removeMovie({ id: f.id }));
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>
      {apiID.api ? (
        <Link to={`/favorite/${apiID.api}`} className={styles.link}>
          Go to List
        </Link>
      ) : (
        <button onClick={handleSave} className={styles.btnSave}>
          Save
        </button>
      )}
    </>
  );
}

export default Favorites;
