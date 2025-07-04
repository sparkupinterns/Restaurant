export default function Footer() {
    return(
        <div className="bg-black h-[466px] w-full">
            <div className="flex flex-row justify-between items-center p-8 m-6 mt-0 px-18">
                <img src="/images/home/logo.png" alt="Image"/>
                <h1 className="text-4xl font-semibold">Feel Hunger! Order Your <span className="text-yellow-500">Like Food</span></h1>
                <button className="bg-red-700 text-white text-xl font-medium rounded-lg p-3 px-10">Order Now</button>
            </div>
            <hr className="border-t border-dotted border-green-400 my-4" />
            <div className="flex flex-row items-center justify-between px-4 p-8 m-4">
                <div className="px-8">
                    <h1 className="text-3xl font-bold pb-6">Address</h1>
                    <p className="text-lg pb-8">570 8th Ave, New York, NY 10018 <br />United States</p>
                    <h4 className="text-2xl text-yellow-500">View Google Map</h4>
                </div>
                <div className="px-8">
                    <h1 className="text-3xl font-bold pb-6">Book A Table</h1>
                    <p className="text-lg pb-8">Dogfood och Sliders foodtruck. Under Om oss kan ni läsa</p>
                    <h4 className="text-2xl text-yellow-500">Make a call</h4>
                </div>
                <div className="px-8">
                    <h1 className="text-3xl font-bold pb-6">Opening Hours</h1>
                    <p className="text-lg pb-8">Monday-Friday: 8am - 4pm Saturday: 9am - 5pm</p>
                    <h4 className="text-2xl text-yellow-500">Make a call</h4>
                </div>
                <div className="px-8">
                    <h1 className="text-3xl font-bold pb-6"> Newsletter</h1>
                    <input type="email" placeholder="Enter Your Email" className="text-lg pb-8  "/>
                    {/* <button>
                        <img src="" alt="" />
                    </button> */}
                    <h4 className="text-2xl text-yellow-500">Subscribe Now</h4>
                </div>
            </div>
            <div className="text-xl font-bold flex items-center justify-center pb-8">
                <p>Copyright @ 2021 <span className="text-yellow-500">Khadyo</span></p>
            </div>
        </div>
    )
}

