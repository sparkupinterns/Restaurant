import React from "react";
import Testimonial from "../../components/Testimonial";

const page = () => {
  return (
    <div>
      <section className="bg-[#131313] text-white flex flex-col items-center justify-center py-20 gap-4 bg-[url('/images/about/transparent1.png')] bg-fit bg-center">
        <h1 className="text-4xl font-black">Menu Item</h1>
        <h3 className="font-bold">Home / Menu Item</h3>
      </section>

      <section className="bg-gray grid grid-cols-4 gap-2 px-20 pl-10 h-[250px] pl-30 ">
        <div
          className="rounded-sm text-white h-[280px] w-[300px] p-4 gap-3 flex flex-col items-center justify-center mt-[-50px]"
          style={{ backgroundColor: "#2a435d" }}
        >
          <img
            src="/images/menu/menu1.png"
            alt="icon"
            className="w-23 h-23 mb-2"
          />
          <h1 className="text-xl font-normal">Super Fast Delivery</h1>
          <p className="text-sm">Free Delivery In Your Location</p>
          <button className="text-red-500 text-lg rounded-lg hover:transition px-10">
            Order Now
          </button>
        </div>
        <div
          className="mt-[-50px] rounded-sm text-white h-[280px] w-[300px] p-4 gap-3 flex flex-col items-center justify-center"
          style={{ backgroundColor: "#2a435d" }}
        >
          <img
            src="/images/menu/menu2.png"
            alt="icon"
            className="w-23 h-23 mb-2"
          />
          <h1 className="text-xl font-normal">100% Best Quality</h1>
          <p className="text-sm">Free Delivery In Your Location</p>
          <button className="text-red-500 text-lg rounded-lg hover:transition px-10">
            Order Now
          </button>
        </div>
        <div
          className="mt-[-50px] rounded-sm text-white h-[280px] w-[300px] p-4 gap-3 flex flex-col items-center justify-center"
          style={{ backgroundColor: "#2a435d" }}
        >
          <img
            src="/images/menu/menu3.png"
            alt="icon"
            className="w-23 h-23 mb-2"
          />
          <h1 className="text-xl font-nomral">Money Back Gurantee</h1>
          <p className="text-sm">Free Delivery In Your Location</p>
          <button className="text-red-500 text-lg rounded-lg hover:transition px-10">
            Order Now
          </button>
        </div>
        <div
          className="mt-[-50px] rounded-sm text-white h-[280px] w-[300px] p-4 gap-3 flex flex-col items-center justify-center"
          style={{ backgroundColor: "#2a435d" }}
        >
          <img
            src="/images/menu/menu4.png"
            alt="icon"
            className="w-23 h-23 mb-2"
          />
          <h1 className="text-xl font-normal">Delicious Food Menu</h1>
          <p className="text-sm">Free Delivery In Your Location</p>
          <button className="text-red-500 text-lg rounded-lg hover:transition px-10">
            Order Now
          </button>
        </div>
      </section>

      <section className="bg-gray-100 w-full text-black flex items-center justify-center pl-4 h-[800px] pb-10">
        <div className="w-full max-w-[1320px]">
          {/* First */}
          <div className="m-5 pl-10 w-full text-center">
            <h3
              className="text-5xl font-black"
              style={{ color: "#CC3333", fontFamily: " 'Caveat', cursive" }}
            >
              Food Items
            </h3>
            <h1
              className="text-5xl font-black font-sans tracking-wide mt-2"
              style={{ color: "#2a435d" }}
            >
              Chicken <span style={{ color: "#CC3333" }}>Menu</span>
            </h1>
          </div>

          {/* Grid Section */}
          <div className="grid grid-cols-5 gap-8 p-6 px-10">
            {[
              { img: "/images/menu/tc1.png", label: "Spicy Chicken" },
              { img: "/images/menu/tc2.png", label: "Chicken Fry" },
              { img: "/images/menu/tc3.png", label: "Chicken Stick" },
              { img: "/images/menu/tc4.png", label: "Chicken Bites" },
              { img: "/images/menu/tc5.png", label: "Crispy Sticks" },
            ].map((item, index) => (
              <div
                key={index}
                className="font-bold text-xl rounded-sm border border-gray-300 p-3 cursor-pointer text-[#2a435d] hover:text-white hover:bg-[#CC3333] hover:bg-[url('/images/anim/14.png')] bg-no-repeat transition"
              >
                <div className="flex flex-col gap-2 items-center justify-between h-full ">
                  <img src={item.img} alt={item.label} />
                  <h1 className="text-xl font-extrabold ">{item.label}</h1>
                </div>
              </div>
            ))}
          </div>

          {/* Menu Section */}
          <div className="h-[300px] w-[1250px] mx-auto pt-10 w-full flex flex-col items-center justify-center">
            <div className="grid grid-cols-3 gap-8 py-8 w-full px-10">
              <div className="flex items-center justify-between px-6 border border-gray-300 rounded-lg  p-4 shadow-sm">
                <div className="rounded-full">
                  <img src="/images/menu/tc1.png" alt="Tomato" />
                </div>
                <div className="pl-8 text-xl">
                  <h2 className="text-xl font-bold text-[#2a435d] py-2">
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
              <div className="flex items-center justify-between px-6 border border-gray-300 rounded-lg p-4 shadow-sm">
                <img src="/images/menu/tc2.png" alt="Tomato" className="" />
                <div className="pl-8 text-xl">
                  <h2 className="text-xxl font-bold text-[#2a435d] py-2">
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
              <div className="bg-[#669900] text-white row-span-2 px-6 border border-gray-300 p-4 shadow-sm">
                <div className="flex flex-col gap-4">
                  <h1 className="text-3xl font-semibold">Super Combo Burger</h1>
                  <p className="text-lg pb-1">Shrimp, Squid</p>
                  <button className="uppercase cursor-pointer bg-white text-[#669900] px-4 py-2 w-30 text-sm font-medium font-sans rounded-xl border-2 border-transparent hover:bg-[#669900] hover:text-white hover:border-white transition">
                    Order Now
                  </button>
                </div>
                <div className="relative">
                  <img
                    src="/images/menu/chicken.png"
                    alt="image"
                    className="absolute top-6 right-0 w-60"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between px-6 border border-gray-300 rounded-lg p-4 shadow-sm">
                <img
                  src="/images/menu/tc3.png"
                  alt="Tomato"
                  //   className="w-[100px] h-[100px] object-contain"
                />
                <div className="pl-8 text-xl">
                  <h2 className="text-xl font-bold text-[#2a435d] py-2">
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
              <div className="flex items-center justify-between px-6 border border-gray-300 rounded-lg p-4 shadow-sm">
                <img
                  src="/images/menu/tc4.png"
                  alt="Tomato"
                  //   className="w-[100px] h-[100px] object-contain"
                />
                <div className="pl-8 text-xl">
                  <h2 className="text-xl font-bold text-[#2a435d] py-2">
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
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 w-full text-black flex items-center justify-center pl-4 h-[800px] pb-30">
        <div className="w-full max-w-[1320px]">
          {/* First */}
          <div className="m-5 pl-10 w-full text-center">
            <h3
              className="text-5xl font-black"
              style={{ color: "#CC3333", fontFamily: " 'Caveat', cursive" }}
            >
              Food Items
            </h3>
            <h1
              className="text-5xl font-black font-sans tracking-wide mt-2"
              style={{ color: "#2a435d" }}
            >
              Delicious <span style={{ color: "#CC3333" }}>Burger</span>
            </h1>
          </div>

          {/* Grid Section */}
          <div className="grid grid-cols-5 gap-8 p-6">
            {[
              { img: "/images/menu/tc1.png", label: "Spicy Chicken" },
              { img: "/images/menu/tc2.png", label: "Chicken Fry" },
              { img: "/images/menu/tc3.png", label: "Chicken Stick" },
              { img: "/images/menu/tc4.png", label: "Chicken Bites" },
              { img: "/images/menu/tc5.png", label: "Crispy Sticks" },
            ].map((item, index) => (
              <div
                key={index}
                className="font-bold text-xl rounded-sm border border-gray-300 p-4 cursor-pointer text-[#2a435d] hover:text-white hover:bg-[#CC3333] hover:bg-[url('/images/anim/14.png')] bg-no-repeat transition"
              >
                <div className="flex flex-col gap-2 items-center justify-between h-full">
                  <img src={item.img} alt={item.label} className="p-2" />
                  <h1 className="text-xl font-extrabold">{item.label}</h1>
                </div>
              </div>
            ))}
          </div>

          {/* Menu Section */}
          <div className="h-[300px] w-[1250px] mx-auto pt-10 w-full flex flex-col items-center justify-center">
            <div className="grid grid-cols-3 gap-8 py-8 w-full px-10 ">
              <div className="flex items-center justify-between px-6 border border-gray-300 rounded-lg p-4 shadow-sm hover:bg-white hover:border-gray-300 hover:shadow-md transition-all duration-300 ease-in-out cursor-pointer">
                <div className="rounded-full">
                  <img src="/images/menu/tc1.png" alt="Tomato" />
                </div>
                <div className="pl-8 text-xl">
                  <h2 className="text-xl font-bold text-[#2a435d] py-2">
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
              <div className="flex items-center justify-between px-6 border border-gray-300 rounded-lg p-4 shadow-sm hover:bg-white hover:border-gray-300 hover:shadow-md transition-all duration-300 ease-in-out cursor-pointer">
                <img src="/images/menu/tc2.png" alt="Tomato" className="" />
                <div className="pl-8 text-xl">
                  <h2 className="text-xxl font-bold text-[#2a435d] py-2">
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
              <div className="flex items-center justify-between px-6 border border-gray-300 rounded-lg p-4 shadow-sm hover:bg-white hover:border-gray-300 hover:shadow-md transition-all duration-300 ease-in-out cursor-pointer">
                <img src="/images/menu/tc2.png" alt="Tomato" className="" />
                <div className="pl-8 text-xl">
                  <h2 className="text-xxl font-bold text-[#2a435d] py-2">
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
              <div className="flex items-center justify-between px-6 border border-gray-300 rounded-lg p-4 shadow-sm hover:bg-white hover:border-gray-300 hover:shadow-md transition-all duration-300 ease-in-out cursor-pointer">
                <img src="/images/menu/tc2.png" alt="Tomato" className="" />
                <div className="pl-8 text-xl">
                  <h2 className="text-xxl font-bold text-[#2a435d] py-2">
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
              <div className="flex items-center justify-between px-6 border border-gray-300 rounded-lg p-4 shadow-sm hover:bg-white hover:border-gray-300 hover:shadow-md transition-all duration-300 ease-in-out cursor-pointer">
                <img
                  src="/images/menu/tc3.png"
                  alt="Tomato"
                  //   className="w-[100px] h-[100px] object-contain"
                />
                <div className="pl-8 text-xl">
                  <h2 className="text-xl font-bold text-[#2a435d] py-2">
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
              <div className="flex items-center justify-between px-6 border border-gray-300 rounded-lg p-4 shadow-sm hover:bg-white hover:border-gray-300 hover:shadow-md transition-all duration-300 ease-in-out cursor-pointer">
                <img
                  src="/images/menu/tc4.png"
                  alt="Tomato"
                  //   className="w-[100px] h-[100px] object-contain"
                />
                <div className="pl-8 text-xl">
                  <h2 className="text-xl font-bold text-[#2a435d] py-2">
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
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white grid grid-cols-2 gap-6 h-[350px] bg-gray-100 px-30">


        <div className="bg-black text-white h-[270px] relative">
          <img src="/images/anim/bbr.png" alt="image" className="absolute right-0 top-0 z-0 h-35 w-35"/>
          <div className="p-4">
            <h1 className="pt-2 text-4xl font-black">Buzzed Burger</h1>
            <p className="text-sm pt-2">Sales off 50% only this week</p>
            <button
              className="uppercase bg-[#CC3333] text-white text-lg font-semibold font-sans py-2 rounded-lg border-1 border-transparent rounded-lg hover:bg-black transition w-[140px] mt-10 hover:text-[#CC3333] hover:border-white hover:text-white w-[140px] mt-10"

            >
              Order Now
            </button>
          </div>

          <div className="relative">
            <img
              src="/images/g1.png"
              alt="image"
              className="absolute right-0 bottom-[-76] h-[200px] w-[350px]"
            />
          </div>
        </div>


        <div className="bg-[#CC3333] text-white h-[270px] flex flex-row justify-between w-full relative overflow-hidden">
        <img src="/images/anim/bbs.png" alt="image" className="absolute bottom-0 left-0 z-0"/>
          <div className="p-4 relative z-10">
            <h1 className="pt-2 text-3xl font-black">Chicken Combo Burger</h1>
            <p className="text-sm pt-2">Sales off 50% only this week</p>
            <button
              className="uppercase text-[#CC3333] bg-white text-lg font-semibold font-sans py-2 border-1 border-transparent rounded-lg hover:bg-[#CC3333] transition w-[140px] mt-10 hover:text-[#CC3333] hover:border-white hover:text-white"
              
            >
              Order Now
            </button>
          </div>

          <div className="">
            <img src="/images/menu/mg2.png" alt="image" className="mt-15" />
          </div>
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
    </div>
  );
};

export default page;
