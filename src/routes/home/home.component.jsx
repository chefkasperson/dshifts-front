import { SignIn } from "../../components/sign-in/sign-in.component";
import { Logout } from "../../components/logout/logout.component";
import { Referral } from "../../components/referral/referral.component";

export const Home = () => {
  return (
    <>
      <Referral />
      <Logout />
    </>
  );
};
