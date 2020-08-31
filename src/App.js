import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
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
  const { isLoading, isAuthenticated, error } = useAuth0();

  if (isLoading) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span>Still loading!</span>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        {!isAuthenticated && <LoginButton />}
        {isAuthenticated && (
          <>
            <button
              className="App-attentionButton"
              onClick={() => {
                console.log("hello!");
              }}
            >
              Attention Please
            </button>
            <LogoutButton />
          </>
        )}
      </header>
    </div>
  );
}

export default App;
