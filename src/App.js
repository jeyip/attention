import React from "react";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import { domain, authZeroClientId } from "./constants";
import logo from "./logo.svg";
import "./App.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
};

function App() {
  return (
    <Auth0Provider
      domain={domain}
      clientId={authZeroClientId}
      redirectUri={window.location.origin}
    >
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit s<code>src/App.js</code> and save to reload.
          </p>
          <LoginButton />
          <LogoutButton />
        </header>
      </div>
    </Auth0Provider>
  );
}

export default App;
