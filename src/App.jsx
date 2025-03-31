

import {BrowserRouter,Route,Routes} from "react-router-dom"
import Store from "./pages/Store";
import About from "./pages/About";
import Home from "./pages/Home";
import ContactUsPage from "./pages/ContactUsPage";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return(
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/store" element={<Store/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<ContactUsPage/>} />
      <Route path="/product/:id" element={<ProductDetails/>} />
     </Routes>
    </BrowserRouter>
  )
}

export default App;
