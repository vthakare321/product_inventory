export interface ApiResponse<T> {
  data: T;
}

export interface PaginationResponse<T> {
  data: T[];

  total: number;

  skip: number;

  limit: number;
}