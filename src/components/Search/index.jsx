import React from "react";

import { AppContext } from "../../contexts/AppContext";

import styles from "./Search.module.scss";

function Search() {
  const { searchValue, setSearchValue } = React.useContext(AppContext);

  return (
    <div className={styles.root}>
      <label className={styles.label}>
        <svg
          className={styles.icon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L23.4142 22L22 23.4142L15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10ZM10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3Z"
            fill="black"
          />
        </svg>
        <input
          onInput={(e) => setSearchValue(e.target.value)}
          className={styles.input}
          type="text"
          name="search"
          value={searchValue}
          placeholder="Поиск пиццы..."
        />
        {searchValue && (
          <svg
            onClick={() => setSearchValue("")}
            className={styles.clearIcon}
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" />
            <path d="M0 0h48v48h-48z" fill="none" />
          </svg>
        )}
      </label>
    </div>
  );
}

export default Search;
