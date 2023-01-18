
import ItemDetailContainer from "./components/itemDetail/ItemDetailContainer";
import ItemListContainer from "./components/itemList/ItemListContainer";
import NavBar from "./components/NavBar";

import{ BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from "./components/cart/Cart";

import CartContextProvider from "./context/CartContext";
import Formulario from "./components/formik/Formulario";

import Form from "./components/form/Form";

function App() {
  return (
    <BrowserRouter>

      <CartContextProvider>
      <NavBar />
      
      <Routes>

        <Route path="/" element={< ItemListContainer/>} />
        <Route path="/BestClothes" element={< ItemListContainer/>} />
        <Route path="/category/:categoryName" element={< ItemListContainer/> } />
        <Route path="/category" element={< ItemListContainer/> } />
        <Route path="/itemDetail/:id" element={< ItemDetailContainer/> } />
        <Route path="/checkout" element={ <Form /> } />
        <Route path="/form" element={ <Formulario /> } />
        <Route path="/cart" element={ <Cart /> } />
        <Route path="*" element={<h2> Lo sentimos, esta página no existe </h2>} />

      </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
