import React, { useState, useEffect } from "react";
import axios from "axios";

function Login() {
  const [data, setData] = useState([]);
  const sendRequest = async () => {
    const response = await axios.get("http://localhost:8080/login");
    console.log(response);
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    sendRequest();
  }, []);
  return <div>Login입니다.</div>;
}

export default Login;
