// src/shared/components/Input/Input.tsx

import type { InputProps } from "../Input/Input.type";

export function Input({
  label,
  error,
  helperText,
  className = '',
  id,
  ...props
}: InputProps) {
  return (
    <div className="flex w-full flex-col gap-1.5">
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        className={`
          h-10
          w-full
          rounded-lg
          border
          px-3
          text-sm
          outline-none
          transition-colors
          placeholder:text-gray-400
          disabled:cursor-not-allowed
          disabled:bg-gray-100
          dark:disabled:bg-gray-800
          ${
            error
              ? 'border-red-500 focus:border-red-500'
              : 'border-gray-300 focus:border-blue-500 dark:border-gray-700'
          }
          ${className}
        `}
        {...props}
      />

      {error ? (
        <p className="text-sm text-red-500">{error}</p>
      ) : helperText ? (
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {helperText}
        </p>
      ) : null}
    </div>
  );
}