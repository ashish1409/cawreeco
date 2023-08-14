import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { ReecoStore } from "./pages/reecoStore/ReecoStore";
import { Store } from "./features/store";
import { Orders } from "./pages/order/Orders";
import { Analytics } from "./pages/analytics/Analytics";
import { Provider } from "react-redux";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      { path: "ReecoStore", element: <ReecoStore /> },
      { path: "Orders", element: <Orders /> },
      { path: "Analytics", element: <Analytics /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <RouterProvider router={router} />
  </Provider>
);
