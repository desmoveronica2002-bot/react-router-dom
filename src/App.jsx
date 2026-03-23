import {BrowsetRouter, Routes} from "react-router-dom"

function App() {

  return (
    <>
    <BrowsetRouter>
    <Routes> 
      <Routes path="/" element={<h1>Homepage</h1>}/>
      <Routes path="/presentazione" element={<h1>chi siamo</h1>}/>
      <Routes path="/products" element={<h1>prodotti</h1>}/>

    </Routes>
    </BrowsetRouter>

    </>
  )
}

export default App
