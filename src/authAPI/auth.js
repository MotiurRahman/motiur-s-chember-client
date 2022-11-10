export const setAuthToken = (user) => {
  const currentUser = {
    email: user.email,
  };

  fetch("http://localhost:8000/jwt", {
    method: "POST",
    headers: { "content-type": "Application/json" },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("chember-token", data.token);
      // console.log("chember-token", localStorage.getItem("chember-token"));
      //navigate(from, { replace: true });
    });
};

// headers: {
//   method:"POST"
//      "Content-Type": "application/json",
//     authorization: `Bearer ${localStorage.getItem("chember-token")}`,
//   },
