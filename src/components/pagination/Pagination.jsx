import React, { useEffect } from "react";
import "./Pagination.scss";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";

const Pagination = ({
  currentPage,
  setCurrentPage,
  productsPerPage,
  totalProducts,
}) => {
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage, setCurrentPage]);

  if (totalProducts === 0) {
    return null;
  }

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const paginateNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const paginatePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

 
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5; 


    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
    
      pages.push(1);

     
      if (currentPage > 4) {
        pages.push('...'); 
      }

    
      const startPage = Math.max(2, currentPage - 2);
      const endPage = Math.min(totalPages - 1, currentPage + 2);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

  
      if (currentPage < totalPages - 3) {
        pages.push('...');
      }
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <ul className="pagination">
      <li
        onClick={paginatePrev}
        className={currentPage === 1 ? "hidden" : ""}
      >
        <TbChevronLeft className="icon" />
      </li>

      {pageNumbers.map((number, index) => (
        <li
          key={index}
          onClick={() => typeof number === 'number' && paginate(number)}
          className={currentPage === number ? "active" : ""}
        >
          {number}
        </li>
      ))}

      <li
        onClick={paginateNext}
        className={currentPage === totalPages ? "hidden" : ""}
      >
        <TbChevronRight className="icon" />
      </li>

      <p>
        <b className="page">{`Page ${currentPage}`}</b>
        <span>{` of `}</span>
        <b>{`${totalPages}`}</b>
      </p>
    </ul>
  );
};

export default Pagination;
