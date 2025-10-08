import { useRef, useState } from "react";

const Settime = () => {

    const [message, setmessage] = useState("0");
    const threads = useRef([]);

    function message1() {
        setmessage(() => "10");
    }
    function message2() {
        setmessage(() => "50");
    }
    function message3() {
        setmessage(() => "100");
    }
    function handleMessage() {
        // Clear any previous timeouts
        threads.current.forEach(id => clearTimeout(id));
        threads.current = [];
        threads.current.push(setTimeout(message1, 2000));
        threads.current.push(setTimeout(message2, 4000));
        threads.current.push(setTimeout(message3, 6000));
    }




    return (
        <div>
            <button className="btn btn-primary" onClick={handleMessage}>Settime</button>

            <h1>{message}</h1>
        </div>
    )
}

export default Settime;