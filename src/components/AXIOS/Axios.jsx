import axios from 'axios';
import { useEffect, useState } from 'react';

export function Axios(){

    const [data, setdata] = useState({});

    function load(){
        axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=xP9HRlBmci1pgHFQgt2rbgzX6Z3OsAJwnMGwdUeF")
        .then(response=>{ 
            setdata(response.data);
            console.log("response data=", response.data);
            console.log("response data type=", typeof response.data);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
    }

    useEffect(()=>{
        load()
    }, [])

    return(
        <div>
            <div>how to axios third party libraray used</div>
            <div>data====</div>
    {/* {data(photos.map((item, index)=><p key={index}>{item.camera.name}</p>))} */}
    {/* {data?.photos?.map((item, index) => (
  <p key={index}>{item.camera.full_name}</p>
))} */}

{/* <table>
    <tr>
        <th> id    </th>
        <th> full name   </th>
        <th> img_src   </th>
    </tr>
    <tbody>
    {data?.photos?.map((item, index) => (
  <tr border key={index}>  
    <td>{item.id}</td>
    <td>{item.camera.full_name}</td>
    <td>
      <a href={item.img_src} target='_blank'><img src={item.img_src} alt={`Mars rover ${item.id}`} width="100" /></a>
    </td>
  </tr>
    )) } 
    </tbody>
</table> */}
<div className="d-flex flex-wrap flex-row justify-content-center">
{data?.photos?.map((item)=>
    <div key ={item.id} className='card w-25  p-2 m-3'>
        <img src={item.img_src} className='card-img-top' alt={item.id} height="100" />
<div className="card-heder">
    <div className="h3">
        {item.id}
    </div>
</div>
<div className="Card-body">
    <dl>
        <dt>Camera Full Name</dt>
        <dd>{item.camera.full_name}</dd>
        <dt>Rover Name</dt> 
        <dd>{item.rover.name}</dd>       

    </dl>
</div>
    </div>
)}
</div>

        </div>
    )
}