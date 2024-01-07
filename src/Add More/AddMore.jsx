import { useContext } from "react";
import { DataContext } from "../Provider/Provider";

const AddMore = () => {
  const { handleAddMore } = useContext(DataContext);

  return (
    
    <div className="container mx-auto">
      <form
        className="card-body"
        onSubmit={() => {
          handleAddMore(event);
        }}
      >
        <h1 className="text-3xl font-bold text-center">Add More</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            name="Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="number"
            placeholder="Price"
            className="input input-bordered"
            name="Price"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input
            type="text"
            placeholder="Image URL"
            className="input input-bordered"
            required
            name="ImageUrl"
          />
        </div>
        <div className="space-y-5 mt-3">
          <div className="form-control">
            <select
              className="select select-bordered w-full "
              name="IsPopular"
            >
              <option disabled selected>
                IsPopular
              </option>
              <option>True</option>
              <option>False</option>
            </select>
          </div>
          <div className="form-control">
            <select
              className="select select-bordered w-full"
              name="IsRecommended"
            >
              <option disabled selected>
                IsRecommended
              </option>
              <option>True</option>
              <option>False</option>
            </select>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#f99f1c]  text-[#332526] font-bold hover:bg-[#f99f1c]  ">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMore;
