

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home"
import Error from "./pages/Error/Error"
import ProductList from "./pages/ProductList/ProductList"
import ProductDetail from "./pages/ProductDetail/ProductDetail"
import Contact from "./pages/Contact/Contact"
import './App.scss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: "/pokebowls",
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
