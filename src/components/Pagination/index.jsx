import React from "react";
import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";

function Pagination({ handleChangePage, dataPages, totalPages = 3 }) {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(evt) => handleChangePage(evt.selected + 1)}
      pageRangeDisplayed={dataPages.per_page}
      pageCount={totalPages}
      forcePage={dataPages.current_page - 1}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
}

export default Pagination;
