import { useState } from "react"
import Child from "./Child"



const Parent = () =>{
    const[array, setArray] = useState(["shravan", "pavan", "ram"])
    const[cardname, setCardname] = useState("bathroom")
    const[studentdata, setstudentdata ] = useState([{id:1, firstname:"nalla", lastname:"sravan"},{id:2, firstname:"ram", lastname:"charan"},{id:3, firstname:"abhi", lastname:"naidu"}])
    return(
    <div>
     <div className="cantainer">
<h1>parent component</h1>

<Child backgroundColor="red" cardheader={cardname} cardbndy="Toilet.png" cardfooter="explore" produts={array}   />

{/* <Child backgroundColor="green" cardheader="bathroom" cardbndy="Toilet.png" cardfooter="explore" /> */}


{/* <Child cardheader="bathroom" cardbody="Toilet.png" cardfooter = "explore" /> */}
     </div>
    </div>
    )
}

export default Parent