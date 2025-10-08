import  axios  from 'axios';
import { useState, useEffect } from 'react';

const CarouselDemo = () => {
    const [product, setProduct] = useState({});
    const [count, setCount] = useState(1);
    function fetchProduct(productId) {
        axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error("Error fetching product:", error);
            });
    }

    function prevClick() {
        const newCount =  count - 1 ;
        setCount(newCount);
        fetchProduct(newCount);
    }

    function nextClick() {
        const newCount = count + 1
        setCount(newCount);
        fetchProduct(newCount);
    }

    // Initial fetch
    if (!product.id) {
        fetchProduct(count);
    }
   



function prevClick() {
  const newcount = count - 1;
   setCount(newcount);
   fetchProduct(newcount);
}
function nextClick() {
    const newcount = count + 1;
    setCount(newcount);
    fetchProduct(newcount);
}


  return (
    <div>
    <div>CaroselDemo</div>
    <div className="container-fluid d-flex justify-content-center">
<div className="card w-50">
    <div className="card-header"></div>
    <div className="card-body row">
        <div className="col-1 d-flex flex-column justify-content-center align-items-center">
            <button onClick={prevClick} className="btn btn-dark bi bi-chevron-left"></button>
        </div>
        <div className="col-10">
            <img src={product.image} style={{ width: '100%', height: '500px' }} alt="Toilet" />
        </div>
        <div className="col-1 d-flex flex-column justify-content-center align-items-center">
              <button onClick={nextClick} className="btn btn-dark bi bi-chevron-right"></button>
        </div>
    </div>
    <div className="card-footer"></div>
</div>
    </div>
    </div>
  )
}

export default CarouselDemo