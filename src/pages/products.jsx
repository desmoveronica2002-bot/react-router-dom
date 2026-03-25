import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BudgetContext from "../contexts/BudgetContext";

export default function Products() {
  const [products, setProducts] = useState([]); 
  const { budgetMode } = useContext(BudgetContext); 


  // Fetch dei dati
  function fetchProducts() {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
  }
  useEffect(() => {
    fetchProducts();
  }, []);


  const filteredProducts = budgetMode ? products.filter(product => product.price <= 30): products;

  return (
    <main className="container">
      <h2>Lista Prodotti</h2>

      <div className="row">
        {filteredProducts.map(product => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 contorno-card">
            <img src={product.image} className="dimensione" />
            <div className="card-body">
              <h3 className="card-title">{product.title}</h3>
              <p><strong>Prezzo:</strong> {product.price} €</p>
              <Link to={`/products/${product.id}`}>Vedi prodotto</Link>
            </div>
          </div>
        ))}
      </div>
    </main>

  );
}