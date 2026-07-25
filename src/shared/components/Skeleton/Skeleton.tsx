

import type { SkeletonProps } from './Skeleton.types';

const roundedClasses = {
  sm: 'rounded',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
};

export function Skeleton({
  rounded = 'md',
  className = '',
  ...props
}: SkeletonProps) {
  return (
    <div
      className={`
        animate-pulse
        bg-gray-200
        dark:bg-gray-700
        ${roundedClasses[rounded]}
        ${className}
      `}
      {...props}
    />
  );
}

Skeleton.displayName = 'Skeleton';