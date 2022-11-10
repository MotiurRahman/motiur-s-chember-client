import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../AuthContext/AuthContext";

const UpdateReview = () => {
  const { user } = useContext(UserContext);
  const [reviewData, setReviewData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8000/myreview/${user.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("chember-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setReviewData(data));
  }, []);
  return (
    <div>
      <h1>update review</h1>
    </div>
  );
};

export default UpdateReview;
