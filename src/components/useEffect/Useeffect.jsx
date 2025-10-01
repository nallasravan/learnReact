import { useEffect, useState } from "react"

export function Useeffect(){

    const[count, setcount] = useState(2)
    const[data, setdata] = useState([])

    function load(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(data=>{
      console.log("data=", data)
      setdata(data)
        })
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

            <div>data===={data}</div>





        </div>
    )
}