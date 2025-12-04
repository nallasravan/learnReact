
import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const Fakestorecategory = () => {


    const[data, setData] = useState([]);

        let params = useParams();
        console.log("params=", params);

    useEffect(() => {
      fetch(`https://fakestoreapi.com/products/category/${params.category}`)
        .then(response => response.json())  
        .then(data => {
          console.log('category data=', data);
          setData(data);
        })
        .catch(error => {
          console.error('Error fetching category data:', error);
        }); 
    }, [params.category]);
  return(
    <div>
 <div>Fakestorecategory</div>
 <div className="d-flex">


<div className='d-flex col-3 flex-wrap'>
    {data.map (item => (
        <card className="m-2 p-2 card w-50 flex-wrap"
          key={item.id}>
            <cardheader>{item.title}</cardheader>
            <cardbody>
                <img src={item.image} alt={item.title} style={{width: '200px', height: '200px'}}/>
       
           
            </cardbody>
            <cardfooter><h3>Rating: {item.rating.rate} ({item.rating.count} reviews)</h3>
            <h4><Link to={`${item.id}`}>viwe details</Link></h4>
            </cardfooter>
          </card>
    ))}
    </div>
    <div className='col-9'>
        <Outlet/>

    </div>
     </div>
    </div>

  )
}  

export default Fakestorecategory;