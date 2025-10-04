import axios from "axios";
import { useState, useEffect } from "react";

const Weather = () => { 
  const[city, setCity] = useState("pune");
function handleChange(e) {
    
}
function handleSearchClick(e) {
    
}
  useEffect(()=>{
    console.log("useEffect called");
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe5cd63d9a85e3c586ba29af5329ba4c`) 
    .then(response=>{
      console.log("response data=", response.data);
      console.log("response datatype=", typeof response.data);
    })
},[])
    return (
      
    
        <div>
            <div>Weather component</div>
            <div className="conatainer-fluid">
                <div className="mt-4 text-center">
<div className="input-group mb-3 w-25 m-auto">
    <input  onChange={handleChange} type="text" className="form-control" />
    <button onClick= {handleSearchClick} className="bi bi-search btn btn-warning">Search</button>
</div>
                </div>
            </div>
        </div>
    )
}   
export default Weather;