import Banner from "./Banner";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import MenuItems from "../Shared/MenuItems";
import { DataContext } from "../Provider/Provider";

const Home = () => {
  const { item } = useContext(DataContext);
  console.log(item);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!item) {
      return; 
    }
  
    axios.get("http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10")
      .then((response) => {
        const apiData = response.data;
        const newData = [...apiData, item];
  
        setData(newData);
        setIsLoading(true);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [item]);

  
  

  console.log(data)

  const popular = data.filter((foodItem) => foodItem.IsPopular == true);

  const recommended = data.filter((foodItem) => foodItem.IsRecommended == true);

  return (
    <div>
      <Banner></Banner>
      <div>
        {isLoading ? (
          <div>
            <div>
              <MenuItems data={popular} text={"Popular"}></MenuItems>
            </div>

            <div>
              <MenuItems data={recommended} text={"Recommended"}></MenuItems>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center my-5 gap-2 text-[#fc6011]">
            <span className="loading loading-spinner loading-lg"></span>
            <span className="loading loading-spinner loading-lg"></span>
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
