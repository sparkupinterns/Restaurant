import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Testimonial from "../../components/Testimonial";
import { FaCirclePlay } from "react-icons/fa6";
import { FaTags } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";

const page = () => {
  return (
    <div>
      <section className="flex flex-col text-black items-center bg-[#131313] text-white justify-center py-20 gap-4 bg-[url('/images/about/transparent1.png')] bg-fit bg-center">
        <h1 className="text-4xl font-black">About Us</h1>
        <h3 className="font-bold">Home / About Us</h3>
      </section>

      <section className="bg-gray-100 grid grid-cols-4 flex items-center justify-center h-[150px] px-20">
        <div
          className="w-[180px] rounded-sm text-white h-[196px] w-[306px] flex flex-col items-center justify-center text-center mt-[-40px]"
          style={{ backgroundColor: "#CC3333" }}
        >
          <img src="/images/home/3.png" alt="icon" className="w-23 h-23 mb-2" />
          <h3 className="text-2xl font-extrabold">2000+</h3>
          <h3 className="text-lg font-medium">Food Item</h3>
        </div>
        <div
          className="mt-[-40px] w-[180px] rounded-sm text-white h-[196px] w-[306px] flex flex-col items-center justify-center text-center"
          style={{ backgroundColor: "#EAA64D" }}
        >
          <img src="/images/home/3.png" alt="icon" className="w-23 h-23 mb-2" />
          <h3 className="text-2xl font-extrabold">500+</h3>
          <h3 className="text-lg font-medium">Burger Food Item</h3>
        </div>
        <div
          className="mt-[-40px] w-[180px] rounded-sm text-white h-[196px] w-[306px] flex flex-col items-center justify-center text-center"
          style={{ backgroundColor: "#CC3333" }}
        >
          <img src="/images/home/3.png" alt="icon" className="w-23 h-23 mb-2" />
          <h3 className="text-2xl font-extrabold">1000+</h3>
          <h3 className="text-lg font-medium">Soft Drink Item</h3>
        </div>
        <div
          className="mt-[-40px] w-[180px] rounded-sm text-white h-[196px] w-[306px] flex flex-col items-center justify-center text-center"
          style={{ backgroundColor: "#EAA64D" }}
        >
          <img src="/images/home/3.png" alt="icon" className="w-23 h-23 mb-2" />
          <h3 className="text-2xl font-extrabold">600+</h3>
          <h3 className="text-lg font-medium">Delicious Fast Food</h3>
        </div>
      </section>

      <section className="bg-gray-100 w-full text-black flex items-center justify-center p-4 h-[900px]">
        <div className="flex w-[1320px] ">
          {/* Left Side */}
          <div className="flex flex-col gap-4 w-[50%] pl-10">
            <div className="flex gap-4">
              <img
                src="/images/home/1.jpg"
                alt="image"
                className="w-[200px] h-[200px] mt-30"
              />
              <img
                src="/images/home/2.jpg"
                alt="image"
                className="w-[350px] h-[330px] object-cover"
              />
            </div>
            <div className="flex gap-4">
              <img
                src="/images/home/3.jpg"
                alt="image"
                className="w-[300px] h-[300px]"
              />
              <img
                src="/images/about/chef.jpg"
                alt="image"
                className="w-[200px] h-[200px]"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="w-[50%] flex flex-col justify-center font-sans">
            <h1
              className="text-5xl font-black leading-snug"
              style={{ color: "#2a435d" }}
            >
              The Story about Food khan, only for{" "}
              <span style={{ color: "#CC3333" }}>Hungry People.</span>
            </h1>
            <p className="mt-4 text-gray-700 mb-4">
              Food is a restaurant, bar and coffee roastery located on a busy
              corner site in Farringdon's Exmouth Market. With glazed.
            </p>

            <div className="mt-6 flex flex-col bg-white p-8 rounded-lg shadow items-center gap-7 w-[650px]">
              <div className="w-full px-8 bg-gray-200 py-4 rounded-lg">
                <ul className="flex flex-row justify-between">
                  <li>
                    <button
                      className="text-lg font-bold"
                      style={{ color: "#2a435d" }}
                    >
                      History
                    </button>
                  </li>
                  <li>
                    <button
                      className="text-lg font-bold"
                      style={{ color: "#2a435d" }}
                    >
                      Journey
                    </button>
                  </li>
                  <li>
                    <button
                      className="text-lg font-bold"
                      style={{ color: "#2a435d" }}
                    >
                      Experience
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-gray-600 text-base px-10 py-4">
                  FoodKhan is Bangladeshi’s own fast food restaurants chain
                  offering Burgers, French fries, Milkshakes, Smoothies and so
                  much more.
                </p>
              </div>
              <div className="flex flex-row gap-30 justify-between">
                <div className="flex flex-row gap-10 items-center justify-between">
                  <h1
                    className="text-5xl font-black text-center"
                    style={{ color: "#CC3333", fontFamily: "Caveat, cursive" }}
                  >
                    John
                  </h1>
                  <p className="text-lg" style={{ color: "#2a435d" }}>
                    Head Of Chef
                  </p>
                </div>
                <button
                  className="text-white bg-[#CC3333] text-xl font-sans px-3 py-3 rounded-lg w-[150px] border-1 border-transparent hover:bg-white transition hover:text-[#CC3333] hover:border-[#CC3333] hover:text-[#CC3333]"
                >
                  All Items
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-[644px] w-full bg-[url('/images/about/transparent1.png')] bg-cover bg-center">
        {/* Black overlay to darken background */}
        <div className="absolute inset-0 bg-black/90"></div>

        {/* Semi-transparent chef image overlay */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[url('/images/about/chef2.webp')] bg-cover bg-center opacity-10"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col lg:flex-row gap-10 px-6 lg:px-12 py-12">
          <div className="w-full lg:w-1/2 mt-14 pt-10 flex flex-col px-4 lg:px-20">
            <h1 className="text-3xl lg:text-5xl font-black leading-snug text-white">
              Fresh State At A Great Price, Only For{" "}
              <span style={{ color: "#EAA64D" }}>Delicious Food Lover.</span>
            </h1>
            <div className="flex flex-row gap-4 lg:gap-6 pt-6 items-center">
              <FaCirclePlay className="text-4xl font-bold bg-white text-red-500 rounded-full p-2" />
              <h2 className="text-lg font-bold" style={{ color: "#EAA64D" }}>
                Intro Video
              </h2>
            </div>
          </div>

          <div className="flex items-center justify-center w-full lg:w-1/2">
            <img
              src="/images/about/1.png"
              alt="image"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#FFFDF6] py-20">
        {/* Heading */}
        <div className="text-center mb-12">
          <h3
            className="text-4xl font-black"
            style={{ color: "#CC3333", fontFamily: "'Caveat', cursive" }}
          >
            Team Member
          </h3>
          <h1
            className="text-5xl font-extrabold tracking-wide mt-2"
            style={{ color: "#2a435d" }}
          >
            Professional <span style={{ color: "#CC3333" }}>Chef</span>
          </h1>
        </div>

        {/* Cards */}
        <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Mathij Sen Deo", img: "/images/about/c1.png" },
            { name: "Malina Weissa", img: "/images/about/c2.png" },
            { name: "Tonmoy Khan", img: "/images/about/c1.png" },
            { name: "Mathja Semo", img: "/images/about/c2.png" },
          ].map((chef, i) => (
            <div
              key={i}
              className="bg-[#FFFDF6] rounded-md shadow-sm border border-gray-200 text-center p-6 hover:bg-white"
            >
              <img
                src={chef.img}
                alt={chef.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h2 className="text-2xl font-bold text-[#2a435d] mb-2">
                {chef.name}
              </h2>
              <p className="text-gray-600 mb-4">
                It is a long established fact that a reader BBQ food Chicken.
              </p>
              <div className="flex justify-center items-center gap-3">
                <span className="font-semibold">Follow :</span>
                <FaFacebookF className="text-gray-600 hover:text-blue-600 cursor-pointer" />
                <FaTwitter className="text-gray-600 hover:text-blue-400 cursor-pointer" />
                <FaInstagram className="text-gray-600 hover:text-pink-500 cursor-pointer" />
                <FaLinkedinIn className="text-gray-600 hover:text-blue-700 cursor-pointer" />
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6">
          <div className="h-2 w-2 bg-red-600 rounded-full mx-1"></div>
          <div className="h-2 w-2 bg-gray-400 rounded-full mx-1"></div>
        </div>
      </section>

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
        <div className="flex flex-row gap-4">
          <img src="/images/home/r1.jpg" alt="image" />
          <img src="/images/home/r2.jpg" alt="image" />
          <img src="/images/home/r3.jpg" alt="image" />
          <img src="/images/home/r5.jpg" alt="image" />
          <img src="/images/home/r4.jpg" alt="image" />
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
  );
};

export default page;
