import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import { routes } from "./Routes";
import Dashboard from "../pages/dashboard/Dashboard";
import ProtectedRoutes from "./ProtectedRoutes";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>

      {/*Rutas privadas*/}
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      <Route path="*" element={<h1>PAGINA NO ENCONTRADA</h1>} />
    </Routes>
  );
};

export default AppRouter;
