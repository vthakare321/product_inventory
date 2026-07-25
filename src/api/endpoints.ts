export const API_ENDPOINTS = {
  auth: {
    login: '/auth/login',
    profile: '/auth/me',
  },

  products: {
    list: '/products',
    create: '/products/add',

    detail: (id: number) => `/products/${id}`,

    update: (id: number) => `/products/${id}`,

    delete: (id: number) => `/products/${id}`,
  },
} as const;