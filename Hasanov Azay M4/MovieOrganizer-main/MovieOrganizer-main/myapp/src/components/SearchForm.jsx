import React, { useState } from "react";
import styles from "./SearchForm.module.css";

const SearchForm = ({ onSearch }) => {
  const [searchString, setSearchString] = useState("");
  return (
    <form onSubmit={onSearch} className={styles.form}>
      <input
        name="search"
        type="text"
        className={styles.input}
        placeholder="Search Films ..."
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />
      <button
        type="submit"
        className={styles.button}
        id="button-addon2"
        disabled={!searchString}
      >
        Button
      </button>
    </form>
  );
};

export default SearchForm;
