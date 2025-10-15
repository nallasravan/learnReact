import { useState } from "react";
import CarouselDemo from "../Debounce/CarouselDemo";  // Assuming this is another component
import Formfocusout from '../Forms/formvalidationfocusout';

const Conditional = () => {
  const [component, setComponent] = useState("CarouselDemo");

  return (
    <div>
      <h2>Conditional Rendering</h2>

      <button
        className="btn btn-primary m-2 p-3"
        onClick={() => setComponent("CarouselDemo")}
      >
        CarouselDemo
      </button>
      <button
        className="btn btn-secondary m-2 p-3"
        onClick={() => setComponent("Formfocusout")}
      >
        FormValidation
      </button>

       {/* <CarouselDemo />
       <Formfocusout /> */}
<div>
       {component === "CarouselDemo" ?  <CarouselDemo /> :  "condition false"}
       {component === "Formfocusout" ?  <Formfocusout /> :  "condition false"}
       </div>
   
    </div>
  );
};

export default Conditional;