import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, serviceTitle, serviceImgUrl, servicePrice, serviceDesc } =
    service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="h-28" src={serviceImgUrl} alt="Shoes" />
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
