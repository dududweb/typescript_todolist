import React from "react";
import { IGreetings } from "../Interfaces";

function Greeting({ name, mark, optional, onClick }: IGreetings) {
  const handleHello = () => {
    onClick(name);
  };
  return (
    <div>
      hello {name} {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleHello}>Click me</button>
      </div>
    </div>
  );
}
//무의미해진 defaultProps 현재 FC없이 사용하면 유용해짐
Greeting.defaultProps = {
  mark: "!",
};

export default Greeting;
