import React from "react";
import { FaComments } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";


const page = () => {
  return (
    <div>
      <section className="flex flex-col text-black items-center bg-white justify-center py-20 gap-4">
        <h1 className="text-4xl font-black">Blog</h1>
        <h3 className="font-bold">Home / Pages / Blog</h3>
      </section>

      <section className="bg-white p-6 px-10 flex items-center">
        {/* LEFt side */}
        <div className="w-[70%] border-gray-500">
          <div className="flex flex-col px-10">
            <img src="/images/blog/blog1.jpg" alt="img" className="" />

            <div
              style={{ color: "#2a435d" }}
              className="flex flex-row px-8 gap-55"
            >
              <p className="flex flex-row gap-4 items-center pt-4">
                <FaTag />
                Chicken Burger
              </p>
              <p className="flex flex-row gap-4 items-center pt-4">
                <FaRegUserCircle /> Miyako Prince
              </p>
              <p className="flex flex-row gap-4 items-center pt-4">
                <FaComments />
                120+ Comment
              </p>
            </div>

            <h1 style={{ color: "#2a435d" }}>Game day burger with Homemade</h1>
            <p style={{ color: "#2a435d" }}>
              Organization today are in constant flux. Industries are
              consolidating, business models are emerging, new technologies are
              being developed, and consumer behaviors are evolving.
            </p>
            <button style={{ color: "#2a435d" }}>Read More</button>
          </div>
          <div className="flex flex-col px-10">
            <img src="/images/blog/blog2.jpg" alt="img" className="" />

            <div
              style={{ color: "#2a435d" }}
              className="flex flex-row px-8 gap-55"
            >
              <p className="flex flex-row gap-4 items-center pt-4">
                <FaTag />
                Chicken Burger
              </p>
              <p className="flex flex-row gap-4 items-center pt-4">
                <FaRegUserCircle /> Miyako Prince
              </p>
              <p className="flex flex-row gap-4 items-center pt-4">
                <FaComments />
                120+ Comment
              </p>
            </div>

            <h1 style={{ color: "#2a435d" }}>Game day burger with Homemade</h1>
            <p style={{ color: "#2a435d" }}>
              Organization today are in constant flux. Industries are
              consolidating, business models are emerging, new technologies are
              being developed, and consumer behaviors are evolving.
            </p>
            <button style={{ color: "#2a435d" }}>Read More</button>
          </div>
          <div className="flex flex-col px-10">
            <img src="/images/blog/blog3.jpg" alt="img" className="" />

            <div
              style={{ color: "#2a435d" }}
              className="flex flex-row px-8 gap-55"
            >
              <p className="flex flex-row gap-4 items-center pt-4">
                <FaTag />
                Chicken Burger
              </p>
              <p className="flex flex-row gap-4 items-center pt-4">
                <FaRegUserCircle /> Miyako Prince
              </p>
              <p className="flex flex-row gap-4 items-center pt-4">
                <FaComments />
                120+ Comment
              </p>
            </div>

            <h1 style={{ color: "#2a435d" }}>Game day burger with Homemade</h1>
            <p style={{ color: "#2a435d" }}>
              Organization today are in constant flux. Industries are
              consolidating, business models are emerging, new technologies are
              being developed, and consumer behaviors are evolving.
            </p>
            <button style={{ color: "#2a435d" }}>Read More</button>
          </div>
          <div className="flex flex-col px-10">
            <div
              style={{ color: "#2a435d" }}
              className="flex flex-row px-8 gap-55"
            >
              <p className="flex flex-row gap-4 items-center pt-4">
                <FaTag />
                Chicken Burger
              </p>
              <p className="flex flex-row gap-4 items-center pt-4">
                <FaRegUserCircle /> Miyako Prince
              </p>
              <p className="flex flex-row gap-4 items-center pt-4">
                <FaComments />
                120+ Comment
              </p>
            </div>

            <h1 style={{ color: "#2a435d" }}>Game day burger with Homemade</h1>
            <p style={{ color: "#2a435d" }}>
              Organization today are in constant flux. Industries are
              consolidating, business models are emerging, new technologies are
              being developed, and consumer behaviors are evolving.
            </p>
            <button style={{ color: "#2a435d" }}>Read More</button>
          </div>
        </div>

        {/* RIGHT side */}
        <div className="w-[30%] border-gray-500">

          <div className="border-gray-500 h-[200px]">
            <div style={{ color: "#2a435d" }}>
              <img src="/images/blog/user.jpg" alt="Image" />
              <h1>Miyako Prince</h1>
              <p>Hi! I'm author of this post. Read my post, be in trend.</p>
              <div></div>
            </div>
          </div>

          <div>
            <input type="text" placeholder="Search" className="" />
            <button><FaSearch /></button>

          </div>

          <div>
            <h1>Hot Sale Product</h1>
            {[
              
            ]}
          </div>
        </div>

      </section>
    </div>
  );
};

export default page;
