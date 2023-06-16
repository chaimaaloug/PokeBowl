

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "pages/Error/Error";
import ProductList from "pages/ProductList/ProductList";
import ProductDetail from "pages/ProductDetail/ProductDetail";
import Home from "pages/Home/Home";
import Contact from "pages/Contact/Contact";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: "/product-list",
    element: <ProductList />,
  },
  {
    path: "/product-detail",
    element: <ProductDetail />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
