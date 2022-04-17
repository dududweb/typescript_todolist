import { useState, useEffect } from "react";
import FormComponent from "Component/Form/FormComponent";
import axios from "axios";

function Register() {
  const [data, setData] = useState([]);
  const sendRequest = async () => {
    const response = await axios.post("/api/register");
    console.log(response);
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    sendRequest();
  }, []);
  return (
    <div>
      회원가입
      <FormComponent />
    </div>
  );
}

export default Register;
