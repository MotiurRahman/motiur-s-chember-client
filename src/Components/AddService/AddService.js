import React, { useState } from "react";
import toast from "react-hot-toast";
import useTitle from "../../hooks/useTitle";

const AddService = () => {
  useTitle("AddService");
  const [show, setShow] = useState(true);
  const handleAddServiceBtn = (e) => {
    setShow(false);
    e.preventDefault();
    const form = e.target;
    const serviceTitle = form.serviceTitle.value;
    const serviceImgUrl = form.serviceImgUrl.value;
    const servicePrice = form.servicePrice.value;
    const serviceDesc = form.serviceDesc.value;

    const serviceDetails = {
      serviceTitle,
      serviceImgUrl,
      servicePrice,
      serviceDesc,
    };
    console.log(serviceDetails);
    const url =
      "https://b6a11-service-review-server-side-motiur-rahman-motiurrahman.vercel.app/add_service";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(serviceDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setShow(true);
          form.reset();
          toast("Your service has been added successfully");
        }
      })
      .catch((error) => setShow(true));
  };
  return (
    <div>
      <div className="my-5 flex flex-col items-center align-middle mx-auto lg:w-2/4 w-11/12 md:w-3/4">
        <h2 className="text-3xl font-bold text-center my-5">
          You can add your service here!
        </h2>
        <form
          onSubmit={handleAddServiceBtn}
          className="flex flex-col items-center w-full"
        >
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Enter Service Title?</span>
            </label>
            <input
              type="text"
              name="serviceTitle"
              placeholder="Enter Service Title"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Ener Service Image URL?</span>
            </label>
            <input
              type="text"
              name="serviceImgUrl"
              placeholder="Enter Service URL"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Ener Service price?</span>
            </label>
            <input
              type="number"
              placeholder="Eeter Service Price"
              name="servicePrice"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Ener Service Description?</span>
            </label>
            <textarea
              className="textarea textarea-accent"
              name="serviceDesc"
              placeholder="Enter Service Description"
              required
            ></textarea>
          </div>

          {show ? (
            <button
              type="submit"
              className="btn btn-primary mt-5 w-1/2 text-white"
              data-theme="valentine"
            >
              Add Service
            </button>
          ) : (
            <button
              data-theme="valentine"
              className="btn btn-primary mt-5 w-1/2 text-white loading"
            >
              Processing ...
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddService;
