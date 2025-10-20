import { useState, useContext, createContext } from "react";

const memoryContext = createContext(null); // memory created

export const ContextDemo = () => {
  const [user, setUser] = useState("shravan");
  return (
    <div className="p-4 m-4 bg-dark text-white">
      <h1> Parent componet - {user}</h1>
      <memoryContext.Provider value={user}>
    {/* scope providing */}
        <Level1 />
      </memoryContext.Provider>
    </div>
  );
};

export const Level1 = (props) => {

    // console.log("user==", user)
    //user value coimg here
  const userName = useContext(memoryContext); // using this line I am fetching from memory using seContext
  console.log("userName fetching=", userName);

  return (
    <div className="p-2 m-2 bg-warning text-white">
      <h1> Level1 componet - {userName}</h1>
  <memoryContext.Provider value ={userName}>
      <Level2/>
      </memoryContext.Provider>
    </div>
  );
};

export const Level2 = (props) => {
 
    const username2ndtime = useContext(memoryContext)
    console.log("username2ndtime=", username2ndtime)

  return (
    <div className="p-2 m-2 bg-danger text-white">
      <h1> Leve2 componet - {username2ndtime} </h1>
    </div>
  );
};
