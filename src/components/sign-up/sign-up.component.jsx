import { useState, useContext } from "react";
import { Grid, Paper, Avatar, TextField, Button } from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
// import { SignUpUser } from "../../services/rails-api/api.utils";
import { createNewUser } from "../../services/rails-api/api.utils";
import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
  email: "",
  password: "",
};

export const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const { setCurrentUser } = useContext(UserContext);
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    resetFormFields();
    const data = await createNewUser(email, password);
    if (data.data.id) {
      const user = {
        id: data.data.id,
        email: data.data.email,
      };
      setCurrentUser(user);
    } else {
      return alert("Sign Up not successful, please try again");
    }
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
          <h2>Sign Up</h2>
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
          Sign Up
        </Button>
      </Paper>
    </Grid>
  );
};
