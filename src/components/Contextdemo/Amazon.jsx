import { useState, useContext, createContext } from "react"

const createSearch = createContext(null)

export const Amazon = () =>{

    const[seartchterm, setSearchterm] = useState("");
    const[searcvalue, setSearchvalue] = useState("")

    const handleChange = (e) =>{
    setSearchterm(e.traget.value)
}

const handleClick = () =>{
    setSearchvalue(seartchterm)
}
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

    const provideSearchvalue = useContext(createSearch);

    console.log("provideSearchvalue=", provideSearchvalue)
    return(
        <div>

        </div>
    )
} 