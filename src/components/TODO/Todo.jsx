import axios from "axios"
import { useEffect, useState } from "react"

const Todo = () => {
    const[data, setData] = useState([])

useEffect(() => {
 
axios.get("http://localhost:4040/appointments")

    .then(response => {
      console.log("response=", response.data)
      setData(response.data)
    })
    .catch(error => {
      console.error("Error fetching data:", error)
    })
}, [])
  return (
    <div>   
<h1>learing todo application edit add and delete YES</h1>

<table className="table table-hover">
    <thead>
        <tr className="p-2 m-2">
            <th className="p-2 m-2">ID</th> 
            <th className="p-2 m-2">Title</th>
            <th className="p-2 m-2">date</th>
            <th className="p-2 m-2">description</th>
            <th className="p-2 m-2">action</th>
            
        </tr>
         </thead>
        <tbody>
            {data.map((item) => (
                <tr key={item.id} className="p-2 m-2">
                    <td className="p-2 m-2">{item.id}</td>  

                    <td className="p-2 m-2">{item.userId}</td>

                    <td className="p-2 m-2">{item.date}</td>
                    <td className="p-2 m-2">{item.description}</td>
                    <td className="p-2 m-2">
                        <button className="btn btn-primary m-2">Edit</button>
                        <button className="btn btn-danger m-2">Delete</button>  
                        </td>
                </tr>
            ))}
           
           </tbody>
   

</table>

        </div>  )
}

export default Todo