import { createContext, useState } from "react";
import PropTypes from "prop-types";
import toast from "react-hot-toast";


export const DataContext = createContext(null);


const Provider = ({ children }) => {
  const [item, setItem] = useState({});
  const convertToBoolean = (value) => {
    return value.toLowerCase() === "true";
  };

  const handleAddMore = (data) => {
    console.log(data)
    setItem(data);
    toast.success('Successfully toasted!')
   
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
