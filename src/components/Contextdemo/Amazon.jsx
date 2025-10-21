import { useState, useContext, createContext, useEffect } from "react"
import  axios  from 'axios';

const createSearch = createContext(null)

export const Amazon = () =>{

    const[seartchterm, setSearchterm] = useState(""); // valuetyping fetching value
    const[searcvalue, setSearchvalue] = useState("") // after submit we are fetching 

    const handleChange = (e) =>{
    setSearchterm(e.target.value)
}

const handleClick = () =>{
    setSearchvalue(seartchterm)
}
console.log("searcvalue=", searcvalue);

    return(
        <div className="container-fluid">
            <nav className="d-flex justify-content-between border boredr-1 p-3 align-items-center">
                <h2>Amazon</h2>
                +
                    <div className="input-group w-25">
                        <input type="text" onChange={handleChange} placeholder="amaxon serach" className="form-control"/>
                        <button onClick={handleClick} className="btn btn-warning bi bi-search " />
                    </div>
                 
                    <div>
                        <button className=" btn btn-warning bi bi-person-fill">signin</button>
                    </div>
                
            </nav>

            <section>
                <createSearch.Provider value = {searcvalue}>
                <Maincomponent/>
                </createSearch.Provider >
            </section>
        </div>
    )
}

export const Maincomponent = () =>{
    

    const Searchvalue = useContext(createSearch)

    console.log("provideSearchvalue=", Searchvalue)

    const[produts, setProducts] = useState([])

    useEffect(()=> {
        
        if(!Searchvalue){
   axios.get("https://fakestoreapi.com/products")
        .then(res=>setProducts(res.data))
        }
        else{
   axios.get(`https://fakestoreapi.com/products/category/${Searchvalue}`)
        .then(res=>setProducts(res.data))
        }
      
    },[Searchvalue])
    return(
        <div className="container-fluid">
            
<div className="d-flex flex-wrap">
  {produts.map((item) => (
    <div
      key={item.id} // assuming each item has a unique `id`
      style={{ width: '500px', height: '200px' }}
      className="card"
    >
      <img src={item.image} alt="image" />
    </div>
  ))}
</div>
<div>

</div>
        </div>
    )
} 