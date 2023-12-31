import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<ProductList />} />
            <Route path="Details" element={<Details />} />
            <Route path="Cart" element={<Cart />} />
            <Route path="*" element={<Default />} />
          </Route>
        </Routes>
          <Modal />
      </BrowserRouter>
    </>
  );
}

export default App;
