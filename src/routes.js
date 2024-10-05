export const ROUTES = {
    HOME: '/',
    FAQ: '/faq',
    ABOUT: '/about',
    PRODUCT: '/products',
    LOGIN: '/login',
    REGISTER: '/register',
    SINGLE_PRODUCT: {
      STATIC: '/product/:id', 
      DYNAMIC: (productId) => `/book/${productId}`,
    },
    NOT_FOUND: '*',
  };
  