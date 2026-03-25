import { useContext } from "react";
import { Link } from "react-router-dom";
import BudgetContext from "../contexts/BudgetContext";

export default function Navbar() {
  const { budgetMode, setBudgetMode } = useContext(BudgetContext);

  const toggleBudgetMode = () => setBudgetMode(!budgetMode);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary container">

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
                    <button onClick={toggleBudgetMode}>
                        {budgetMode ? "Disattiva Modalità Budget" : "Attiva Modalità Budget"}
                    </button>
                  </div>
                </div>
            
    </nav>
  );
}