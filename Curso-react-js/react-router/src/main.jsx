import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Importando as pages
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import ContactDetails from "./pages/ContactDetails.jsx";

// 1 - Configurando router
import { createBrowserRouter, RouterProvider, Navigate } from "react-router";

const router = createBrowserRouter([
  {
    // 2 - reaproveitamento de estrura principal com o componente base App
    // O componete base o App fica foram do children
    path: "/",
    element: <App />,
    // 3 - Página de erro
    errorElement: <ErrorPage />,
    // No children é onde ficarão nossas páginas
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      // 5 - Rotas aninhadas / nested routes utiliza o :id o outro campo
      {
        path: "/contact/:id",
        element: <ContactDetails />,
      },
      // 7 - Redirecionamento quando uma página não existe mais
      {
        path: "oldcontact",
        element: <Navigate to="/contact" />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* 1 - Configurando router */}
    <RouterProvider router={router} />
  </StrictMode>,
);
