import { Paper, Button } from "@mui/material";
import { UserContext } from "../../contexts/user.context";
import { useContext } from "react";
export const Logout = () => {
  const paperStyle = {
    padding: 40,
    margin: "40px auto",
    width: 400,
  };
  const { setCurrentUser } = useContext(UserContext);

  const handleSubmit = async () => {
    localStorage.setItem("token", "");
    setCurrentUser(null);
  };
  return (
    <Paper elevation={10} style={paperStyle}>
      <Button
        variant="contained"
        type="submit"
        color="primary"
        onClick={handleSubmit}
        fullWidth
      >
        Logout
      </Button>
    </Paper>
  );
};
