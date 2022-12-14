import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import Banner from "../../Banner/Banner";
import Service from "../../Services/Service";

const Home = () => {
  useTitle("Home");
  const services = useLoaderData();
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(
      "https://b6a11-service-review-server-side-motiur-rahman-motiurrahman.vercel.app/service_count"
    )
      .then((res) => res.json())
      .then((data) => setCount(data.totalItem));
  }, []);

  return (
    <div>
      <Banner></Banner>
      <div className="grid md:grid-cols-12 sm:grid-row-12 my-5 gap-4">
        <div className="md:col-span-4 sm:col-span-12 px-5">
          <div
            className="card w-auto bg-base-100 shadow-xl my-5"
            data-theme="valentine"
          >
            <div className="card-body">
              <h2 className="card-title">What Service I am providing?</h2>
              <p>
                Motiur's Chambers is one of the fastest growing full-service law
                firms in Bangladesh offering one stop legal solutions to its
                wide range of local and foreign clientele. I am experienced,
                adaptable to changing needs of the clients and are dedicated to
                protect their best interests.
              </p>
            </div>
          </div>
          <div
            className="card w-auto bg-neutral text-neutral-content my-5"
            data-theme="valentine"
          >
            <div className="card-body items-center text-center">
              <h2 className="card-title">Total Services!</h2>
              <p>Currently I am providing {count} Services</p>
            </div>
          </div>
        </div>
        <div className="md:col-span-8 sm:col-span-12">
          <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Service key={service.key} service={service}></Service>
            ))}
          </div>
          <div className="flex">
            <Link to="/services" className="mx-auto">
              {" "}
              <button className="btn btn-active btn-primary btn-wide">
                See All
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
