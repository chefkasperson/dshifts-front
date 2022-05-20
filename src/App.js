import "./App.css";
import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./routes/home/home.component";
import { Authentication } from "./routes/authentication/authentication.component";

import { SignIn } from "./components/sign-in/sign-in.component";
import { SignUp } from "./components/sign-up/sign-up.component";
import { Referral } from "./components/referral/referral.component";
import { UserContext } from "./contexts/user.context";
import { Logout } from "./components/logout/logout.component";

function App() {
  const { currentUser } = useContext(UserContext);
  return (
    <Routes>
      <Route
        index
        element={
          currentUser ? <Navigate to="/home" replace /> : <Authentication />
        }
      />
      <Route
        path="/home"
        element={currentUser ? <Home /> : <Navigate to="/" replace />}
      />
    </Routes>
  );
}

export default App;
