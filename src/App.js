import "./styles/App.css";
import Busqueda from "./components/Busqueda";
import Resultados from "./views/Resultados";
import ProductoView from "./views/ProductoView";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Busqueda />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Busqueda />
        {/* <ProductoView /> */}
      </>
    ),
  },
  {
    path: "/",
    element: <Layout />,
    children: [
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
