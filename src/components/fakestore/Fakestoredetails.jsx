import {useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Fakestoredetails = () => {
    const[data, setData] = useState([]);
    let {id} = useParams();
    console.log("id=", id);
    useEffect (() => {
    fetch (`https://fakestoreapi.com/products/${id}`)
      .then (response => response.json ())  
        .then (data => {    
        console.log ('products data=', data);
        setData (data);
      })
      .catch (error => {
        console.error ('Error fetching products:', error);
      });
      }, [id]);
  return(
    <div>
 <div>Fakestoredetails</div>;
    {data && (<div>
        <h2>{data.title}</h2>
        <img src={data.image} alt={data.title} style={{width: '200px', height: '200px'}}/>  
        <p>Price: ${data.price}</p>
        <p>{data.description}</p>   
    </div>)}


    </div>

  )
}  

export default Fakestoredetails;