import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { UserContext } from "../../AuthContext/AuthContext";

const UpdateReview = () => {
  const reviewData = useLoaderData();
  console.log(reviewData);
  const { _id, review, serviceTitle } = reviewData[0];
  const nevigate = useNavigate();
  const handleUpdateReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const review = form.review.value;
    console.log(review);
    fetch(
      `https://b6a11-service-review-server-side-motiur-rahman-motiurrahman.vercel.app/${_id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ review }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast("Review Updated successfully");
          nevigate("/myreviews");
        }
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body" data-theme="valentine">
          <h1 className="text-5xl font-bold">Update Review!</h1>
          <form onSubmit={handleUpdateReview}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Title</span>
              </label>
              <input
                type="text"
                defaultValue={serviceTitle}
                placeholder="email"
                className="input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Review</span>
              </label>
              <input
                type="text"
                name="review"
                defaultValue={review}
                placeholder="Review"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Update Review</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateReview;
