import { createContext, useState } from "react";
import PropTypes from "prop-types";
import toast from "react-hot-toast";


export const DataContext = createContext(null);


const Provider = ({ children }) => {
  const [item, setItem] = useState({});
  const convertToBoolean = (value) => {
    return value.toLowerCase() === "true";
  };

  const handleAddMore = (event) => {
    event.preventDefault();
    const form = event.target;
    const Name = form.Name.value;
    const Price = form.Price.value;
    const ImageUrl = form.ImageUrl.value;
    const IsPopular = convertToBoolean(form.IsPopular.value);
    const IsRecommended = convertToBoolean(form.IsRecommended.value);
    const newItem = { Name, Price, ImageUrl, IsPopular, IsRecommended };
    console.log(newItem)
    setItem(newItem);
    toast.success('Successfully toasted!')
    form.reset()
};

  const info = {
    handleAddMore,
    item,
  };
  return (
    <div>
      <DataContext.Provider value={info}>{children}</DataContext.Provider>
    </div>
  );
};

Provider.propTypes = {
  children: PropTypes.node,
};

export default Provider;
