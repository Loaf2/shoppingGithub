import React, { useContext, useState, useEffect } from "react";
import cart from "./assets/icon-cart.svg";
import avatar from "./assets/image-avatar.png";
import thumbnail from './assets/image-product-1-thumbnail.jpg'
import can from './assets/icon-delete.svg'
import { CounterContext } from './App'

export default function Header() {

  const [selected, setSelected] = useState(false)
  const { amount, setAmount } = useContext(CounterContext)

  useEffect(() => {
    console.log(`'${amount}'`);
  }, [amount])

  function openCart() {
    setSelected(!selected)
  }

  function removeItems() {
    setAmount(0)
  }

  return (
    <div className="flex mx-52 justify-between gap-10 mt-10 border-b-[2px] pb-8">
      <div className="flex gap-20">
        <div className="flex items-center">
          <h1 className="font-['Kumbh_Sans'] font-bold text-4xl">sneakers</h1>
        </div>
        <div className="flex gap-10 items-center">
          <span className="text-[#68707d] title">Collections</span>
          <span className="text-[#68707d] title">Men</span>
          <span className="text-[#68707d] title">Women</span>
          <span className="text-[#68707d] title">About</span>
          <span className="text-[#68707d] title">Contact</span>
        </div>
      </div>
      <div className="flex gap-14 items-center">
        <div className="flex headerCartContainer"
            tooltip-content={amount}
            >
          <img
            src={cart}
            alt=""
            className={`w-[100%] h-[50%] headerCart`}
            onClick={openCart}
          />
          {selected === true ? <div className="cartDropdown w-[21rem] h-[12rem] bg-white absolute top-[3rem] flex flex-col">
            <div className="border-b-[2px] p-3">
              <span className="font-bold">Cart</span>
            </div>
            <div className="flex justify-center items-center h-full">
              {amount === 0 ? <span className="text-[#68707d] font-semibold">Your cart is empty.</span> : 
              <div className="flex flex-col h-[80%] items-center">
                <div className="flex gap-5 justify-center items-center">
                  <img src={thumbnail} className="w-[15%] rounded-md" />
                  <div className="flex-col">
                    <span>Fall Limited Edition Sneakers</span>
                    <div className="flex">
                      <span className="text-[#68707d]">$125.00 x {amount} <span className="font-bold text-black">${125 * amount}</span></span>
                    </div>
                  </div>
                  <img src={can} alt="" className="w-[5%] h-[50%] cursor-pointer" onClick={removeItems} />
                </div>
                <button className="w-[91.5%] bg-[#ff7d1a] mt-5 text-white py-2.5 rounded-md hover:opacity-70 duration-300 ease-in-out">Checkout</button>
              </div>
              }
            </div>
          </div> : null}
        </div>
        <img src={avatar} alt="" className="w-[30%] avatarIcon" />
      </div>
    </div>
  );
}
