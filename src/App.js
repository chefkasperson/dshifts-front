import "./App.css";
import { useContext } from "react";
import { SignIn } from "./components/sign-in/sign-in.component";
import { SignUp } from "./components/sign-up/sign-up.component";
import { Referral } from "./components/referral/referral.component";
import { UserContext } from "./contexts/user.context";
import { Logout } from "./components/logout/logout.component";

function App() {
  const { currentUser } = useContext(UserContext);
  return (
    <div className="App">
      <SignIn />
      <SignUp />
      <Referral />
      <Logout />
    </div>
  );
}

export default App;
