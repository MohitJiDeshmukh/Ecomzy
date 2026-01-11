import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { add, remove } from "../redux/slices/cartSlice";

const ProductCard = ({ product }) => {
  // Destructure product for cleaner usage in JSX
  const { id, title, description, image, price } = product;

  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  // Check if item is already in cart
  const isInCart = cart?.some((p) => p.id === id);

  const addToCart = () => {
    dispatch(add(product));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(id));
    toast.error("Item removed from Cart");
  };

  return (
    <div className="group flex flex-col items-center justify-between gap-3 p-4 mt-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in hover:scale-110 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
      {/* Title */}
      <div className="w-full">
        <p className="font-semibold text-lg text-gray-700 dark:text-gray-100 truncate w-40">
          {title}
        </p>
      </div>

      {/* Description */}
      <div className="w-full">
        <p className="w-40 text-gray-400 font-normal text-[12px] text-left">
          {description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>

      {/* Image */}
      <div className="h-[180px]">
        <img src={image} className="w-full h-full object-contain" alt={title} />
      </div>

      {/* Footer: Price and Button */}
      <div className="flex justify-between items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold">${price}</p>
        </div>

        <button
          onClick={isInCart ? removeFromCart : addToCart}
          className={`
            text-gray-700 dark:text-gray-200 border-2 border-gray-700 dark:border-gray-200 
            rounded-full font-semibold text-[12px] p-1 px-3 uppercase 
            transition duration-300 ease-in
            hover:bg-gray-700 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-900
          `}
        >
          {isInCart ? "Remove Item" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
