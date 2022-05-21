import "./App.css";
import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./routes/home/home.component";
import { Authentication } from "./routes/authentication/authentication.component";

import { UserContext } from "./contexts/user.context";

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
