import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [array, setArray] = useState(["shravan", "abhi", "ram"]);
  const [cardname, setCardname] = useState("bathroom");

  // Function to update cardname
  const changeCardName = () => {
    setCardname("kitchen");
  };

  return (
    <div>
      <div className="container">
        <h1>Parent Component</h1>
        <hr />
        <button onClick={changeCardName}>Change Card Name</button>

        <Child
          backgroundColor="red"
          cardheader={cardname}
          cardbndy="Toilet.png"
          cardfooter="explore"
          produts={array}
        />
      </div>
    </div>
  );
};

export default Parent;