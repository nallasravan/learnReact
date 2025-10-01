 import { useState } from 'react';
import './Binding.css'
 
 function Binding(){

// const state = "pavan"

const[state] = useState("abhi");
const[category] = useState(["all", "cricket", "bat", "cricket"])
const[object] = useState({id:1, name:"shravan", surname:"nall", cities:["hyd", "uppal"]})


const[age] = useState(21);


    return (
        <div>
            <p className="temp">Binding</p>

            <div>{state}</div>

            <select>{
                category.map((item) =>
                    <option>{item}</option>
                )
            }
            </select>

            <h2>{age}</h2>

            <p>{(age>22)? "eligible for vote" : "not elgible for vote"}</p>

            <div>object</div>

          <div>id:{object.id}</div>
          <div>Name:{object.name}</div>
          <div>
            {
             object.cities.map((item, index) =><p>{index}{item}</p>)
            }
          </div>

        </div>

    )
}
export default Binding;