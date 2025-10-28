import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Useref from ".";

const SetInterval = () => {
    const [product, setProduct] = useState({});
    const [count, setCount] = useState(1);

    // function fetchProduct(productId) {
    //     axios.get(`https://fakestoreapi.com/products/${productId}`)
    //         .then(response => {
    //             setProduct(response.data);
    //         })
    //         .catch(error => {
    //             console.error("Error fetching product:", error);
    //         });
    // }

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

function fetchProduct(Id) {
    axios.get(`https://fakestoreapi.com/products/${Id}`)
        .then(response => { 
            setProduct(response.data);
        }   
        )
        .catch(error => {
            console.error("Error fetching product:", error);
        });

}
     useEffect(() => {
fetchProduct(1) 
     }, []);

let productId=useRef(1);
let threads=useRef(null);
    function prevClick() {
        productId.current = productId.current - 1;
        fetchProduct( productId.current);
    }
    function nextClick() {
           productId.current = productId.current + 1;
        fetchProduct( productId.current);
    }
    function seebarChange(event) {
        productId.current = event.target.value;
        fetchProduct( productId.current);
    }
    function autolaod(){
         productId.current = productId.current + 1;
          fetchProduct( productId.current);
    }
    function playbutton(){
threads.current = setInterval(autolaod
, 2000)
    }
    function pausebutton(){
clearInterval(threads.current);
    }
          

    return (
        <div>
            <div>SetInterval</div>
            <div className="container-fluid d-flex justify-content-center">
                <div className="card w-50">
                    <div className="card-header text-center">
                        {product.title}
                    </div>
                    <div className="card-body row">
                        <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                            <button onClick={prevClick} className="btn btn-dark bi-chevron-left"></button>
                        </div>
                        <div className="col-10">
                            <img src={product.image} style={{ height: "500px", width: "100%" }} alt="Product" />
                        </div>
                        <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                            <button onClick={nextClick} className="btn btn-dark bi-chevron-right"></button>
                        </div>
                    </div>
                    <div className="card-footer">
                       <input type="range" min={1} max={20} className="form-range" value={productId.current} onChange={seebarChange} />
                       <button className="btn btn-primarry bi-play m-2" onClick={playbutton}></button>
                       <button className="btn btn-danger  bi-pause m-2" onClick={pausebutton}></button>
                       <div>Product ID: {productId.current} </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SetInterval;