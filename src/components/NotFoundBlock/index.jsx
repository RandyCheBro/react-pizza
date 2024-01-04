import React from "react";

import styles from "./NotFoundBlock.module.scss"

function NotFoundBlock() {
  return (
      <div className={styles.root}>
        <h1 >
          <span>😕</span>
          <br />
          Ничего не найдено
        </h1>
        <p className={styles.desc}>Пожалуйста проверьте правильность введенного url-адреса.</p>
      </div>
  );
}

export default NotFoundBlock;
