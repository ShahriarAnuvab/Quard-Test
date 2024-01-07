import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
      )
      .then((data) => {
        setData(data.data.Items);
      });
  }, []);
  console.log(data)
  return (

      <div>
      <h1>Total data: {data.length}</h1>
      </div>

  )
}

export default App
