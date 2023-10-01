import "./styles/App.css";
import Busqueda from "./components/Busqueda";
import Resultados from "./views/Resultados";
import ProductoView from "./views/ProductoView";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./views/Home";
import Footer from "./components/Footer";
import Cart from "./views/Cart";
import { ShoppingCartProvider } from "./context/CartContext";
import NoAvailable from "./views/NoAvailable";

const Layout = () => {
  return (
    <>
      <Busqueda />
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
