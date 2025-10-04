import axios from "axios"
import { useEffect, useState } from "react"

export function Useeffect(){

    const[count, setcount] = useState(2)
    const[store, setstore] = useState([])

    // function load(){
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(response=>response.json())
    //     .then(data=>{
    //   console.log("data=", data)// out side console data  is coming using fetchh method
    //   console.log("datatype=", typeof data)
    //   setstore(data)
    //     })
    //     .catch(error => {
    //       console.error("Error fetching data:", error);
    //     }   )
    // }

    function load(){  
        axios.get("https://jsonplaceholder.typicode.com/users") 
        .then(response=>{
            console.log("response=", response.data)
            setstore(response.data)
        }
        ) 

    }
    // load()
    useEffect(()=>{
      load()    
    }, [])
 

    function Counter(){
        setcount(count + 1)//increse 
    }

    return(
        <div>

            <div>useeffct</div>
            <div>countefunction</div>
            <button onClick={Counter}>click me</button>
            <div>countexmaple:{count}</div>

            <div>
           {/* dat={JSON.stringify(store)} */}

           { store?.map((item) => <p key={item.id}>{item.id}:{item.name}</p>)}

      
          
            </div>
          

        </div>
    )
}