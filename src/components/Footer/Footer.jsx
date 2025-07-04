export default function Footer() {
  return (
    <div className="bg-black w-full">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center p-8 px-10">
        <img src="/images/home/logo.png" alt="Khadyo Logo" className="h-16 w-auto mb-6 md:mb-0" />
        <h1 className="text-3xl md:text-4xl font-semibold text-center md:text-left text-white">
          Feel Hunger! Order Your <span className="text-yellow-500">Like Food</span>
        </h1>
        <button className="bg-[#CC3333] text-white text-xl font-medium rounded-lg px-10 py-3 cursor-pointer transition hover:bg-[#990000] mt-6 md:mt-0">
          Order Now
        </button>
      </div>

      <hr className="border-t border-dotted border-green-400 my-4" />

      {/* Middle Section */}
      <div className="pr-6 grid grid-cols-1 md:grid-cols-4 gap-8 px-22 py-8 text-white">
        <div>
          <h1 className="text-2xl font-bold pb-4">Address</h1>
          <p className="text-lg pb-4">
            570 8th Ave, New York, NY 10018 <br /> United States
          </p>
          <h4 className="text-xl text-yellow-500 cursor-pointer">View Google Map</h4>
        </div>

        <div>
          <h1 className="text-2xl font-bold pb-4">Book A Table</h1>
          <p className="text-lg pb-4">
            Dogfood och Sliders foodtruck. Under Om oss kan ni läsa
          </p>
          <h4 className="text-xl text-yellow-500 cursor-pointer">Make a call</h4>
        </div>

        <div>
          <h1 className="text-2xl font-bold pb-4">Opening Hours</h1>
          <p className="text-lg pb-4">
            Monday-Friday: 8am - 4pm <br /> Saturday: 9am - 5pm
          </p>
          <h4 className="text-xl text-yellow-500 cursor-pointer">Make a call</h4>
        </div>

        <div>
          <h1 className="text-2xl font-bold pb-4">Newsletter</h1>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="p-3 rounded-lg text-black mb-4 placeholder-gray-500 w-50 border border-white"
          />
          <h4 className="text-xl text-yellow-500 cursor-pointer">Subscribe Now</h4>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-white text-lg font-bold py-4">
        <p>
          Copyright @ 2021 <span className="text-yellow-500">Khadyo</span>
        </p>
      </div>
    </div>
  );
}
