// src/shared/components/Modal/Modal.tsx

import { FiX } from 'react-icons/fi';

import type { ModalProps } from './Modal.types';

const sizeClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
};

export function Modal({
  isOpen,
  title,
  children,
  onClose,
  footer,
  size = 'md',
  showCloseButton = true,
}: ModalProps)  {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className={`
          w-full
          rounded-xl
          bg-white
          shadow-xl
          dark:bg-gray-900
          ${sizeClasses[size]}
        `}
        onClick={(event) => event.stopPropagation()}
      >
        {(title || showCloseButton) && (
  <div className="flex items-center justify-between border-b border-gray-200 p-5 dark:border-gray-700">
    {title && (
      <h2 className="text-lg font-semibold">
        {title}
      </h2>
    )}

    {showCloseButton && (
      <button
        type="button"
        onClick={onClose}
        className="rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-label="Close modal"
      >
        <FiX size={20} />
      </button>
    )}
  </div>
)}
        <div className="p-5">
          {children}
        </div>

        {footer && (
          <div className="flex justify-end gap-3 border-t border-gray-200 p-5 dark:border-gray-700">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

Modal.displayName = 'Modal';