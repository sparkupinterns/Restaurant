// "use client";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
"use client";

import dynamic from "next/dynamic";

const page = () => {
  const Map = dynamic(() => import("../../components/Map"), {
    ssr: false,
  });
  return (
    <>
      <div>
        <section className="bg-[#131313] text-white flex flex-col items-center justify-center py-20 gap-4 bg-[url('/images/about/transparent1.png')] bg-fit bg-center">
        <h1 className="text-4xl font-black">Contact</h1>
        <h3 className="font-bold text-lg">Contact Us Page</h3>
      </section>

        <section className="bg-gray-100 flex flex-row px-10 py-15">
          <div className="flex flex-col gap-4 w-[60%] pl-10">
            <div className="flex gap-4">
              <img
                src="/images/home/1.jpg"
                alt="image"
                className="w-[220px] h-[250px] mt-30"
              />
              <img
                src="/images/home/2.jpg"
                alt="image"
                className="w-[450px] h-[370px] object-cover"
              />
            </div>
            <div className="flex gap-4">
              <img
                src="/images/home/3.jpg"
                alt="image"
                className="w-[350px] h-[330px]"
              />
              <img
                src="/images/about/chef.jpg"
                alt="image"
                className="w-[250px] h-[230px]"
              />
            </div>
          </div>

          <div className="bg-white w-[45%] flex flex-col gap-4 p-6 h-[480px] mr-20">
            <div className="">
              <h1
                className="text-4xl gap-4 font-extrabold font-sans tracking-wide "
                style={{ color: "#2a435d" }}
              >
                Write{" "}
                <span
                  className="text-4xl font-extrabold font-sans"
                  style={{ color: "#CC3333" }}
                >
                  To Us
                </span>
              </h1>
            </div>

            <input
              type="text"
              placeholder="Enter Your Name"
              className="p-4 border border-gray-300 text-gray-500 rounded-lg placeholder-gray-500"
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-4 border border-gray-300 text-gray-500 rounded-lg placeholder-gray-500"
            />
            <input
              type="text"
              placeholder="Website"
              className="p-4 border border-gray-300 text-gray-500 rounded-lg placeholder-gray-500"
            />
            <textarea
              cols={4}
              rows={5}
              placeholder="Write Your Text"
              className="p-4 text-gray-500 border border-gray-300 rounded-lg placeholder-gray-500"
            ></textarea>
            <div>
              <button
                className="text-white font-medium px-6 py-3 text-lg rounded-lg hover:bg-red-400 transition w-[230px]"
                style={{ backgroundColor: "#CC3333" }}
              >
                Send A Message
              </button>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-gray-100 flex flex-row gap-10 h-[300px]  px-30 items-center">
            <div className="flex flex-row gap-10 items-center justify-center p-4 border border-gray-300 w-[400px] h-[150px] rounded-lg">
              <img src="/images/contact/c1.png" alt="image" />
              <div style={{ color: "#2a435d" }}>
                <h1 className="text-2xl font-black pb-2">Phone Us 24/7</h1>
                <p>123-5879406</p>
              </div>
            </div>

            <div className="flex flex-row gap-10 items-center justify-center p-4 border border-gray-300 w-[400px] h-[150px] rounded-lg">
              <img src="/images/contact/c2.png" alt="image" />
              <div style={{ color: "#2a435d" }}>
                <h1 className="text-2xl font-black pb-2">Get Direction</h1>
                <p>Sector:7, Road:27, House:18, Uttara, Dhaka, 1230 Dhaka.</p>
              </div>
            </div>

            <div className="flex flex-row gap-10 items-center justify-center p-4 border border-gray-300 w-[400px] h-[150px] rounded-lg">
              <img src="/images/contact/c3.png" alt="image" />
              <div style={{ color: "#2a435d" }}>
                <h1 className="text-2xl font-black pb-2">Opening Hours</h1>
                <p>Everyday 11.00 PM - 11.00 AM</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white ">
          <div className="w-[1300px] h-[500px] p-10 mx-auto">
            <Map />
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
