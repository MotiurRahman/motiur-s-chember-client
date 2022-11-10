import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { UserContext } from "../../AuthContext/AuthContext";
import Reviews from "../Reviews/Reviews";

const ServicesDetails = () => {
  const { user } = useContext(UserContext);
  const serviceDetails = useLoaderData();
  const { _id, serviceTitle, serviceImgUrl, servicePrice, serviceDesc } =
    serviceDetails[0];

  const [allreview, setAllReview] = useState([]);

  // Handle add review
  const handleAddReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const review = form.review.value;
    const displayName = user?.displayName || "Anonymous";
    const email = user?.email;
    const photoURL = user?.photoURL || "http://motiur.xyz/img/motiur.jpg";
    if (review == "") {
      toast("Please add your review first.");
      return;
    }
    const reviewDetails = {
      service_id: _id,
      review,
      serviceTitle,
      displayName,
      email,
      photoURL,
    };

    fetch(
      "https://b6a11-service-review-server-side-motiur-rahman-motiurrahman.vercel.app/review",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewDetails),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          form.reset();
          console.log(data);
        }
      })
      .catch((err) => toast(err.message));
  };

  // Handle show review
  useEffect(() => {
    fetch(
      `https://b6a11-service-review-server-side-motiur-rahman-motiurrahman.vercel.app/review/${_id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllReview(data);
      })
      .catch((err) => toast(err.message));
  }, [allreview]);
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <img
            src={serviceImgUrl}
            className="rounded-lg shadow-2xl w-full h-96"
            alt=""
          />
          <div>
            <div className="flex flex-col w-full border-opacity-50">
              <div className="grid card bg-base-300 rounded-box place-items-center p-5">
                <h1 className="text-5xl font-bold">{serviceTitle}</h1>
                <p className="py-6">{serviceDesc}</p>
                <p>
                  <b>Price:</b> {servicePrice}
                </p>

                {user ? (
                  <form
                    onSubmit={handleAddReview}
                    className="mt-4 flex md:flex-row flex-col align-middle items-center gap-5"
                  >
                    <textarea
                      className="textarea textarea-secondary w-auto"
                      name="review"
                      placeholder="Enter your Review"
                    ></textarea>
                    <button
                      type="submit"
                      className="btn btn-outline btn-secondary"
                    >
                      Add Your Review
                    </button>
                  </form>
                ) : (
                  <Link className="text-red-500" to="/login">
                    Please login to add a review
                  </Link>
                )}
              </div>
              <div className="divider">All Reviews</div>
              <div className="grid card bg-base-300 rounded-box place-items-center">
                {allreview.map((review) => (
                  <Reviews key={review._id} allreviewinfo={review}></Reviews>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
