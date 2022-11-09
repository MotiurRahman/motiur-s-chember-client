import React from "react";
import Banner from "../../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="grid md:grid-cols-12 sm:grid-row-12 my-5 gap-4">
        <div className="md:col-span-4 sm:col-span-12 bg-blue-600 ">01</div>
        <div className="bg-red-500 md:col-span-8 sm:col-span-12">sd2fsd</div>
      </div>
    </div>
  );
};

export default Home;
