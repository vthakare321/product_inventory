// src/shared/components/Table/Table.types.ts

import type { ReactNode, TableHTMLAttributes } from 'react';

export interface TableProps
  extends TableHTMLAttributes<HTMLTableElement> {
  children: ReactNode;
}

export interface TableSectionProps {
  children: ReactNode;
  className?: string;
}

export interface TableRowProps {
  children: ReactNode;
  className?: string;
}

export interface TableCellProps {
  children: ReactNode;
  className?: string;
}

export interface TableHeadCellProps {
  children: ReactNode;
  className?: string;
}