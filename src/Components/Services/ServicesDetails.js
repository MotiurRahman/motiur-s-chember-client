import React from "react";
import { useLoaderData } from "react-router-dom";

const ServicesDetails = () => {
  const serviceDetails = useLoaderData();
  const { _id, serviceTitle, serviceImgUrl, servicePrice, serviceDesc } =
    serviceDetails[0];
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={serviceImgUrl} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{serviceTitle}</h1>
            <p className="py-6">{serviceDesc}</p>
            <section>
              <h1>All Reveiw</h1>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
