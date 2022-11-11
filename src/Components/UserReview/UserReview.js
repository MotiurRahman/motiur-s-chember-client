import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { UserContext } from "../../AuthContext/AuthContext";
import AllReview from "./AllReview";

const UserReview = () => {
  const { user } = useContext(UserContext);
  const [reviewData, setReviewData] = useState([]);
  const [isempty, setIsempty] = useState(true);
  const [message, setMessge] = useState("No reviews were added");

  //  console.log("chember-token", localStorage.getItem("chember-token"));
  //https://b6a11-service-review-server-side-motiur-rahman-motiurrahman.vercel.app
  useEffect(() => {
    fetch(
      `https://b6a11-service-review-server-side-motiur-rahman-motiurrahman.vercel.app/myreviews?email=${user.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("chember-token")}`,
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("data", data);
        setReviewData(data);
        if (data.length != 0) {
          setIsempty(false);
          setMessge("");
        } else {
          setIsempty(true);
          setMessge("No reviews were added");
        }
      });
  }, [reviewData]);

  // Delete Review
  const handleDeleteReview = (id) => {
    if (window.confirm("Would you like to delete this review?")) {
      fetch(
        `https://b6a11-service-review-server-side-motiur-rahman-motiurrahman.vercel.app/myreview/${id}`,
        {
          method: "DELETE",
        }
      )
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
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 place-items-center">
        {reviewData?.map((myreview) => (
          <AllReview
            key={myreview._id}
            myreview={myreview}
            handleDeleteReview={handleDeleteReview}
          ></AllReview>
        ))}
      </div>
      {isempty && (
        <h1 className="text-3xl font-bold text-center my-auto">{message}</h1>
      )}
    </>
  );
};

export default UserReview;
