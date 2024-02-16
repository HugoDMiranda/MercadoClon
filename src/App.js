import "./styles/App.css";
import { lazy } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ShoppingCartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Resultados from "./views/Resultados";
import Cart from "./views/Cart";
import ProductoView from "./views/ProductoView";
import NoAvailable from "./views/NoAvailable";

// const Home = lazy(() => import("./views/Home"));
// const Resultados = lazy(() => import("./views/Resultados"));
// const Cart = lazy(() => import("./views/Cart"));
// const ProductoView = lazy(() => import("./views/ProductoView"));
// const NoAvailable = lazy(() => import("./views/NoAvailable"));

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/items",
        element: <Resultados />,
      },
      {
        path: "/items/:id",
        element: <ProductoView />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/noAvailable",
        element: <NoAvailable />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <ShoppingCartProvider>
        <RouterProvider router={router} />
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
