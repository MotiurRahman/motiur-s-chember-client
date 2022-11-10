import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../AuthContext/AuthContext";

const Reviews = ({ allreviewinfo }) => {
  const { user } = useContext(UserContext);
  const { displayName, email, photoURL, review, service_id, _id } =
    allreviewinfo;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mt-4 p-5">
      <figure>
        <img className="rounded-full h-10" src={photoURL} alt="profileImage" />
      </figure>
      <p className="text-center">{displayName}</p>
      <div className="card-body">
        <p>{review}</p>
      </div>
    </div>
  );
};

export default Reviews;
