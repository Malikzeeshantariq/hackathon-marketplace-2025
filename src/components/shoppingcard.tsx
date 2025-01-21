"use client";
import React, { useState } from 'react';

export default function ShoppingCart() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: 'Graystone vase',
      description: 'A timeless ceramic vase with a tri-color grey glaze.',
      price: 85,
      quantity: 1,
      image: '/Product Image1.png', // Replace with actual image paths
    },
    {
      id: 2,
      name: 'Basic white vase',
      description: 'Beautiful and simple, this is one for the classics.',
      price: 125,
      quantity: 1,
      image: '/Product Image 2.png', // Replace with actual image paths
    },
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <><div className="w-[390px] md:w-full h-[749px] bg-gray-50 p-6 container mx-auto pb-10">
      <h3 className="text-2xl font-normal text-gray-800 pl-0 md:pl-20 pt-8 pb-10">Your shopping cart</h3>
      <div className="bg-gray-50 rounded-lg shadow-md mx-0 pr-10 md:pr-0 md:mx-20">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="pb-3 text-sm text-gray-500">Product</th>
              <th className="pb-3 text-sm text-gray-500 text-center">Quantity</th>
              <th className="pb-3 text-sm text-gray-500 text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="py-4 flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[133px] md:w-[109px] h-[166px] md:h-[134px] rounded-md object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-500 w-[179px]">{item.description}</p>
                    <p className="mt-2 font-semibold text-gray-800">£{item.price}</p>
                  </div>
                </td>
                <td className="py-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-2 py-1 border rounded text-gray-600 hover:bg-gray-200"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-2 py-1 border rounded text-gray-600 hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="py-4 text-right font-medium text-gray-800">
                  £{item.price * item.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-6 flex justify-end items-center">
          <p className="text-gray-600">Subtotal</p>
          <p className="text-xl font-semibold ml-6">£{subtotal}</p>
        </div>
        <p className="text-sm text-gray-500 mt-2 text-right">Taxes and shipping are calculated at checkout</p>
        <div className="mt-4 flex justify-end">
        <button className=" mt-4 w-[342px] md:w-[172px] h-[56px] bg-[#2A254B] text-white py-3 rounded text-center font-medium hover:bg-indigo-500">
          Go to checkout
        </button>
        </div>
      </div>
      </div>
      </>
      
       );
}
