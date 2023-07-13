import "./styles/App.css";
import Busqueda from "./components/Busqueda";
import Resultados from "./views/Resultados";
import ProductoView from "./views/ProductoView";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./views/Home";
import Footer from "./components/Footer";

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
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
