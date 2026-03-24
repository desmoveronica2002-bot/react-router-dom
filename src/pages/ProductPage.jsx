import { useEffect } from "react";
import { useParams } from "react-router-dom"

export default function ProductPage(){

    const {id} = useParams()
    console.log(id);

    useEffect(()=>{

    },[])

    return(
        <h1>product : id</h1>
    )
}