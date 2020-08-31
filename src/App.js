import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { breathe } from "./api";
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
  const { isLoading, isAuthenticated } = useAuth0();

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
              onClick={async () => {
                const result = await breathe({
                  cycles: 1,
                  toColor: "#ed43a0",
                  period: 5,
                  persist: false,
                  powerOn: true,
                });

                console.log(result);
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
