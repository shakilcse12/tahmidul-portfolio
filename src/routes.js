export const ROUTES = {
    HOME: '/',
    FAQ: '/faq',
    ABOUT: '/about',
    PRODUCT: '/product',
    SINGLE_PRODUCT: {
      STATIC: '/product/:id', 
      DYNAMIC: (productId) => `/book/${productId}`,
    },
    NOT_FOUND: '*',
  };
  