import React from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/cartSlice";
import toast from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  function removeFromCart() {
    dispatch(remove(item.id));
    toast.success("Item removed from cart");
  }

  return (
    <div
      className="
        flex gap-6 p-4 mb-6
        bg-white dark:bg-gray-800
        border border-gray-200 dark:border-gray-700
        rounded-xl
        transition 
      "
    >
      {/* Image */}
      <div className="w-28 h-28 flex-shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h1 className="font-semibold text-lg truncate">
            {item.title.split(" ").slice(0, 7).join(" ") + "..."}
          </h1>

          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {item.description.split(" ").slice(0, 12).join(" ")}...
          </p>
        </div>

        <div className="flex justify-between items-center mt-4">
          <p className="font-semibold text-green-600 dark:text-green-500">
            ${item.price}
          </p>

          <button
            onClick={removeFromCart}
            className="
              p-2 rounded-full
              text-gray-500 dark:text-gray-400
              hover:text-red-500 dark:hover:text-red-400
              transition
            "
          >
            <RiDeleteBinFill size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
