import { useEffect, useRef, useState } from "react";

const Debounce = () => {  
    const [message, setMessage] = useState("");
    function message1() {
        setMessage("10% volume");
    }
    function message2() {
        setMessage("50% volume");
    }
    function message3() {
        setMessage("100% volume");
    }
let therd = useRef(null);
    function showmessage() {
        setTimeout(message1, 2000);
     therd.current = setTimeout(message2, 4000);
        setTimeout(message3, 6000); 
    }


    // useEffect( ()=>{    
    // showmessage() // 1st call
    // }, []  )
    function stopsecond(){  
clearTimeout( therd.current)
    }

    return (
<>
<div>Debounce</div>
<div>settimeout</div>

<button className="btn btn-primary m-2" onClick={showmessage}>click to increse volume</button>
<button className="btn btn-secondary m-2" onClick={stopsecond}>remove 50% volume </button>
<div>volume=={message}</div>
</>
        
    )
}
export default Debounce;