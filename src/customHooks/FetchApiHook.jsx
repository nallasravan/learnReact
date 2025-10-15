import axios from "axios"
import { useEffect, useState } from "react"

export const useFetch = (url) =>{
    const[data, setdata] = useState([])

function pageload(url){
    axios.get(url)
    .then(res=>setdata(res.data))
}

useEffect(()=>{
pageload(url)
},[url])



return data
}