import axios from "axios";
import { useEffect, useState } from "react";


const Dependent = () => {
    const [id, setId] = useState(1);

    const handleChange = (event) => {
        console.log("handleChange=");
        setId(event.target.value);
    };

    useEffect(() => {
        console.log("Dependent component mounted");
        axios.get(`https://jsonplaceholder.typicode.com/users?id=${id}`)
            .then(response => {
                console.log("response data=", response.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });

    }, [id]); 


    
    return ( 
        <div>   
<input type="number" value={id} onChange={handleChange} />
        <div>id:{id}</div>
            </div>
    )
}

export default Dependent;