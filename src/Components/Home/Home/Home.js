import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../../Banner/Banner";
import Service from "../../Services/Service";
import Services from "../../Services/Services";

const Home = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div>
      <Banner></Banner>
      <div className="grid md:grid-cols-12 sm:grid-row-12 my-5 gap-4">
        <div className="md:col-span-4 sm:col-span-12 bg-blue-600 ">01</div>
        <div className="bg-red-500 md:col-span-8 sm:col-span-12">
          <div className="grid grid-cols-2 gap-4 p-10">
            {services.map((service) => (
              <Service key={service.key} service={service}></Service>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
