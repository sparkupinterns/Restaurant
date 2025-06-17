import Head from "next/head";

export default function Page() {
  return (
    <>
      <div className="">
        <section className="h-[750px] text-white bg-black box-sizing: border-box">
          <div className="grid grid-cols-2 items-center justify-center gap-10 mt-10 ">
            <div className="flex flex-col text-2xl items-center mt-25 justify-between ">
              <div>
                <div className="text-5xl gap-4 text-white font-extrabold font-sans tracking-wide h-[100px] w-[456px] mb-8 ">
                  ENJOY OUR DELICIOUS{" "}
                  <span className="text-5xl text-yellow-500 font-extraibold font-sans">
                    FOOD
                  </span>
                </div>

                <div className="text-3xl font-bold leading-tight flex flex-row my-8 items-center font-sans ">
                  <div className="border border-dotted border-r-0 p-3 rounded-l-xl">
                    Buy One. Get One
                  </div>
                  <div className="bg-red-600 p-3 text-white font-semibold font-sans ">
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
                  <div className=" flex items-center gap-4 my-8">
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
                      <button className="bg-red-700 text-white font-sans  px-6 py-3 rounded-lg hover:bg-red-500 transition w-[200px]">
                        Try it Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[450px] flex-shrink-0">
              <img
                src="/images/home/pizza.png"
                alt="Pizza"
                className="ml-10 mt-10"
              />
            </div>
          </div>
        </section>

        <section className="bg-gray-100 h-[436px] w-full text-black items-center justify-center flex flex-col p-4">
          <div className="my-5 p-5">
            <h3 className="text-4xl font-[var(--font-caveat)] text-center" style={{ color: "#CC3333" }}>
              Online Booking
            </h3>{" "}
            <h1 className="text-5xl gap-4 font-extrabold font-sans tracking-wide " style={{ color: "#2a435d" }}>
              Table{" "}
              <span className="text-5xl font-extrabold font-sans" style={{ color: "#CC3333" }}>
                Booking
              </span>
            </h1>
          </div>

          <div className="flex flex-row gap-8 text-2xl">
            <div className="border p-4 w-[300px] rounded-lg flex items-center justify-center">
              <select id="food" name="food" className="border-none w-full">
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
                className="border-none w-full"
              />
            </div>

            <div className="border p-4 w-[300px] rounded-lg">
              <select id="food" name="food" className="border-none w-full">
                <option value="4">07:24 PM</option>
                <option value="3">07:24 PM</option>
                <option value="2">07:24 PM</option>
                <option value="1">07:24 PM</option>
              </select>
            </div>

            <div className="items-center">
              <button className="text-white font-sans px-6 py-4 hover:bg-red-500 transition w-[200px]" style={{ backgroundColor: "#CC3333" }}>
                Find Table
              </button>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 w-full text-black flex items-center justify-center p-4 h-[727px]">
          <div className="flex w-[1320px] ">
            {/* Left Side */}
            <div className="flex flex-col gap-4 w-[50%] pl-10">
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
            <div className="w-[50%] flex flex-col justify-center font-sans">
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

        <section className="bg-gray-100 w-full text-black flex justify-center p-4 h-[1316px] p-4">
          <div>
            {/* First */}
            <div className="m-5 py-20 w-full">
              <h3 className="text-4xl font-[var(--font-caveat)] text-center" style={{ color: "#CC3333" }}>
                Food Items
              </h3>{" "}
              <h1 className="text-5xl gap-4 font-extrabold font-sans tracking-wide" style={{ color: "#2a435d" }}>
                Popular{" "}
                <span className="text-5xl font-extrabold font-sans" style={{ color: "#CC3333" }}>
                  Menu
                </span>
              </h1>
            </div>
            {/* Second */}
              
            {/* Third */}
          </div>

        </section>
      </div>
    </>
  );
}
