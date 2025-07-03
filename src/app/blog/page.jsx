import React from "react";
import {
  FaComments,
  FaTag,
  FaRegUserCircle,
  FaSearch,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
} from "react-icons/fa";

const Page = () => {
  const hotSaleProduct = [
    {
      id: 1,
      name: "Chicken Fry Recipe",
      price: "$10.00",
      image: "/images/blog/pd4.png",
    },
    {
      id: 2,
      name: "Chicken Soup Rejala",
      price: "$20.00",
      image: "/images/blog/pd6.png",
    },
    {
      id: 3,
      name: "The Best Black Frame",
      price: "$80.00",
      image: "/images/blog/pd7.png",
    },
    {
      id: 4,
      name: "Chicken Fry Recipe",
      price: "$10.00",
      image: "/images/blog/pd8.png",
    },
  ];

  const tags = [
    "Bbq",
    "Tikka",
    "Pizza",
    "Chicken Sharma",
    "Garlic Burger",
    "Sandwich",
    "Chicken Soup",
  ];

  const filterMenu = [
    { id: 1, name: "Burger Food", count: 20, image: "/images/blog/fm1.png" },
    { id: 2, name: "Chicken Fry", count: 50, image: "/images/blog/fm2.png" },
    { id: 3, name: "Pizza", count: 20, image: "/images/blog/fm3.png" },
    { id: 4, name: "Chicken Fry", count: 50, image: "/images/blog/fm4.png" },
  ];

  return (
    <div>
      <section className="box-border flex flex-col text-black items-center bg-white justify-center py-20 gap-4">
        <h1 className="text-4xl font-black">Blog</h1>
        <h3 className="font-bold">Home / Pages / Blog</h3>
      </section>

      <section className="bg-white p-6 px-25 flex">
        {/* LEFT side */}
        <div className="w-[75%] border-gray-500">
          {[1, 2, 3].map((_, idx) => (
            <div key={idx} className="flex flex-col px-10 mb-10">
              <img src={`/images/blog/blog${idx + 1}.jpg`} alt="img" />

              <div className="flex flex-row px-8 gap-55 text-[#2a435d]">
                <p className="flex gap-2 items-center pt-4">
                  <FaTag /> Chicken Burger
                </p>
                <p className="flex gap-2 items-center pt-4">
                  <FaRegUserCircle /> Miyako Prince
                </p>
                <p className="flex gap-2 items-center pt-4">
                  <FaComments /> 120+ Comment
                </p>
              </div>

              <h1 className="text-3xl py-4 font-extrabold text-[#2a435d] mt-4">
                Game day burger with Homemade
              </h1>
              <p className="text-[#2a435d]">
                Organization today are in constant flux. Industries are
                consolidating, business models are emerging, new technologies
                are being developed, and consumer behaviors are evolving.
              </p>
              <button
                className="text-white text-xl font-bold font-sans px-6 py-3 rounded-lg hover:bg-red-500 transition w-[180px] mt-10"
                style={{ backgroundColor: "#2a435d" }}
              >
                Read More
              </button>
            </div>
          ))}
        </div>

        {/* RIGHT side */}
        <div className="w-[25%] px-4 space-y-8 text-[#2a435d]">
          {/* Author */}
          <div className="border border-gray-300 rounded-lg flex flex-col items-center justify-center p-4 py-6 gap-4">
            <img
              src="/images/blog/user.jpg"
              alt="Image"
              className="w-32 h-32 rounded-full object-cover"
            />
            <h1 className="text-2xl font-bold">Miyako Prince</h1>
            <p className="text-medium text-center">
              Hi! I'm author of this post. Read my post, be in trend.
            </p>
            <div className="flex gap-4 text-lg py-2">
              <FaFacebookF /> <FaInstagram /> <FaLinkedin /> <FaTwitter />
            </div>
          </div>

          {/* Search */}
          <div className="flex items-center border border-gray-300 rounded-lg px-2">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 outline-none pl-2"
            />
            <button className="bg-red-600 rounded-lg text-white px-8 py-2">
              <FaSearch />
            </button>
          </div>

          {/* Hot Sale Products */}
          <div className="bg-white p-4 border border-gray-300 rounded-lg py-8">
            <h2 className="text-2xl font-semibold mb-4 flex flex-col items-center">
              Hot Sale Products
            </h2>
            {hotSaleProduct.map((product) => (
              <div key={product.id} className="flex items-center gap-4 mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-sm font-bold">{product.name}</h3>
                  <p className="text-lg text-gray-600 font-bold">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div>
            <h1 className="text-2xl font-bold mb-4">Tags.</h1>
            <ul className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <li
                  key={index}
                  className="border border-gray-300 rounded-lg px-3 py-1 hover:bg-[#2a435d] hover:text-white transition cursor-pointer"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          {/* Filter By Menu */}
          <div className="border border-gray-300 rounded-lg p-4 py-8">
            <h2 className="text-xl font-bold mb-4">Filter By Menu</h2>
            <ul className="space-y-3">
              {filterMenu.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between pb-2"
                >
                  <div className="flex items-center gap-5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="font-bold">{item.name}</span>
                  </div>
                  <span className="font-bold pr-6">{item.count}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-red-500 border border-gray-300 rounded-lg p-4 relative overflow-hidden">
            <div className="">
              <h1 className="text-2xl font-bold pt-2 text-white">
                Super Combo Burger
              </h1>
              <button className="uppercase text-red-500 bg-white text-lg font-semibold font-sans py-2 rounded-lg hover:transition w-[140px] mt-6">
                Order Now
              </button>
            </div>

            <div className="">
              <img
                src="/images/g3.png"
                alt="image"
                className="h-[340px] w-[280px] object-cover mt-4"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
