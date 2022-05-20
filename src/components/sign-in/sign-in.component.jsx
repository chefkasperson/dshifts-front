import { useState, useContext } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";

const defaultFormFields = {
  email: "",
  password: "",
};

export const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = () => {
    resetFormFields();
  };
  const paperStyle = {
    padding: 40,
    height: "auto",
    width: 400,
    margin: "40px auto",
  };
  const avatarStyle = {
    backgroundColor: "Blue",
    marginTop: "40px",
  };
  const buttonStyle = {
    marginTop: "40px",
  };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOpenIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField
          label="Email"
          variant="standard"
          placeholder="Enter Email"
          name="email"
          onChange={handleChange}
          type="email"
          value={email}
          fullWidth
          required
        />
        <TextField
          label="Password"
          variant="standard"
          placeholder="Enter Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          fullWidth
          required
        />
        <Button
          style={buttonStyle}
          variant="contained"
          type="submit"
          color="primary"
          onClick={handleSubmit}
          fullWidth
        >
          Sign In
        </Button>
      </Paper>
    </Grid>
  );
};

// fetch("http://localhost:3000/login", {
//   method: "post",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     user: {
//       email: "test@test.com",
//       password: "password",
//     },
//   }),
// })
//   .then((res) => {
//     if (res.ok) {
//       console.log(res.headers.get("Authorization"));
//       localStorage.setItem("token", res.headers.get("Authorization"));
//       return res.json();
//     } else {
//       return res.text().then((text) => Promise.reject(text));
//     }
//   })
//   .then((json) => console.dir(json))
//   .catch((err) => console.error(err));
