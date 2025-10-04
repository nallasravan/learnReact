import { useState } from "react"
export function TwoWayBinding(){
const[userNmae, setUserName] = useState("abhi")
function iputchange(event){
setUserName(event.target.value)
}
    return(
<div>
    <div>Two way binding</div>
    <input value={userNmae} onChange={iputchange}/>
    <div>username:{userNmae}</div>
</div>
    )
}