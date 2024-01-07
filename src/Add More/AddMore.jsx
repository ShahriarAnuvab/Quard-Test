import { useContext } from "react";
import { DataContext } from "../Provider/Provider";
import { useForm } from "react-hook-form";
const AddMore = () => {
  const { handleAddMore } = useContext(DataContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Convert IsPopular and IsRecommended to boolean
    const parsedData = {
      ...data,
      IsPopular: data.IsPopular === 'True',
      IsRecommended: data.IsRecommended === 'True',
    };
  
    console.log(parsedData);
    handleAddMore(parsedData);
  };
  // console.log(watch("Name"));

  return (
    <div className="container mx-auto">
      {/* <form
        className="card-body"
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(onSubmit);
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
            {...register("Name", { required: true })}
          />
          {errors.Name && (
            <p className="text-red-500">This field is required</p>
          )}
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
            name="ImageUrl"
          />
        </div>
        <div className="space-y-5 mt-3">
          <div className="form-control">
            <select className="select select-bordered w-full " name="IsPopular">
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
            Submit
          </button>
          
       
        </div>
      </form> */}
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            name="Name"
            className="input input-bordered w-full"
            {...register("Name", { required: true })}
          />
          {errors.Name && <p className="text-red-500">Name is required</p>}
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
            {...register("Price", { required: true })}
          />
          {errors.Price && <p className="text-red-500">Price is required</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input
            type="text"
            placeholder="Image URL"
            className="input input-bordered"
            name="ImageUrl"
            {...register("ImageUrl", { required: true })}
          />
          {errors.ImageUrl && (
            <p className="text-red-500">Image Url is required</p>
          )}
        </div>
        <div className="space-y-5 mt-3">
          <div className="form-control">
            <select className="select select-bordered w-full " name="IsPopular" {...register("IsPopular")}>
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
              {...register("IsRecommended")}
            >
              <option disabled selected>
                IsRecommended
              </option>
              <option>True</option>
              <option>False</option>
            </select>
          </div>
        </div>
        <button className="btn bg-[#f99f1c]  text-[#332526] font-bold hover:bg-[#f99f1c]  ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddMore;
