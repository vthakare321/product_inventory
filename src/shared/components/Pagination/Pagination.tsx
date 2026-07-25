// src/shared/components/Pagination/Pagination.tsx

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import type { PaginationProps } from './Pagination.types';

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const pages = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  return (
    <div className="flex items-center justify-between gap-4">
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <FiChevronLeft size={18} />
      </button>

      <div className="flex items-center gap-2">
        {pages.map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={`
              h-10
              w-10
              rounded-lg
              transition-colors
              ${
                currentPage === page
                  ? 'bg-blue-600 text-white'
                  : 'border border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }
            `}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <FiChevronRight size={18} />
      </button>
    </div>
  );
}

Pagination.displayName = 'Pagination';