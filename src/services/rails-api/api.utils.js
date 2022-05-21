// export const SignUpUser = async (email, password) => {
//   if (!email || !password || email == "" || password == "") return;

//   return await createNewUser(email, password);
// };

export const SignInUser = async (email, password) => {
  const user = { email, password };
  const requestOptions = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user,
    }),
  };

  try {
    const fetchResponse = await fetch(
      "http://localhost:3001/login",
      requestOptions
    );
    if (fetchResponse.ok) {
      const data = await fetchResponse;
      localStorage.setItem("token", data.headers.get("Authorization"));
      return data.json();
    } else {
      throw new Error(fetchResponse);
    }
  } catch (error) {
    alert("Failed to Login, please try again.");
    return error;
  }
};

export const createNewUser = async (email, password) => {
  const user = { email, password };
  const requestOptions = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user,
    }),
  };

  try {
    const fetchResponse = await fetch(
      "http://localhost:3001/signup",
      requestOptions
    );
    if (fetchResponse.ok) {
      const data = await fetchResponse;
      localStorage.setItem("token", data.headers.get("Authorization"));
      return data.json();
    } else {
      throw new Error(fetchResponse);
    }
  } catch (error) {
    alert("Could not Create User, please try again");
    return error;
  }
};

// export const LogoutUser = async (currentUser) => {
//   const token = localStorage.getItem("token");
//   const requestOptions = {
//     method: "get",
//     header: {
//       "Content-type": "application/json",
//       Authorization: token,
//     },
//   };
//   try {
//     const fetchResponse = await fetch(
//       "http://localhost:3001/logout",
//       requestOptions
//     );
//     const response = await fetchResponse.json();
//     return response;
//   } catch (error) {
//     return error;
//   }
// };
