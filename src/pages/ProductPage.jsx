import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function ProductPage(){

    const [product, setProduct]=useState(null)

    const {id} = useParams()
    console.log(id);

    const api_url = `https://fakestoreapi.com/products/${id}`;
    console.log(api_url);

    useEffect(()=>{
        fetch(api_url)
        .then(res=>res.json())
        .then(data=>{
            setProduct(data)
    })

    },[])

    return(
        <>

        <header className="container"> 
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
               <div className="container-fluid">
                  <div className="collapse navbar-collapse" id="navbarNav">
                   <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/presentazione">chi siamo</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/products">prodotti</Link>
                      </li>
                    </ul>
                  </div>
                </div>
            </nav>
        </header>

        <main className="container">
            {product!==null &&(
                <div>
                    <img src={product.image}></img>
                    <h1>{product.title}</h1>

                </div>

            )}

        </main>
        </>
    )
}