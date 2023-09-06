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

function App() {
  return (
    <>
      {/* <p>Main Page</p> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/men" element={<Men />}></Route>
          <Route exact path="/women" element={<Women />}></Route>
          <Route exact path="/kids" element={<Kids />}></Route>
          <Route exact path="/Cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
