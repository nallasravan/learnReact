
import React, { useState, useEffect } from "react";

const Callback = () => {
  function handleClick(callback) {
    console.log("Button clicked!");
    callback(); // Execute the callback function
  }

  function callback() {
    console.log("Callback function executed!");
  }
  handleClick(callback);

const [data, setData] = useState([]);

async function fetchData() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts"); 
        if(!response.ok){
            throw new Error("Network response was not ok");
        }   
        const jsonData = await response.json();
        setData(jsonData);  
        console.log("fetched data=", jsonData);
    }
    catch(error){
        console.log("error net work", error)
    }

}

useEffect(() => {
  fetchData();
}, []);

  
  return (
    <div>
      <h1>hello</h1>
      <p>Loaded posts: {data.length}</p>
    </div>
  );
}

export default Callback
