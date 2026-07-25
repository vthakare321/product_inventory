

import type { FC } from 'react';

import type { CardProps, CardSectionProps } from './Card.types';

type CardComponent = FC<CardProps> & {
  Header: FC<CardSectionProps>;
  Content: FC<CardSectionProps>;
  Footer: FC<CardSectionProps>;
};

const CardHeader: FC<CardSectionProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`
        border-b
        border-gray-200
        p-5
        dark:border-gray-700
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

CardHeader.displayName = 'CardHeader';

const CardContent: FC<CardSectionProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`
        p-5
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

CardContent.displayName = 'CardContent';

const CardFooter: FC<CardSectionProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`
        border-t
        border-gray-200
        p-5
        dark:border-gray-700
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

CardFooter.displayName = 'CardFooter';

const Card = (({
  children,
  className = '',
  ...props
}: CardProps) => {
  return (
    <div
      className={`
        rounded-xl
        border
        border-gray-200
        bg-white
        shadow-sm
        dark:border-gray-700
        dark:bg-gray-900
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}) as CardComponent;

Card.displayName = 'Card';

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;

export { Card };