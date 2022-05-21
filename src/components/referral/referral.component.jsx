import { useState, useContext } from "react";
import { Grid, Paper, Avatar, TextField, Button } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SendIcon from "@mui/icons-material/Send";
import { UserContext } from "../../contexts/user.context";

const defaultEmailField = "";

export const Referral = () => {
  const [email, setEmail] = useState(defaultEmailField);
  const { currentUser } = useContext(UserContext);
  const resetEmailField = () => {
    setEmail(defaultEmailField);
  };
  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = () => {
    const options = {
      user: currentUser,
      email: email,
    };
    const requestOptions = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        options,
      }),
    };
    fetch("http://localhost:3001/send_email", requestOptions)
      .then((res) => {
        if (res.ok) {
          resetEmailField();
          alert("email has been sent");
          return res.json();
        } else {
          throw new Error(res);
        }
      })
      //   .then((json) => console.dir(json))
      .catch((err) => console.log(err));
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
