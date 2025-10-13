import  Axios  from "axios"
import { useEffect, useRef, useState } from "react"


const CarouselDemoHooks = () => {

  const[product, setproduct] = useState([])
  const[count, setcount] = useState(1)

  function loadapi(id){

    Axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(res=> 
setproduct(res.data)
  )
    
  }
// loadapi()

let thread = useRef(1)

useEffect(()=>{
loadapi(count)
},[count])

function counter(){

thread.current = setcount(count+1)



}
  

  return(

    <div>
<div>CarouselDemoHooks</div>

<div>
{product.title}

</div>

<div>count:{count}</div>
<button onClick={counter}>click</button>
    </div>
  )
}


export default CarouselDemoHooks