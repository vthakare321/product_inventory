export const QUERY_KEYS = {
  auth: {
    profile: ['auth', 'profile'] as const,
  },

  products: {
    all: ['products'] as const,

    detail: (id: number) => ['products', id] as const,
  },
} as const;