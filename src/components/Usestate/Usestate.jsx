import { useState } from "react";

const Usestate = () => {
    // 👉 useState hook initializes the state variable 'getname' with default value "ram"
    const [getname, setName] = useState("ram");

    // 👉 Function to update the state
    function loading() {
        setName("shravan"); // Updates 'getname' to "shravan"
    }

    // 👉 JSX rendering
    return (
        <div>
            <div>How useState updates</div>
            <button onClick={loading}>Click</button>
            <div>getname: {getname}</div>
        </div>
    );
};

export default Usestate;