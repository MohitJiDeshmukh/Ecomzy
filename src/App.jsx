import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import "./index.css";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div
      className="
      min-h-screen 
      bg-gray-50 dark:bg-gray-900 
      text-gray-900 dark:text-gray-100
    "
    >
     
        <Navbar />
     

      <main className="pt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

///Practice of RTK by counter app
/*

 <>
      <div className="flex items-center justify-center">
        <button
          aria-label="Increment value"
          className="bg-amber-200 p-4 m-4 rounded-2xl cursor-pointer border-2 border-dashed"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span className="text-5xl text-pink-400">{count}</span>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
          className="bg-amber-200 p-4 m-4 rounded-2xl cursor-pointer border-2 border-dashed"
        >
          Decrement
        </button>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-amber-200 p-4 m-4 rounded-2xl cursor-pointer border-2 border-dashed"
          onClick={() => {
            dispatch(incrementByAmount(Number(100)));
          }}
        >
          Increase by Amount
        </button>
      </div>
    </>

*/
