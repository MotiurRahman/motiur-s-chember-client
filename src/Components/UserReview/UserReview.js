import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { UserContext } from "../../AuthContext/AuthContext";
import AllReview from "./AllReview";

const UserReview = () => {
  const { user } = useContext(UserContext);
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/myreview?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setReviewData(data));
  }, []);

  // Delete Review
  const handleDeleteReview = (id) => {
    if (window.confirm("Would you like to delete this review?")) {
      fetch(`http://localhost:8000/myreview/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast("Review deteled Succwssfully");
            const remaining = reviewData.filter((review) => review._id != id);
            setReviewData(remaining);
          }
        });
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5">
      {reviewData.map((myreview) => (
        <AllReview
          key={myreview._id}
          myreview={myreview}
          handleDeleteReview={handleDeleteReview}
        ></AllReview>
      ))}
    </div>
  );
};

export default UserReview;
