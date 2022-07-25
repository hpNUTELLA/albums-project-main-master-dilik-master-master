import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AlbumsProvider from "./contexts/albums";
import AuthProvider from "./contexts/auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AlbumsProvider>
        <AuthProvider />
      </AlbumsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
