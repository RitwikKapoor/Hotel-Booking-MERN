import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_APP_DOMAIN_NAME}
      clientId={import.meta.env.VITE_APP_CLIENT_ID}
      authorizationParams={{
        redirect_uri: import.meta.env.VITE_APP_FRONTEND_URL,
        audience: import.meta.env.VITE_APP_AUDIENCE
      }}
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

