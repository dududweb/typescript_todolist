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
  });

  return <div className="main">메인페이지 입니다.</div>;
}

export default Main;
