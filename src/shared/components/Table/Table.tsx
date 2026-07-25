// src/shared/components/Table/Table.tsx

import type { FC } from 'react';

import type {
  TableCellProps,
  TableHeadCellProps,
  TableProps,
  TableRowProps,
  TableSectionProps,
} from './Table.types';

type TableComponent = FC<TableProps> & {
  Head: FC<TableSectionProps>;
  Body: FC<TableSectionProps>;
  Row: FC<TableRowProps>;
  HeaderCell: FC<TableHeadCellProps>;
  Cell: FC<TableCellProps>;
};

const TableHead: FC<TableSectionProps> = ({
  children,
  className = '',
}) => (
  <thead
    className={`bg-gray-100 dark:bg-gray-800 ${className}`}
  >
    {children}
  </thead>
);

TableHead.displayName = 'Table.Head';

const TableBody: FC<TableSectionProps> = ({
  children,
  className = '',
}) => (
  <tbody className={className}>
    {children}
  </tbody>
);

TableBody.displayName = 'Table.Body';

const TableRow: FC<TableRowProps> = ({
  children,
  className = '',
}) => (
  <tr
    className={`
      border-b
      border-gray-200
      hover:bg-gray-50
      dark:border-gray-700
      dark:hover:bg-gray-800
      ${className}
    `}
  >
    {children}
  </tr>
);

TableRow.displayName = 'Table.Row';

const TableHeaderCell: FC<TableHeadCellProps> = ({
  children,
  className = '',
}) => (
  <th
    className={`
      px-4
      py-3
      text-left
      text-sm
      font-semibold
      text-gray-700
      dark:text-gray-200
      ${className}
    `}
  >
    {children}
  </th>
);

TableHeaderCell.displayName = 'Table.HeaderCell';

const TableCell: FC<TableCellProps> = ({
  children,
  className = '',
}) => (
  <td
    className={`
      px-4
      py-3
      text-sm
      text-gray-700
      dark:text-gray-300
      ${className}
    `}
  >
    {children}
  </td>
);

TableCell.displayName = 'Table.Cell';

const Table = (({
  children,
  className = '',
  ...props
}: TableProps) => (
  <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
    <table
      className={`
        min-w-full
        border-collapse
        bg-white
        dark:bg-gray-900
        ${className}
      `}
      {...props}
    >
      {children}
    </table>
  </div>
)) as TableComponent;

Table.displayName = 'Table';

Table.Head = TableHead;
Table.Body = TableBody;
Table.Row = TableRow;
Table.HeaderCell = TableHeaderCell;
Table.Cell = TableCell;

export { Table };