import "./styles/App.css";
import Busqueda from "./components/Busqueda";
import { lazy } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ShoppingCartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home = lazy(() => import("./views/Home"));
const Resultados = lazy(() => import("./views/Resultados"));
const Cart = lazy(() => import("./views/Cart"));
const ProductoView = lazy(() => import("./views/ProductoView"));
const NoAvailable = lazy(() => import("./views/NoAvailable"));

const Layout = () => {
  return (
    <>
      {/* <Busqueda /> */}
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
