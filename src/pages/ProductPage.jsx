import { useEffect } from "react";
import { data, useParams } from "react-router-dom"

export default function ProductPage(){

    const {id} = useParams()
    console.log(id);

    const api_url = `https://fakestoreapi.com/products/${id}`;
    console.log(api_url);

    useEffect(()=>{
        fetch(api_url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })

    },[])

    return(
        <h1>product : id</h1>
    )
}