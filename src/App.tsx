import { RouterProvider, createHashRouter } from "react-router-dom";

import { Layout } from "./components";

import { CVFormPage, CVListPage, CVPreviewPage, HomePage } from "./pages";

import "./App.css";

const router = createHashRouter([
  {
    element: <Layout withContainer />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/list",
        element: <CVListPage />,
      },
      {
        path: "cv",
        element: <CVFormPage />,
        children: [
          {
            path: ":id",
          },
        ],
      },
    ],
  },
  {
    element: <Layout />,
    children: [
      {
        path: "preview",
        element: <CVPreviewPage />,
        children: [
          {
            path: ":id",
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
