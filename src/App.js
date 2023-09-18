import "./App.css";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
  Link,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import User from "./pages/User";
import FilteredProducts from "./pages/FilteredProducts";
import SideBar from "./components/SideBar";
import { ShopContextProvider } from "./Contexts/shop-context";

function App() {
  return (
    <>
      {/* <p>Main Page</p> */}
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />}></Route>
            <Route exact path="/men" element={<Men />}></Route>
            <Route exact path="/women" element={<Women />}></Route>
            <Route exact path="/kids" element={<Kids />}></Route>
            <Route exact path="/Cart" element={<Cart />}></Route>
            <Route exact path="/User" element={<User />}></Route>
            <Route
              exact
              path="/SearchedProducts"
              element={<FilteredProducts />}
            ></Route>

            <Route path="/product/:productId" element={<ProductDetails />} />
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </>
  );
}

export default App;
