import { useEffect, useState } from "react";

export function Usestate() {
    const [getname, setName] = useState("ram");
    // setName("shravn")

    function loading() {
        setName("shravan");
    }

    useEffect(() => {
        // setName("shravn")// This will run once when the component mounts
    }, []);

    return (
        <div>
            <div>How useState updates</div>

            {/* Corrected button: pass the function reference, not the result of calling it */}
            <button onClick={loading}>Click</button>

            <div>getname: {getname}</div>
        </div>
    );
}
