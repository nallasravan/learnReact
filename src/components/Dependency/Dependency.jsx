import { useState, useEffect } from "react";
import axios from "axios";



const Dependency = ()=> {
    const [id, setId] = useState(1);
    const [data, setData] = useState([]);

    function handleChange(event){
        console.log("handleChange=");
        setId(event.target.value)
    }
    useEffect(()=>{
         axios.get(`https://jsonplaceholder.typicode.com/users?id=${id}`)
        .then(response=>{
            console.log("response data=", response.data);  
            console.log("response datatype=", typeof response.data);
            setData(response.data)  
        })
    }, [id])
    return(
    <div>
        <div>Dependency</div>
        <input type="number" value={id} onChange={handleChange} />
            {data.length > 0 && (
        <dl>
          <dt>ID</dt>
          <dd>{data[0].id}</dd>

          <dt>Name</dt>
          <dd>{data[0].name}</dd>

          <dt>Username</dt>
          <dd>{data[0].username}</dd>

          <dt>Email</dt>
          <dd>{data[0].email}</dd>

          <dt>City</dt>
          <dd>{data[0].address.city}</dd>

          <dt>Company</dt>
          <dd>{data[0].company.name}</dd>
        </dl>
      )}



    </div>
    )
}

export default Dependency;  
