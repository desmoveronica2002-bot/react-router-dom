import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/home";
import Presentazione from "./pages/presentazione";
import Products from "./pages/products";

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes> 
      <Route path="/" element={<h1>Home</h1>}/>
      <Route path="/presentazione" element={<h1>Presentazione</h1>}/>
      <Route path="/products" element={<h1>Products</h1>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
