import Head from "next/head";


export default function Page() {
  return (
    <>
      <div className="">
        <section className="h-[750px] text-white bg-black">
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
                  <div className="border border-dotted p-3 rounded-l-xl">
                    Buy One. Get One
                  </div>
                  <div className="bg-red-600 p-4 text-white font-semibold font-sans ">
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

        <section className="bg-white h-[436px] w-full text-black items-center justify-center flex flex-col p-4">
          <div className="one my-5 p-5">
            <h3 className="text-4xl font-[var(--font-caveat)] text-red-600 text-center">Online Booking</h3>
            <h1 className="text-5xl gap-4 text-black font-extrabold font-sans tracking-wide ">
              Table <span className="text-5xl text-red-500 font-extraibold font-sans">Booking</span>
            </h1>
          </div>

          <div className="two flex flex-row gap-8 text-2xl">

            <div className="drop border p-4 w-[300px] rounded-lg flex items-center justify-center">
              <select id="food" name="food">
                <option value="4">4 Poeple</option>
                <option value="3">3 Poeple</option>
                <option value="2">2 Poeple</option>
                <option value="1">1 Poeple</option>
              </select>
            </div>

            <div className="dateeee border p-4 w-[300px] rounded-lg"> 
              <input type="date" id="dob" name="dob" />
            </div>

           <div className="drop border p-4 w-[300px] rounded-lg">
              <select id="food" name="food">
                <option value="4">07:24 PM</option>
                <option value="3">07:24 PM</option>
                <option value="2">07:24 PM</option>
                <option value="1">07:24 PM</option>
              </select>
            </div>

            <div className="btn items-center  rounded-lg">
              <button className="bg-red-700 text-white font-sans  px-6 py-3 rounded-lg hover:bg-red-500 transition w-[200px]">Find Table</button>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}
