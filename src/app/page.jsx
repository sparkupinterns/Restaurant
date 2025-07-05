"use client";
import Head from "next/head";
import Testimonial from "../components/Testimonial";
import { useEffect, useState } from "react";
import { FaTags } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";

export default function Page() {
 
  return (
    <>
      <div>
        <section className="h-[770px] text-white bg-[#131313] box-sizing:border-box bg-[url('/images/about/transparent1.png')] bg-cover bg-left">
          <div className="grid grid-cols-2 items-center justify-center gap-10 pt-10">


            <div className="flex flex-col text-2xl items-center mt-25 justify-between relative">
              <div>
                <img src="/images/anim/7.png" alt="image" className="absolute left-10 top-[-100] h-20"/>
                <img src="/images/anim/41.png" alt="image" className="absolute left-0 bottom-[-100] h-20"/>
              </div>
              <div>
                <div className="leading-16 text-5xl gap-4 text-white font-extrabold font-sans tracking-wide h-[120px] w-[456px] mb-8 ">
                  ENJOY OUR DELICIOUS{" "}
                  <span className="text-5xl text-yellow-500 font-extraibold font-sans">
                    FOOD
                  </span>
                </div>

                <div className="text-3xl font-bold leading-tight flex flex-row my-8 items-center font-sans ">
                  <div className="border border-dotted border-r-0 p-3 rounded-l-xl">
                    Buy One. Get One
                  </div>
                  <div
                    className="p-3 text-white bg-[#CC3333] font-semibold font-sans rounded-r-lg border-1 border-transparent hover:bg-[#131313] transition hover:text-[#CC3333] hover:border-[#CC3333] hover:text-[#CC3333]"
                  >
                    Free
                  </div>
                </div>

                <div className="text-3xl font-medium my-8 font-sans text-white ">
                  <p>
                    Price:{" "}
                    <span className="text-yellow-500 font-extrabold">
                      $10.50
                    </span>
                  </p>
                </div>

                <div>
                  <div className="flex flex-row items-center gap-6 my-8">
                    <img
                      src="/images/home/scooter.png"
                      alt="phone"
                      className="w-20 h-20"
                    />
                    <div>
                      <h3 className="text-xl font-semibold font-sans text-white ">
                        Daily Order Num.
                      </h3>
                      <p className=" text-yellow-500 font-extrabold text-3xl ">
                        123-5662546
                      </p>
                    </div>

                    <div>
                      <button className="text-white bg-[#CC3333] font-sans px-6 py-3 cursor-pointer rounded-lg w-[200px] border-1 border-transparent rounded-lg hover:bg-[#131313] transition hover:text-[#CC3333] hover:border-[#CC3333] hover:text-[#CC3333]">
                        Try it Now
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="h-[450px] flex-shrink-0 relative">
              <img
                src="/images/home/pizza.png"
                alt="Pizza"
                className="ml-8"
              />
              <div>
              <img src="/images/anim/4.png" alt="image" className="absolute top-[-30] right-30"/>
              <img src="/images/anim/8.png" alt="image" className="absolute left-[-60] bottom-0"/>
              <img src="/images/anim/21.png" alt="image" className="absolute left-[-10] bottom-[-180] h-18"/>
            </div>
            </div>
            
          </div>
        </section>

        <section className="bg-gray-100 h-[436px] w-full text-black p-4">
          <div className="mt-[-50px] items-center justify-center flex flex-col rounded-lg w-[1300px] h-[400px] mx-auto bg-white relative">
            <div>
              <img src="/images/anim/72.png" alt="image" className="absolute top-0 right-0"/>
              <img src="/images/anim/42.png" alt="image" className="absolute right-0 bottom-0"/>
              <img src="/images/anim/91.png" alt="image" className="absolute bottom-0 left-140"/>
              <img src="/images/anim/2.png" alt="image" className="absolute top-10 left-10"/>
              <img src="/images/anim/5.png" alt="image" className="absolute bottom-0 left-0"/>
            </div>
            <div className="my-5 mt-0 pt-0 p-5 pb-20">
            <h3
              className="text-5xl font-black text-center"
              style={{ color: "#CC3333", fontFamily: "Caveat, cursive" }}
            >
              Online Booking
            </h3>{" "}
            <h1
              className="text-5xl gap-4 font-extrabold font-sans tracking-wide "
              style={{ color: "#2a435d" }}
            >
              Table{" "}
              <span
                className="text-5xl font-extrabold font-sans"
                style={{ color: "#CC3333" }}
              >
                Booking
              </span>
            </h1>
          </div>

          <div className="flex flex-row gap-8 text-2xl">
            <div className="border p-4 w-[300px] rounded-lg flex items-center justify-center">
              <select id="food" name="food" className="w-full focus:outline-none focus:ring-0 text-[#2a435d]">
                <option value="4">4 Poeple</option>
                <option value="3">3 Poeple</option>
                <option value="2">2 Poeple</option>
                <option value="1">1 Poeple</option>
              </select>
            </div>

            <div className="border p-4 w-[300px] rounded-lg">
              <input
                type="date"
                id="dob"
                name="dob"
                className="border-none w-full focus:outline-none focus:ring-0 text-[#2a435d]"
              />
            </div>

            <div className="border p-4 w-[300px] rounded-lg">
              <select id="food" name="food" className="w-full focus:outline-none focus:ring-0 text-[#2a435d]">
                <option value="4">07:24 PM</option>
                <option value="3">07:24 PM</option>
                <option value="2">07:24 PM</option>
                <option value="1">07:24 PM</option>
              </select>
            </div>

            <div className="items-center">
              <button className="text-white bg-[#CC3333] font-sans px-6 py-4 rounded-lg cursor-pointer w-[200px] border-1 border-transparent hover:bg-white transition hover:text-[#CC3333] hover:border-[#CC3333] hover:text-[#CC3333]">
                Find Table
              </button>
            </div>
          </div>
          </div>
        </section>

        <section className="bg-gray-100 w-full text-black flex items-center justify-center p-4 h-[727px]">
          <div className="flex w-[1320px] ">
            {/* Left Side */}
            <div className="flex flex-col gap-4 w-[50%] pl-10 relative" >
              <div>
              <img src="/images/anim/2.png" alt="image" className="absolute bottom-12 right-30"/>
              {/* <img src="/images/anim/1.png" alt="image" className="absolute right-0 bottom-70"/> */}
            </div>
              <div className="flex gap-4">
                <img
                  src="/images/home/1.jpg"
                  alt="image"
                  className="w-[150px] h-[180px] mt-30"
                />
                <img
                  src="/images/home/2.jpg"
                  alt="image"
                  className="w-[320px] h-[300px] object-cover"
                />
              </div>
              <div className="flex gap-4">
                <img
                  src="/images/home/3.jpg"
                  alt="image"
                  className="w-[250px] h-[250px]"
                />

                <div
                  className="w-[180px] rounded-sm text-white h-[150px] flex flex-col items-center justify-center text-center"
                  style={{ backgroundColor: "#CC3333" }}
                >
                  <img
                    src="/images/home/3.png"
                    alt="icon"
                    className="w-23 h-23 mb-2"
                  />
                  <h3 className="text-2xl font-extrabold">2000 +</h3>
                  <h3 className="text-lg font-medium">Food Item</h3>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="w-[50%] flex flex-col justify-center font-sans relative">
              <div>
              <img src="/images/anim/2.png" alt="image" className="absolute top-0 right-0"/>
              <img src="/images/anim/1.png" alt="image" className="absolute right-0 bottom-70"/>
            </div>
              <h1
                className="text-5xl font-black leading-snug"
                style={{ color: "#2a435d" }}
              >
                Fresh Taste At A Great Price, Only For{" "}
                <span style={{ color: "#CC3333" }}>Hungry People.</span>
              </h1>
              <p className="mt-4 text-gray-700">
                Food is a restaurant, bar and coffee roastery located on a busy
                corner site in Farringdon's Exmouth Market. With glazed.
              </p>

              <div className="mt-6 flex bg-white p-8 rounded-lg shadow items-center gap-7 w-[700px]">
                <div className="relative">
                  <img
                    src="/images/home/2.png"
                    alt="burger"
                    className="w-20 h-20 rounded-full"
                  />
                  <span className="absolute top-[-10px] left-[-10px] bg-red-500 text-white text-sm px-2 py-1 rounded-full">
                    $15
                  </span>
                </div>
                <div>
                  <h2
                    className="text-2xl font-bold py-2"
                    style={{ color: "#2a435d" }}
                  >
                    Garlic Burger Parties
                  </h2>
                  <p className="text-gray-600 text-base">
                    It is a long established fact that a reader BBQ food
                    Chicken.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 w-full text-black flex justify-center p-4 h-[1316px]">
          <div className="w-full max-w-[1320px]">
            {/* First */}
            <div className="m-5 py-10 w-full text-center">
              <h3
                className="text-5xl font-black"
                style={{ color: "#CC3333", fontFamily: " 'Caveat', cursive" }}
              >
                Food Items
              </h3>
              <h1
                className="text-5xl font-extrabold font-sans tracking-wide mt-2"
                style={{ color: "#2a435d" }}
              >
                Popular <span style={{ color: "#CC3333" }}>Menu</span>
              </h1>
            </div>

            {/* Grid Section */}
            <div className="grid grid-cols-6 gap-4 p-6 m-auto">
              <button className="focus:bg-[#CC3333] focus:text-white cursor-pointer w-[140px] h-[160px] text-[#2a435d] font-bold text-xl rounded-sm text-center border border-gray-300 flex items-center justify-center">
                <div className="">
                  <img
                    src="/images/home/pizza2.png"
                    alt="Image"
                    className="p-2 w-[120px]"
                  />
                  <h1>Pizza</h1>
                </div>
              </button>
              <button className="focus:bg-[#CC3333] focus:text-white cursor-pointer w-[140px] h-[160px] text-[#2a435d] font-bold text-xl rounded-sm text-center border border-gray-300 flex items-center justify-center">
                {" "}
                <div className="">
                  <img
                    src="/images/home/burger.png"
                    alt="Image"
                    className="p-2 w-[100px]"
                  />
                  <h1>Burger</h1>
                </div>
              </button>
              <button className="focus:bg-[#CC3333] focus:text-white cursor-pointer w-[140px] h-[160px] text-[#2a435d] font-bold text-xl rounded-sm text-center border border-gray-300 flex items-center justify-center">
                {" "}
                <div className="">
                  <img
                    src="/images/home/chicken.png"
                    alt="Image"
                    className="p-2 w-[100px]"
                  />
                  <h1>Chicken</h1>
                </div>
              </button>
              <button className="focus:bg-[#CC3333] focus:text-white cursor-pointer w-[140px] h-[160px] text-[#2a435d] font-bold text-xl rounded-sm text-center border border-gray-300 flex items-center justify-center">
                {" "}
                <div className="">
                  <img
                    src="/images/home/drinks.png"
                    alt="Image"
                    className="p-2 w-[100px]"
                  />
                  <h1>Drinks</h1>
                </div>
              </button>
              <button className="focus:bg-[#CC3333] focus:text-white cursor-pointer w-[140px] h-[160px] text-[#2a435d] font-bold text-xl rounded-sm text-center border border-gray-300 flex items-center justify-center">
                {" "}
                <div className="">
                  <img
                    src="/images/home/drinks2.png"
                    alt="Image"
                    className="p-2 w-[85px]"
                  />
                  <h1>Drinks</h1>
                </div>
              </button>
              <button className="focus:bg-[#CC3333] focus:text-white cursor-pointer w-[140px] h-[160px] text-[#2a435d] font-bold text-xl rounded-sm text-center border border-gray-300 flex items-center justify-center">
                {" "}
                <div className="">
                  <img
                    src="/images/home/combo.png"
                    alt="Image"
                    className="p-2 w-[120px]"
                  />
                  <h1>Combo Menu</h1>
                </div>
              </button>
            </div>
            {/* Menu Section */}
            <div className="h-[600px] w-[1250px] m-auto my-10 shadow-xl rounded-sm flex flex-col items-center justify-center relative">
              <div>
              <img src="/images/anim/2.png" alt="image" className="absolute top-0 right-0"/>
              <img src="/images/anim/72.png" alt="image" className="absolute right-130 bottom-70 h-30"/>
              {/* <img src="/images/anim/12.png" alt="image" className="absolute right-130 bottom-70 h-30"/> */}
              {/* <img src="/images/anim/17.png" alt="image" className="absolute right-130 bottom-70 h-30"/> */}
            </div>
              <div className="grid grid-cols-3 gap-12 p-4">
                <div className="flex items-center gap-4 border border-gray-200 rounded-lg p-4 shadow-sm w-[380px] h-[170px] cursor-pointer hover:bg-white transition shadow-lg">
                  <img
                    src="/images/home/piz1.png"
                    alt="Tomato"
                    className="w-[100px] h-[100px] object-contain"
                  />
                  <div className="pl-8 text-xl">
                    <h2 className="text-2xl font-bold text-[#2a435d] py-2">
                      Margherita
                    </h2>
                    <p className="text-gray-600 text-sm">
                      Shrimp, Squid, Pineapple
                    </p>
                    <p className="text-[#2a435d] font-semibold mt-1 py-2">
                      Price: $15.00
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 border border-gray-200 rounded-lg p-4 shadow-sm w-[380px] h-[170px] cursor-pointer hover:bg-white transition shadow-lg">
                  <img
                    src="/images/home/piz2.png"
                    alt="Tomato"
                    className="w-[100px] h-[100px]object-contain"
                  />
                  <div className="pl-8 text-xl">
                    <h2 className="text-2xl font-bold text-[#2a435d] py-2">
                      Tomato
                    </h2>
                    <p className="text-gray-600 text-sm">
                      Shrimp, Squid, Pineapple
                    </p>
                    <p className="text-[#2a435d] font-semibold mt-1 py-2">
                      Price: $15.00
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 border border-gray-200 rounded-lg p-4 shadow-sm w-[380px] h-[170px] cursor-pointer hover:bg-white transition shadow-lg">
                  <img
                    src="/images/home/piz3.png"
                    alt="Tomato"
                    className="w-[100px] h-[100px] object-contain"
                  />
                  <div className="pl-8 text-xl">
                    <h2 className="text-2xl font-bold text-[#2a435d] py-2">
                      Marinara
                    </h2>
                    <p className="text-gray-600 text-sm">
                      Shrimp, Squid, Pineapple
                    </p>
                    <p className="text-[#2a435d] font-semibold mt-1 py-2">
                      Price: $15.00
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 border border-gray-200 rounded-lg p-4 shadow-sm w-[380px] h-[170px] cursor-pointer hover:bg-white transition shadow-lg">
                  <img
                    src="/images/home/piz4.png"
                    alt="Tomato"
                    className="w-[100px] h-[100px] object-contain"
                  />
                  <div className="pl-8 text-xl">
                    <h2 className="text-2xl font-bold text-[#2a435d] py-2">
                      Frutti Di Mare
                    </h2>
                    <p className="text-gray-600 text-sm">
                      Shrimp, Squid, Pineapple
                    </p>
                    <p className="text-[#2a435d] font-semibold mt-1 py-2">
                      Price: $15.00
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 border border-gray-200 rounded-lg p-4 shadow-sm w-[380px] h-[170px] cursor-pointer hover:bg-white transition shadow-lg">
                  <img
                    src="/images/home/piz5.png"
                    alt="Tomato"
                    className="w-[100px] h-[100px] object-contain"
                  />
                  <div className="pl-8 text-xl">
                    <h2 className="text-2xl font-bold text-[#2a435d] py-2">
                      Americana
                    </h2>
                    <p className="text-gray-600 text-sm">
                      Shrimp, Squid, Pineapple
                    </p>
                    <p className="text-[#2a435d] font-semibold mt-1 py-2">
                      Price: $15.00
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 border border-gray-200 rounded-lg p-4 shadow-sm w-[380px] h-[170px] cursor-pointer hover:bg-white transition shadow-lg">
                  <img
                    src="/images/home/piz6.png"
                    alt="Tomato"
                    className="w-[100px] h-[100px] object-contain"
                  />
                  <div className="pl-8 text-xl">
                    <h2 className="text-2xl font-bold text-[#2a435d] py-2">
                      Pizza Al Pesto
                    </h2>
                    <p className="text-gray-600 text-sm">
                      Shrimp, Squid, Pineapple
                    </p>
                    <p className="text-[#2a435d] font-semibold mt-1 py-2">
                      Price: $15.00
                    </p>
                  </div>
                </div>
              </div>

              {/* Button */}
              <div>
                <button className="text-white text-xl font-bold font-sans px-6 py-3 rounded-lg rounded-lg cursor-pointer [background-color:#CC3333] transition hover:bg-white hover:text-[#CC3333] hover:border-[#CC3333] hover:border-1 hover:border-[#CC3333] w-[180px] mt-10">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </section>

        <section
          className="w-full text-black flex px-4 h-[900px]"
          style={{ backgroundImage: "linear-gradient(#fffbf1, #fff)" }}
        >
          {/* main */}
          <div>
            {/* First */}

            <div className="flex flex-row gap-80 items-center px-15">
              {/* Left Side */}
              <div className="max-w-full m-5 py-10 w-full">
                <h3
                  className="text-5xl font-black"
                  style={{ color: "#CC3333", fontFamily: "Caveat, cursive" }}
                >
                  Food Items
                </h3>
                <h1
                  className="text-5xl font-extrabold font-sans tracking-wide mt-2"
                  style={{ color: "#2a435d" }}
                >
                  Popular <span style={{ color: "#CC3333" }}>Menu</span>
                </h1>
              </div>

              {/* Right Side */}
              <div className="w-[580px]">
                <ul className="flex flex-row items-center justify-between gap-2 p-2 text-[#2a435d]">
                  {["Items", "Pizza", "Burger", "Chicken", "Drinks"].map(
                    (item) => (
                      <li key={item}>
                        <button className="cursor-pointer text-lg focus:bg-[#CC3333] p-2 px-8 rounded-lg focus:text-white">
                          {item}
                        </button>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-4 gap-4 flex items-center justify-center pl-20">
                {/* Single Item */}
                {[
                  { img: "/images/home/pd1.png", title: "Garlic Burger" },
                  { img: "/images/home/pd2.png", title: "Vegetable Pizza" },
                  { img: "/images/home/pd3.png", title: "Chicken Fry" },
                  { img: "/images/home/pd4.png", title: "Chickpea Soup" },
                  { img: "/images/home/pd5.png", title: "Garlic Burger" },
                  { img: "/images/home/pd6.png", title: "Vegetable Pizza" },
                  { img: "/images/home/pd6.png", title: "Chicken Fry" },
                  { img: "/images/home/pd6.png", title: "Chickpea Soup" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col bg-white items-center h-[320px] w-[280px] gap-4 border border-gray-200 rounded-lg p-4 shadow-sm"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-[150px] h-[150px] object-contain"
                    />
                    <div className="pl-2">
                      <h2 className="text-2xl font-black text-[#2a435d] py-2">
                        {item.title}
                      </h2>
                      <p className="text-gray-600 text-sm py-2">
                        It is a long established fact that a reader BBQ food
                        Chicken.
                      </p>
                      <p className="text-[#2a435d] text-lg font-semibold">
                        Price: $15.00
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-white grid grid-cols-4 gap-8 w-full h-[790px] text-black p-30 ">
            <div className="col-span-2 bg-black text-white h-[270px]">
              <div className="p-4">
                <h1 className="pt-2 text-4xl font-black">Buzzed Burger</h1>
                <p className="text-sm pt-2">Sales off 50% only this week</p>
                <button
                  className="uppercase bg-[#CC3333] text-white text-lg cursor-pointer font-semibold font-sans py-2 rounded-lg border-1 border-transparent rounded-lg hover:bg-black transition w-[140px] mt-10 hover:text-[#CC3333] hover:border-[#CC3333] hover:text-[#CC3333]"
                  
                >
                  Order Now
                </button>
              </div>

              <div className="relative">
                <img
                  src="/images/g1.png"
                  alt="image"
                  className="absolute right-0 bottom-[-78] h-[170px] w-[320px]"
                />
              </div>
            </div>

            <div className="bg-[#347433] text-white w-full relative h-[270px]">
              <div className="absolute bottom-6 right-4 text-right">
                <h1 className="text-2xl font-semibold">
                  Super Delicious Pizza
                </h1>
                <button
                  className="uppercase text-white text-lg font-semibold font-sans rounded-lg hover:transition "
                  // style={{ backgroundColor: "#CC3333" }}
                >
                  Order Now
                </button>
              </div>
              <div>
                <img
                  src="/images/g2.png"
                  alt="image"
                  className="h-[100px] w-[150px]"
                />
              </div>
            </div>

            <div className="bg-[#CC3333] row-span-2 text-white">
              <div className="p-4">
                <h1 className="text-2xl font-bold pt-4">Super Combo Burger</h1>
                <button
                  className="uppercase text-red-500 bg-white text-lg cursor-pointer font-semibold font-sans py-2 rounded-lg w-[140px] mt-6 border-1 border-transparent rounded-lg hover:bg-[#CC3333] transition hover:text-white hover:border-white "
                >
                  Order Now
                </button>
              </div>
              <div className="relative flex justify-end vertical-align: bottom">
                <img
                  src="/images/g3.png"
                  alt="image"
                  className="absolute right-0 top-20 h-[340px] w-[280px]"
                />
              </div>
            </div>

            <div className="bg-orange-400 text-white h-[270px]">
              <div className="p-4">
                <h1 className="text-2xl font-[700] pt-4">Super Combo Burger</h1>
                <button
                  className="uppercase text-[#2a435d] text-lg font-semibold font-sans rounded-lg hover:transition mt-6"
                  // style={{ backgroundColor: "#CC3333" }}
                >
                  Order Now
                </button>
              </div>
              <div className="relative">
                <img
                  src="/images/g4.png"
                  alt="image"
                  className="absolute right-0 top-[-10]"
                />
              </div>
            </div>

            <div className="bg-[#347433] text-white w-full relative h-[270px]">
              <div className="absolute bottom-6 right-4 text-right">
                <h1 className="text-2xl font-semibold">
                  Super Delicious Pizza
                </h1>
                <button
                  className="uppercase text-white text-lg font-semibold font-sans rounded-lg hover:transition"
                  // style={{ backgroundColor: "#CC3333" }}
                >
                  Order Now
                </button>
              </div>
              <div>
                <img
                  src="/images/g2.png"
                  alt="image"
                  className="h-[100px] w-[150px]"
                />
              </div>
            </div>

            <div className="bg-orange-400 text-white h-[270px]">
              <div className="p-4">
                <h1 className="text-2xl font-[700] pt-4">Super Combo Burger</h1>
                <button
                  className="uppercase text-[#2a435d] text-lg font-semibold font-sans rounded-lg hover:transition mt-6"
                  // style={{ backgroundColor: "#CC3333" }}
                >
                  Order Now
                </button>
              </div>
              <div className="relative">
                <img
                  src="/images/g4.png"
                  alt="image"
                  className="absolute right-0 top-[-10]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black h-[900px] bg-[url('/images/about/transparent1.png')] bg-cover bg-left">
          <div className="flex flex-row items-center ">
            <div className="flex items-center justify-center mt-10 ml-8">
              <img
                src="/images/home/21.png"
                alt="Image"
                className=" h-210 w-210"
              />
            </div>

            <div className="flex flex-col pl-8 justify-center">
              <h3
                className="text-5xl font-black pb-5"
                style={{ color: "#CC3333", fontFamily: "Caveat, cursive" }}
              >
                Coming Soon
              </h3>
              <h1 className="text-5xl text-white font-black items-center leading-normal">
                SPICY CHICKEN <br />
                PIZZA
                <span className="pl-5 text-yellow-500">FOOD</span>
              </h1>
              <p className="py-8 text-white">Feel Hunger! Order Your Favourite Food.</p>
              <button className="bg-[#CC3333] text-white text-xl font-medium p-3 rounded-lg cursor-pointer w-[200px] border-1 border-transparent hover:bg-black transition hover:text-[#CC3333] hover:border-white hover:text-white">
                Order Now
              </button>
            </div>
          </div>
        </section>

        {/* <section className="bg-white text-black h-[600px] w-full">
          <div>
            <div className="text-center w-full p-5">
              <h3
                className="text-3xl font-black"
                style={{ color: "#CC3333", fontFamily: "Caveat, cursive" }}
              >
                Testimonials
              </h3>{" "}
              <h1
                className="text-5xl gap-4 font-black font-sans tracking-wide "
                style={{ color: "#2a435d" }}
              >
                Client{" "}
                <span
                  className="text-5xl font-extrabold font-sans"
                  style={{ color: "#CC3333" }}
                >
                  Feedback
                </span>
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-2 flex items-center">
            {[
              {
                img: "/images/home/testi1.png",
                name: "Christ Deo",
                title: "CEO A4 Tech",
                p: `
            Food Khan is a gret Restaurant from the University of Texas at
            Austin has been researching the benefits of frequent testing and
            the feedback leads to. He explains that in the history of the
            study.
          `,
              },
              {
                img: "/images/home/testi1.png",
                name: "James Van",
                title: "CEO Soft Tech",
                p: `
            Food Khan is a gret Restaurant from the University of Texas at
            Austin has been researching the benefits of frequent testing and
            the feedback leads to. He explains that in the history of the
            study.
          `,
              },
            ].map((p, index) => (
              <div className="h-[270px] w-[80%] items-center justify-center m-auto rounded-lg shadow-sm px-10">
                <div
                  key={index}
                  className="flex flex-row bg-white item-center gap-4 pt-4"
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-[100px] h-[100px] object-contain"
                  />
                  <div className="flex flex-col gap-2">
                    <h2>{p.name}</h2>
                    <h4>{p.title}</h4>
                  </div>
                </div>
                <div>
                  <p className="pt-6">{p.p}</p>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        <section className="bg-white text-black h-[600px] w-full">
          <div className="text-center w-full p-5">
            <h3
              className="text-5xl font-black"
              style={{ color: "#CC3333", fontFamily: "Caveat, cursive" }}
            >
              Testimonials
            </h3>{" "}
            <h1
              className="text-5xl gap-4 font-extrabold font-sans tracking-wide "
              style={{ color: "#2a435d" }}
            >
              Client{" "}
              <span
                className="text-5xl font-extrabold font-sans"
                style={{ color: "#CC3333" }}
              >
                Feedback
              </span>
            </h1>
          </div>
          <div>
            <Testimonial />
          </div>
        </section>

        <section className="bg-white h-[280px]">
          <div className="flex flex-row gap-4 overflow-x-hidden">
            <img src="/images/home/r1.jpg" alt="image" />
            <img src="/images/home/r2.jpg" alt="image" />
            <img src="/images/home/r3.jpg" alt="image" />
            <img src="/images/home/r5.jpg" alt="image" />
            <img src="/images/home/r4.jpg" alt="image" />
          </div>
        </section>

        <section className="bg-[#FFF2E0] h-[690px] px-10 py-20">
          <div className="flex flex-row gap-6 items-center">
            <div>
              <img src="/images/home/delivery.png" alt="image" />
            </div>

            <div className="w-[50%]">
              <h3
                className="text-5xl font-black pb-4"
                style={{ color: "#CC3333", fontFamily: " 'Caveat', cursive" }}
              >
                Delivery
              </h3>
              <h1
                className="text-5xl font-black font-sans tracking-wide mt-2"
                style={{ color: "#2a435d" }}
              >
                A Moments of Delivered <br />{" "}
                <span style={{ color: "#CC3333" }}>On Right Time & Place</span>
              </h1>
              <p className="pt-6" style={{ color: "#2a435d" }}>
                Food Khan is a restaurant, bar and coffee roastery located on a
                busy corner site in Farringdon's Exmouth Market. With glazed
                frontage on two sides of the building, overlooking the market
                and a bustling London inteon.
              </p>
              <div>
                <div className=" flex items-center gap-4 my-8">
                  <img
                    src="/images/home/scooter.png"
                    alt="phone"
                    className="w-20 h-20"
                  />
                  <div>
                    <h3
                      className="text-xl font-semibold font-sans text-white "
                      style={{ color: "#2a435d" }}
                    >
                      Daily Order Num.
                    </h3>
                    <p
                      className="font-bold text-3xl "
                      style={{ color: "#CC3333" }}
                    >
                      123-5662546
                    </p>
                  </div>

                  <div>
                    <button className="ml-4 text-xl bg-[#CC3333] text-white font-sans py-3 rounded-lg cursor-pointer w-[150px] border-1 border-transparent hover:bg-[#FFF2E0] transition hover:text-[#CC3333] hover:border-[#CC3333] hover:text-[#CC3333]">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 h-[800px]">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-black text-[#CC3333] font-[Caveat]">
              Food Khan
            </h3>
            <h1 className="text-5xl font-black font-sans tracking-wide mt-2 text-[#2a435d]">
              Blog & <span className="text-[#CC3333]">News</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 ">
            {/* Blog Card 1 */}
            <div className="relative rounded-lg overflow-hidden text-[#2a435d]">
              <img
                src="/images/home/b-1.jpg"
                alt="Burger"
                className="w-full h-80 rounded-xl object-cover transition-transform duration-500 ease-in-out transform hover:scale-110 rounded-xl"
              />
              <div className="absolute top-3 right-3 bg-[#CC3333] text-white px-3 py-1 rounded">
                <p className="text-lg font-bold">02</p>
                <p className="text-sm">Dec</p>
              </div>
              <div className="p-4">
                <div className="flex flex-row items-center gap-30 mb-2 text-[#2a435d] font-bold ">
                  <span className="flex flex-row items-center  gap-2">
                    <FaTags />
                    Chicken Burger
                  </span>

                  <span className="flex flex-row items-center  gap-2">
                    <FaUserCircle />
                    Milone Hridoy
                  </span>
                </div>
                <h2 className="text-3xl font-black pt-4">
                  Game Day Burger With Homemade
                </h2>
              </div>
            </div>

            {/* Blog Card 2 */}
            <div className="relative rounded-lg overflow-hidden text-[#2a435d]">
              <img
                src="/images/home/b-2.jpg"
                alt="Burger"
                className="w-full h-80 rounded-xl cursor-pointer object-cover transition-transform duration-500 ease-in-out transform hover:scale-110 rounded-xl"
              />
              <div className="absolute top-3 right-3 bg-[#CC3333] text-white px-3 py-1 rounded">
                <p className="text-lg font-bold">02</p>
                <p className="text-sm">Dec</p>
              </div>
              <div className="p-4">
                <div className="flex flex-row items-center gap-50 mb-2 text-[#2a435d] font-bold ">
                  <span className="flex flex-row items-center  gap-2">
                    <FaTags />
                    Pizza
                  </span>

                  <span className="flex flex-row items-center  gap-2">
                    <FaUserCircle />
                    Milone Hridoy
                  </span>
                </div>
                <h2 className="text-3xl font-black pt-4">
                  Game Day Burger With Homemade
                </h2>
              </div>
            </div>

            {/* Blog Card 3 */}
            <div className="relative rounded-lg overflow-hidden text-[#2a435d]">
              <img
                src="/images/home/b-3.jpg"
                alt="Burger"
                className="w-full h-80 rounded-xl object-cover transition-transform duration-500 ease-in-out transform hover:scale-110 rounded-xl"
              />
              <div className="absolute top-3 right-3 bg-[#CC3333] text-white px-3 py-1 rounded">
                <p className="text-lg font-bold">02</p>
                <p className="text-sm">Dec</p>
              </div>
              <div className="p-4">
                <div className="flex flex-row items-center gap-30 mb-2 text-[#2a435d] font-bold ">
                  <span className="flex flex-row items-center  gap-2">
                    <FaTags />
                    Chicken Burger
                  </span>

                  <span className="flex flex-row items-center  gap-2">
                    <FaUserCircle />
                    Milone Hridoy
                  </span>
                </div>
                <h2 className="text-3xl font-black pt-4">
                  Game Day Burger With Homemade
                </h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
