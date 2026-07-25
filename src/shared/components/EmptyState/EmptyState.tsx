import type { EmptyStateProps } from "./EmptyState.type";

export function EmptyState({
  title,
  description,
  icon,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 px-6 py-12 text-center dark:border-gray-700">
      {icon && <div className="mb-4">{icon}</div>}

      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h2>

      {description && (
        <p className="mt-2 max-w-md text-sm text-gray-500 dark:text-gray-400">
          {description}
        </p>
      )}

      {action && (
        <div className="mt-6">
          {action}
        </div>
      )}
    </div>
  );
}

EmptyState.displayName = 'EmptyState';