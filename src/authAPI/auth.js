export const setAuthToken = (user) => {
  const currentUser = {
    email: user.email,
  };
  fetch("http://localhost:3000/jwt", {
    method: "POST",
    headers: { "content-type": "Application/json" },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("chember-token", data.token);
      //navigate(from, { replace: true });
    });
};

// headers: {
//   method:"POST"
//      "Content-Type": "application/json",
//     authorization: `Bearer ${localStorage.getItem("chember-token")}`,
//   },
