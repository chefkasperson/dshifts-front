import { useState, useContext } from "react";
import { Grid, Paper, Avatar, TextField, Button } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SendIcon from "@mui/icons-material/Send";

const defaultEmailField = "";

export const Referral = () => {
  const [email, setEmail] = useState(defaultEmailField);
  const resetEmailField = () => {
    setEmail(defaultEmailField);
  };
  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = () => {
    resetEmailField();
  };
  const paperStyle = {
    padding: 40,
    height: "auto",
    width: 400,
    margin: "40px auto",
  };
  const avatarStyle = {
    backgroundColor: "Blue",
  };
  const buttonStyle = {
    marginTop: "40px",
  };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <MailOutlineIcon />
          </Avatar>
          <h2>Send a Referral Email</h2>
        </Grid>
        <TextField
          label="Email"
          variant="standard"
          placeholder="Enter Email"
          type="email"
          value={email}
          onChange={handleChange}
          fullWidth
          required
        />

        <Button
          style={buttonStyle}
          type="submit"
          fullWidth
          variant="contained"
          endIcon={<SendIcon />}
          onClick={handleSubmit}
        >
          Send Referral
        </Button>
      </Paper>
    </Grid>
  );
};
