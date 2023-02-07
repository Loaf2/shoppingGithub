import React, { useState, useContext } from 'react';
import { CounterContext } from './App'

import sneakerImage1 from "./assets/image-product-1.jpg";
import sneakerImage2 from "./assets/image-product-2.jpg";
import sneakerImage3 from "./assets/image-product-3.jpg";
import sneakerImage4 from "./assets/image-product-4.jpg";

import sneakerThumbnail1 from "./assets/image-product-1-thumbnail.jpg";
import sneakerThumbnail2 from "./assets/image-product-2-thumbnail.jpg";
import sneakerThumbnail3 from "./assets/image-product-3-thumbnail.jpg";
import sneakerThumbnail4 from "./assets/image-product-4-thumbnail.jpg";
import cartIcon from "./assets/icon-cart.svg";

export default function Content() {
  const [counter, setCounter] = useState(0)
  const { amount, setAmount } = useContext(CounterContext)
  const [initialSelect, setInitialSelect] = useState("selected");
  const [thumbnailValue1, setThumbnailValue1] = useState("");
  const [thumbnailValue2, setThumbnailValue2] = useState("");
  const [thumbnailValue3, setThumbnailValue3] = useState("");
  const [thumbnailValue4, setThumbnailValue4] = useState("");
  const [img, setImg] = useState(sneakerImage1);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    if (counter === 0) return;
    setCounter(counter - 1);
  }

  function handleSelect(e) {
    if (e === 1) {
      setThumbnailValue1("selected");
      setImg(sneakerImage1);

      if (thumbnailValue2 !== "") {
        setThumbnailValue2("");
      }

      if (thumbnailValue3 !== "") {
        setThumbnailValue3("");
      }

      if (thumbnailValue4 !== "") {
        setThumbnailValue4("");
      }
    }

    if (e === 2) {
      setThumbnailValue2("selected");
      setImg(sneakerImage2);

      if (initialSelect !== "") setInitialSelect("");

      if (thumbnailValue1 !== "") {
        setThumbnailValue1("");
      }

      if (thumbnailValue3 !== "") {
        setThumbnailValue3("");
      }

      if (thumbnailValue4 !== "") {
        setThumbnailValue4("");
      }
    }

    if (e === 3) {
      setThumbnailValue3("selected");
      setImg(sneakerImage3);

      if (initialSelect !== "") setInitialSelect("");

      if (thumbnailValue1 !== "") {
        setThumbnailValue1("");
      }

      if (thumbnailValue2 !== "") {
        setThumbnailValue2("");
      }

      if (thumbnailValue4 !== "") {
        setThumbnailValue4("");
      }
    }

    if (e === 4) {
      setThumbnailValue4("selected");
      setImg(sneakerImage4);

      if (initialSelect !== "") setInitialSelect("");

      if (thumbnailValue1 !== "") {
        setThumbnailValue1("");
      }

      if (thumbnailValue2 !== "") {
        setThumbnailValue2("");
      }

      if (thumbnailValue3 !== "") {
        setThumbnailValue3("");
      }
    }
  }

  function addToCart() {
    if (counter === 0) return
    setAmount(amount + counter)
  }

  return (
    <div className="flex justify-center mt-24">
      <div className="flex gap-[8rem]">
        <div className="flex flex-col gap-8 w-min">
          <div className="mainimg w-[30.5rem]">
            <img src={img} alt="" className="rounded-xl" />
          </div>
          <div className="subimgs flex gap-5">
            <div className={`${thumbnailValue1} ${initialSelect}`}>
              <img
                src={sneakerThumbnail1}
                alt=""
                className="w-[100%] rounded-xl thumbnail"
                onClick={() => handleSelect(1)}
              />
            </div>
            <div className={thumbnailValue2}>
              <img
                src={sneakerThumbnail2}
                alt=""
                className="w-[100%] rounded-xl thumbnail"
                onClick={() => handleSelect(2)}
              />
            </div>
            <div className={thumbnailValue3}>
              <img
                src={sneakerThumbnail3}
                alt=""
                className="w-[100%] rounded-xl thumbnail"
                onClick={() => handleSelect(3)}
              />
            </div>
            <div className={thumbnailValue4}>
              <img
                src={sneakerThumbnail4}
                alt=""
                className="w-[100%] rounded-xl thumbnail"
                onClick={() => handleSelect(4)}
              />
            </div>
          </div>
        </div>
        <div className="sneakerContent flex flex-col justify-center">
          <span className="text-[#ff7d1a] font-bold text-sm tracking-wider">
            SNEAKER COMPANY
          </span>
          <h1 className="text-5xl font-bold mt-5 mb-10">
            Fall Limited Edition<br></br> Sneakers
          </h1>
          <p className="text-[#68707d] mb-7">
            These low-profile sneakers are your perfect casual wear<br></br>{" "}
            companion. Featuring a durable rubber outer sole, they'll<br></br>{" "}
            withstand everything the weather can offer.
          </p>
          <div className="flex gap-3.5 items-center">
            <span className="text-4xl font-bold">$125.00</span>
            <span className="bg-[#ffede0] h-min px-1.5 text-[#ff7d1a] font-bold rounded-md">
              50%
            </span>
          </div>
          <span className="mt-2 text-[#b6bcc8] font-semibold">$250.00</span>
          <div className="flex gap-10 ">
            <div className="flex mt-5">
              <button
                className="bg-[#ffede0] text-[#ff7d1a] px-4 py-1 text-2xl font-bold hover:opacity-70 duration-200 ease-in-out minus"
                onClick={decrement}
              >
                -
              </button>

              <span className="bg-[#ffede0] px-4 py-1 text-2xl font-semibold">
                {counter}
              </span>
              <button
                className="bg-[#ffede0] text-[#ff7d1a] font-bold text-2xl px-4 py-1 hover:opacity-70 duration-200 ease-in-out plus"
                onClick={increment}
              >
                +
              </button>
            </div>
            <button className="flex items-center relative top-2.5 gap-5 bg-[#ff7d1a] text-white rounded-xl px-20 text-[1.1rem] font-semibold tracking-wider addToCart"
            onClick={addToCart}
            >
              <img src={cartIcon} alt="" className="cart" /> Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
