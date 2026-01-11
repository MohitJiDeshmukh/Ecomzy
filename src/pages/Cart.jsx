import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  // Selector: Ensure this matches your rootReducer structure
  const { cart } = useSelector((state) => state);

  // Derived State: Calculate total during render (more efficient than useEffect)
  const totalAmount = cart.reduce((acc, curr) => acc + Number(curr.price), 0);

  return (
    <div className="mx-auto px-6 overflow-x-hidden min-h-[80vh]">
      {cart.length > 0 ? (
        <div className="flex max-w-6xl gap-16 p-6 mx-auto flex-wrap lg:flex-nowrap">
          {/* Left Side: Item List */}
          <div className="lg:w-[70%]">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          {/* Right Side: Summary */}
          <div className="md:w-[30%] w-full flex flex-col gap-8 justify-between">
            <div className="mt-20">
              <p className="text-xl uppercase font-semibold text-green-600 dark:text-green-500">
                Your Cart
              </p>
              <p className="text-5xl font-semibold uppercase mb-4 text-green-700 dark:text-green-400">
                Summary
              </p>
              <p className="font-semibold text-xl text-gray-600 dark:text-gray-400">
                Total Items:
                <span className="font-normal ml-1">{cart.length}</span>
              </p>
            </div>

            <div className="mb-20">
              <p className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-5">
                Total Amount:
                <span className="font-bold ml-2 text-gray-900 dark:text-gray-100">
                  ${totalAmount.toFixed(2)}
                </span>
              </p>

              <button className="text-lg w-full py-2.5 rounded-lg font-bold bg-green-600 dark:bg-green-500 text-white border-2 border-green-600 dark:border-green-500 hover:bg-transparent hover:text-green-600 dark:hover:text-green-400 transition-all duration-300">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Empty Cart State */
        <div className="min-h-[calc(100vh-80px)] flex flex-col gap-6 justify-center items-center">
          <h1 className="font-semibold text-xl text-gray-700 dark:text-gray-200">
            Your Cart is Empty!
          </h1>
          <NavLink to="/">
            <button className="bg-green-600 text-white text-md uppercase font-semibold py-3 px-10 rounded-md border-green-600 border-2 hover:bg-white hover:text-green-600 transition-all duration-300">
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
