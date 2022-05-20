import { Paper, Button } from "@mui/material";

export const Logout = () => {
  const paperStyle = {
    padding: 40,
    margin: "40px auto",
    width: 400,
  };
  const handleSubmit = () => {
    console.log("logout");
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
