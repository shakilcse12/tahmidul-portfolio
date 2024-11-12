import { createBrowserRouter } from 'react-router-dom';
import CommonLayout from './layouts/CommonLayout';
import Homepage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import { ROUTES } from './routes';
import ImageSection from './components/ImageSection';

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <CommonLayout />,
    children: [
      { path: ROUTES.HOME, element: <Homepage /> },
      { path: ROUTES.PRODUCT, element: <ImageSection /> },
    //   { path: ROUTES.BLOG, element: <BLOG /> },
    //   { path: ROUTES.SINGLE_BOOK.STATIC, element: <BookDetailsPage /> },
    ],
  },
  { path: ROUTES.NOT_FOUND, element: <NotFoundPage /> },
]);

export default router;
