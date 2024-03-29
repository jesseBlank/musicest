import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./views/Home"
import AllInstruments from "./views/AllInstruments"
import ShowProduct from "./views/ShowProduct"
import Cart from "./views/Cart"
import MyContext from "./components/MyContext"

function App() {


  return (
    <>
      <BrowserRouter>
        <MyContext>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/instruments/:type" element={<AllInstruments />} />
            <Route path="/instrument/:id" element={<ShowProduct />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </MyContext>
      </BrowserRouter>
    </>
  )
}

export default App
