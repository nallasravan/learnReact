import { useState, useRef } from "react";

const Useref = () => {

    const [togglebutton, settogglebutton] = useState("d-block btn btn-primary m-3");
    const [toggleprogress, settoggleprogress] = useState("d-none");
    const [toggleimage, settoggleimage] = useState("d-none m-3");
    const [progressvalue, setprogressvalue] = useState(1);
    const threads = useRef(null);
let count=1;
       function progress(){
count++
       setprogressvalue(count); 
        settoggleprogress("d-block m-3");       
     if (count >= 100) {
        clearInterval(threads.current);
        // settogglebutton("d-none"); // Hide button
        settoggleprogress("d-none"); // Hide progress bar
        settoggleimage("d-block m-3"); // Show image
      }
    }

    function handleloading(){
        threads.current = setInterval(progress, 100);


    }
    function play(params) {
         threads.current = setInterval(progress, 100);
    }
    function pause() {
         clearInterval(threads.current);
    }

 
  return (
<div className="container-fluid">
  <div>Useref</div>
 <div className={togglebutton}><button  onClick={handleloading}>loading</button></div> 
  <div className={toggleprogress}><progress value ={progressvalue} style={{width:"300px", height:"30px"}} min={1} max={100}></progress></div>
  <div><button onClick={play}>play</button></div>
  <div><button onClick={pause}>pause</button></div>
  <div>{progressvalue} </div>
 <div><img className={toggleimage}src= "Toilet.png"></img></div> 
  </div>
  );
}   

export default Useref;