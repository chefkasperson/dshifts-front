export const SignUpUser = async (email, password) => {
  if (!email || !password) return;

  return await createNewUser(email, password);
};

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
    const data = await fetchResponse;
    localStorage.setItem("token", data.headers.get("Authorization"));
    return data.json();
  } catch (error) {
    console.log(error);
    return error;
  }
};

const createNewUser = async (email, password) => {
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
    const data = await fetchResponse;
    localStorage.setItem("token", data.headers.get("Authorization"));
    return data.json();
  } catch (error) {
    console.log(error);
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
