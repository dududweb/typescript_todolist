import { useState, useEffect } from "react";
import axios from "axios";
import FormComponent from "Component/Form/FormComponent";

function Login() {
  const [data, setData] = useState([]);
  const sendRequest = async () => {
    const response = await axios.get("/api/login");
    console.log(response);
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    sendRequest();
  }, []);
  return (
    <div>
      로그인
      <FormComponent />
    </div>
  );
}

export default Login;
