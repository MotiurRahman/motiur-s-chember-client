import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { PhotoProvider, PhotoView } from "react-photo-view";

const Service = ({ service }) => {
  useTitle("Services");
  const { _id, serviceTitle, serviceImgUrl, servicePrice, serviceDesc } =
    service;
  return (
    <div className="card card-compact w-auto bg-base-100 shadow-xl">
      <figure>
        <PhotoProvider>
          <PhotoView src={serviceImgUrl}>
            <img
              style={{ cursor: "pointer" }}
              className="h-28"
              src={serviceImgUrl}
              alt="Shoes"
            />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title">Title: {serviceTitle}</h2>
        <p>{serviceDesc.slice(0, 100)}...</p>
        <div className="card-actions justify-between items-center">
          <p>
            <b>Price:</b> {servicePrice} Tk
          </p>
          <Link to={`/service/${_id}`}>
            <button className="btn btn-primary"> View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
