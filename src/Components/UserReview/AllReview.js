import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const AllReview = ({ myreview, handleDeleteReview }) => {
  const {
    _id,
    displayName,
    email,
    photoURL,
    review,
    service_id,
    serviceTitle,
  } = myreview;

  return (
    <div
      className="card card-compact w-11/12 md:w-96 bg-base-100 shadow-xl mt-4 p-5"
      data-theme="valentine"
    >
      <figure>
        <img className="rounded-full h-10" src={photoURL} alt="profileImage" />
      </figure>
      <p className="text-center">{displayName}</p>
      <div className="card-body">
        <h1 className="font-semibold"> Service Title: {serviceTitle}</h1>
        <p>{review}</p>
        <div className="card-actions justify-end">
          <Link to={`/myreview/${_id}`}>
            {" "}
            <button className="btn btn-outline btn-secondary">Edit</button>
          </Link>

          <button
            onClick={() => handleDeleteReview(_id)}
            className="btn btn-outline btn-secondary"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllReview;
