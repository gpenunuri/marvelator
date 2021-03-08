import React from "react";
import Link from "next/link";

export const Pagination = ({
  perPage,
  totalCount,
  currentPage,
  base,
  param,
}) => {
  const totalPages = Math.ceil(totalCount / perPage);
  const prevPage = currentPage - 1;
  const nextPage = Number(currentPage) + 1;
  const hasNextPage = nextPage <= totalPages;
  const hasPrevPage = prevPage >= 1;
  return (
    <div className="pagination">
      <Link href={`${base}?page=${prevPage}${param}`}>
        <a
          className="pagination__link pagination__link--prev"
          disabled={!hasPrevPage}
        >
          &larr; Prev
        </a>
      </Link>
      {Array.from({ length: totalPages }).map((_, i) => (
        <Link
          href={i > 0 ? `${base}?page=${i + 1}${param}` : `${base}${param}`}
          key={i}
        >
          <a
            className={
              currentPage == i + 1
                ? "pagination__link pagination__link--active"
                : "pagination__link"
            }
          >
            {i + 1}
          </a>
        </Link>
      ))}
      <Link href={`${base}?page=${nextPage}${param}`}>
        <a
          className="pagination__link pagination__link--next"
          disabled={!hasNextPage}
        >
          Next &rarr;
        </a>
      </Link>
    </div>
  );
};
