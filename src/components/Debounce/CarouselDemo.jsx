import  axios  from 'axios';
import { useState, useEffect, useRef } from 'react';


const CarouselDemo = () => {
const [product, setProduct] = useState({});
// const[count, setcount]=useState(1)

const[number, setnumber]=useState(4)

let productId= useRef(1);
let thread = useRef(null);

function fetchProduct(Id) {
    axios.get(`https://fakestoreapi.com/products/${Id}`)
        .then(response => {
// console.log("response=", response.data)
setProduct(response.data);
console.log("product=", product)

})   
}  
// inital-fetch
useEffect(() => {   

fetchProduct(productId.current)

}, [productId.current]);



function nextClick(){
    productId.current = productId.current + 1;
    fetchProduct( productId.current);

}

function prevClick(){
 productId.current = productId.current - 1;
    fetchProduct( productId.current);
}

function changeSlider(event){
    productId.current = event.target.value; // 18

    console.log("event.target.value=", event.target.value);
    
    fetchProduct( productId.current);
}

function autolaod(){
    productId.current = productId.current + 1;
    fetchProduct( productId.current);
}

function play(){

 thread.current = setInterval(autolaod, 2000) // setinterval syntax 1st function name,  2nd time
}

function pause(){
clearInterval( thread.current)
}





    // const [product, setProduct] = useState({});
    // const [count, setCount] = useState(1);
 

    // function prevClick() {
    //     const newCount =  count - 1 ;
    //     setCount(newCount);
    //     fetchProduct(newCount);
    // }

    // function nextClick() {
    //     const newCount = count + 1
    //     setCount(newCount);
    //     fetchProduct(newCount);
    // }

    // // Initial fetch
    // if (!product.id) {
    //     fetchProduct(count);
    // }
   



// function prevClick() {
//   const newcount = count - 1;
//    setCount(newcount);
//    fetchProduct(newcount);
// }
// function nextClick() {
//     const newcount = count + 1;
//     setCount(newcount);
//     fetchProduct(newcount);
// }


  return (
    <div>
    <div>CaroselDemo</div>
    <div className="container-fluid d-flex justify-content-center">
<div className="card w-50">
    <div className="card-header"></div>
    <div className="card-body row">
        <div className="col-1 d-flex flex-column justify-content-center align-items-center">
            <button onClick={prevClick}  className="btn btn-dark bi bi-chevron-left"></button>
        </div>
        <div className="col-10">
            <img src={product.image} style={{ width: '100%', height: '500px' }} alt="Toilet" />
        </div>
        <div className="col-1 d-flex flex-column justify-content-center align-items-center">
              <button onClick={nextClick} className="btn btn-dark bi bi-chevron-right"></button>
        </div>
    </div>
    <div className="card-footer">
        <input type="range" min={1} max={20} className='form-range' value={productId.current} onChange={changeSlider} />
        <div>value={productId.current}</div>
        <div>   <button onClick = {play} className='btn btn-primary btn-play m-2' >play</button>
        <button onClick= {pause} className='btn btn-secondary btn-pause m-2' >pause</button></div>
 
    </div>
</div>
    </div>
    </div>
  )
}

export default CarouselDemo