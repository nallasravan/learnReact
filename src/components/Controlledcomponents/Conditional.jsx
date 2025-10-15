import { useState } from "react";
import CarouselDemo from "../Debounce/CarouselDemo";
import Formfocusout from "../Forms/formvalidationfocusout";

const Conditional = () => {
  const [component, setComponent] = useState(<CarouselDemo />);

  function loadComponent(name) {
    if (name === "CarouselDemo") {
      setComponent(<CarouselDemo />);
    } else if (name === "Formfocusout") {
      setComponent(<Formfocusout />);
    }
  }

  function handleCarouselClick() {
    loadComponent("CarouselDemo");
  }

  function handleFormValidationClick() {
    loadComponent("Formfocusout");
  }

  return (
    <div>
      <h2>Conditional Rendering</h2>

      <button
        className="btn btn-primary m-2 p-3"
        onClick={handleCarouselClick}
      >
        CarouselDemo
      </button>
      <button
        className="btn btn-secondary m-2 p-3"
        onClick={handleFormValidationClick}
      >
        FormValidation
      </button>

      <div>
        {component}
      </div>
    </div>
  );
};

export default Conditional;