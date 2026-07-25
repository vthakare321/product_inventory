import type { ErrorStateProps } from "./ErrorState.type"

export function ErrorState({
  title = 'Something went wrong',
  description = 'An unexpected error occurred. Please try again.',
  action,
}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-red-200 bg-red-50 px-6 py-12 text-center dark:border-red-900 dark:bg-red-950">
      <h2 className="text-lg font-semibold text-red-700 dark:text-red-400">
        {title}
      </h2>

      <p className="mt-2 max-w-md text-sm text-red-600 dark:text-red-300">
        {description}
      </p>

      {action && (
        <div className="mt-6">
          {action}
        </div>
      )}
    </div>
  );
}

ErrorState.displayName = 'ErrorState';