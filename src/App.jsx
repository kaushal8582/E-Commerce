

import {BrowserRouter,Route,Routes} from "react-router-dom"
import Store from "./pages/Store";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return(
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/store" element={<Store/>} />
      <Route path="/about" element={<About/>} />
     </Routes>
    </BrowserRouter>
  )
}

export default App;
