import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Products() {
  const [todos, setTodos] = useState([]);

  // Fetch dei dati
  function fetchTodos() {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => setTodos(res.data))
  }
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
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
        <div>
          <h2>Lista Prodotti</h2>
        </div>

        <div className="row">
            {todos.map((product) => (
                <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex flex-column justify-content-center align-items-center text-center contorno-card">
                   <img src={product.image} className="dimensione"/>
                    <div className="card-body">
                        <h3 className="card-title">{product.title}</h3>
                        <p className="card-text"><strong>Prezzo:</strong> {product.price} €</p>
                        <p className="card-text">{product.category}</p>
                        <p className="card-text">Rating: {product.rating.rate} ⭐ ({product.rating.count} recensioni)</p>
                        <Link to={`/products/${product.id}`}>Vedi prodotto</Link>
                    </div>
                </div>
            ))}
        </div>
  
       
      </main>
    </>
  );
}