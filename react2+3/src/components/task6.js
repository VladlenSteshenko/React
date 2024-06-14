import React, { useState } from "react";

const Pagination = ({ render, max }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const Render = render;

  const handleFirstPage = () => setCurrentPage(1);
  const handlePreviousPage = () =>
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, max));
  const handleLastPage = () => setCurrentPage(max);
  const handlePageClick = (page) => setCurrentPage(page);

  const renderPageButtons = () => {
    const buttons = [];
    for (let i = 1; i <= max; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          style={{ fontWeight: currentPage === i ? "bold" : "normal" }}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div>
      <Render page={currentPage} />
      <div style={{ marginTop: "20px" }}>
        <button onClick={handleFirstPage} disabled={currentPage === 1}>
          {"<<"}
        </button>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          {"<"}
        </button>
        {renderPageButtons()}
        <button onClick={handleNextPage} disabled={currentPage === max}>
          {">"}
        </button>
        <button onClick={handleLastPage} disabled={currentPage === max}>
          {">>"}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
