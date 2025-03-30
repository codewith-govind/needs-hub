import React, { useState } from "react";
import { Plus, Minus, Heart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  weight: string;
  callBack : ({arg} : any) => void;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  weight,
  callBack,
}: ProductCardProps) {
  const { state, dispatch } = useCart();
  const cartItem = state.items.find((item) => item.id === id);
  const quantity = cartItem?.quantity || 0;
  const [isFavorite, setIsFavorite] = useState(false);

  const addToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: { id, name, price, image, weight, quantity: 1 },
    });
  };

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity < 1) {
      dispatch({ type: "REMOVE_ITEM", payload: id });
      return;
    }
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id, quantity: newQuantity },
    });
  };


  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md flex flex-col justify-between h-full">
      <div className="relative">
        {/* <Link to={"/product/" + id}> */}
          <img
            src={image}
            alt={name}
            className="w-full h-36 object-cover rounded-t-xl mb-2"
            onClick={() => callBack("open_details")}
          />
        {/* </Link> */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-2 right-2 p-2 bg-white  dark:bg-gray-700 rounded-full shadow-md hover:scale-110 transition-all"
        >
          <Heart
            className={`h-5 w-5 ${
              isFavorite ? "text-red-500 fill-red-500" : "text-gray-400"
            }`}
          />
        </button>
      </div>

      <div className="space-y-3 flex-1 px-2 ">
        <Link to={"/product/" + id}>
          <div className="flex flex-col space-y-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
              {name}
            </h3>
            <div className="flex items-center justify-between text-gray-500 dark:text-gray-300 text-sm">
              <p>{weight}</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
                ₹ {price.toFixed(2)}
              </p>
            </div>
          </div>
        </Link>
      </div>

      <div className="mt-2 flex justify-between items-center px-2  pb-2">
        {quantity === 0 ? (
          <button
            onClick={addToCart}
            className="w-full py-2 bg-emerald-600 text-white rounded-full text-sm font-medium hover:bg-emerald-700 transition-all"
          >
            Add to Cart
          </button>
        ) : (
          <div className="w-full flex items-center justify-between bg-gray-100 dark:bg-gray-700 rounded-full p-1">
            <button
              onClick={() => updateQuantity(quantity - 1)}
              className="p-1 px-3 rounded-full bg-white dark:bg-gray-600 text-emerald-600 hover:bg-gray-200 transition-all"
            >
              <Minus className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>
            <span className="text-gray-900 dark:text-white text-lg font-semibold">
              {quantity}
            </span>
            <button
              onClick={() => updateQuantity(quantity + 1)}
              className="p-1 px-3 rounded-full bg-white dark:bg-gray-600 text-emerald-600 hover:bg-gray-200 transition-all"
            >
              <Plus className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
