// src/shared/components/SearchInput/SearchInput.tsx

import { FiSearch, FiX } from 'react-icons/fi';

import type { SearchInputProps } from './SearchInput.types';

export function SearchInput({
  value,
  onClear,
  className = '',
  ...props
}: SearchInputProps) {
  const hasValue = String(value ?? '').length > 0;

  return (
    <div className="relative w-full">
      <FiSearch
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="search"
        value={value}
        className={`
          h-10
          w-full
          rounded-lg
          border
          border-gray-300
          bg-white
          pl-10
          pr-10
          text-sm
          outline-none
          transition-colors
          placeholder:text-gray-400
          focus:border-blue-500
          disabled:cursor-not-allowed
          disabled:bg-gray-100
          dark:border-gray-700
          dark:bg-gray-900
          dark:text-white
          ${className}
        `}
        {...props}
      />

      {hasValue && (
        <button
          type="button"
          onClick={onClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-gray-600"
        >
          <FiX size={18} />
        </button>
      )}
    </div>
  );
}

SearchInput.displayName = 'SearchInput';