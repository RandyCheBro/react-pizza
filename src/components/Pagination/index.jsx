import React from "react";
import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";

function Pagination({ onChangePage, dataPages }) {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => onChangePage(e.selected + 1)}
      pageRangeDisplayed={dataPages.per_page}
      pageCount={dataPages.total_pages}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
}

export default Pagination;
