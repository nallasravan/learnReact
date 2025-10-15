import axios from "axios";
import { useEffect, useState } from "react";
import { useFetch } from "../../customHooks/FetchApiHook";



export const FetchApi = () => {


  const codefrom = useFetch("https://fakestoreapi.com/products");

  console.log("codefrom==", codefrom)



  return (
    <div>
      <h2>fetchap</h2>
      <ul>
        {codefrom.map((item) => (
          <li>{item.id}:{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
