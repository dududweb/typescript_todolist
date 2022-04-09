import axios from "axios";
import React, { useState, useEffect } from "react";

function Main() {
  const [data, setData] = useState([]);
  const sendRequest = async () => {
    const response = await axios.get("http://localhost:8080");
    console.log(response);
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    sendRequest();
  }, []);

  return <div className="main w-50 mx-auto">Hello World</div>;
}

export default Main;
