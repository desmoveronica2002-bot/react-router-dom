import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/home";
import Presentazione from "./pages/presentazione";
import Products from "./pages/products";
import ProductPage from "./pages/ProductPage";
import BudgetContext from "./contexts/BudgetContext";

function App() {

  return (
    <>

    <BudgetContext.Provider value={{ title: 'prova' }} />

    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path="/presentazione" element={<Presentazione/>}/>
        <Route path="/products" element={<Products/>}/>

        <Route path="/products/:id" element={<ProductPage/>}/>

      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
