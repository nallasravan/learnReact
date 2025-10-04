import { useState } from "react";


const Onchange = () => {

    const [user, setUser] = useState("");
    function handleChange(event) {
        console.log("handleChange=", event.target.value);
        console.log("id=", event.target.id);
        setUser(event.target.value);
    }

 return(
    <div>
        <div>Onchange intraduction two way binding</div>
 <input id="inputid" type="text" value={user} onChange={handleChange} /> 
    <div>username:{user}</div>
    </div>
 )
  };
  export default Onchange;