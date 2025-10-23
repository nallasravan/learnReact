// FetchApi.js
import React from "react";
import { useFetch } from "../../customHooks/FetchApiHook";

export const FetchApi = () => {
  const codefrom = useFetch("https://fakestoreapi.com/products");

  return (
    <div>
      <h2>fetchap</h2>
      <ul>
        {codefrom.map((item) => (
          <li key={item.id}>{item.id}: {item.title}</li>
        ))}
      </ul>
    </div>
  );
};