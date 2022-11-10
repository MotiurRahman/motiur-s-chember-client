export const setAuthToken = (user) => {
  const currentUser = {
    email: user.email,
  };
  console.log("currentUser", currentUser);

  fetch(
    "https://b6a11-service-review-server-side-motiur-rahman-motiurrahman.vercel.app/jwt",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(currentUser),
    }
  )
    .then((res) => {
      // console.log(res.json());
      return res.json();
    })
    .then((data) => {
      localStorage.setItem("chember-token", data.token);
      console.log("chember-token", localStorage.getItem("chember-token"));
      //navigate(from, { replace: true });
    });
};

// headers: {
//   method:"POST"
//      "Content-Type": "application/json",
//     authorization: `Bearer ${localStorage.getItem("chember-token")}`,
//   },
