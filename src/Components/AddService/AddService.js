import React from "react";

const AddService = () => {
  const handleAddServiceBtn = () => {};
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
          <button
            type="submit"
            className="btn btn-primary mt-5 w-1/2 text-white"
            data-theme="valentine"
          >
            Add Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddService;
