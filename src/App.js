

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home"
import Error from "./pages/Error"
import ProductList from "./pages/ProductList"
import ProductDetail from "./pages/ProductDetail"
import Contact from "./pages/Contact"
import LegalNotice from "./pages/LegalNotice"
import TermesAndConditions from "./pages/TermsAndConditions"
import PrivacyPolicy from "./pages/PrivacyPolicy"
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
  {
    path: "/mentions-legales",
    element: <LegalNotice />,
  },
  {
    path: "/termes-et-conditions",
    element: <TermesAndConditions />,
  },
  {
    path: "/politique-de-confidentialite",
    element: <PrivacyPolicy />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
