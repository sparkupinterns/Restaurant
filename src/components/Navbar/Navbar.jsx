import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="w-full flex justify-between items-center mx-auto shadow-md bg-[#131313] text-white p-4 px-22 bg-[url('/images/about/transparent1.png')] bg-fit bg-center">
        <div>
          <img
            src="/images/home/logo.png"
            alt="Khadyo Logo"
            className="h-15 w-30"
          />
        </div>

        <div className="pl-8">
          <ul className="flex items-center gap-10 text-medium font-medium ">
            <li className="hover:text-[#CC3333] cursor-pointer transition">
              <Link href="/">HOME</Link>
            </li>
            <li className="hover:text-[#CC3333] cursor-pointer transition">
              <Link href="/about">ABOUT US</Link>
            </li>
            <li className="hover:text-[#CC3333] cursor-pointer transition">
              <Link href="/menu">MENU</Link>
            </li>
            <li className="hover:text-[#CC3333] cursor-pointer transition">
              <Link href="/blog">BLOG</Link>
            </li>
            <li className="hover:text-[#CC3333] cursor-pointer transition">
              <Link href="/contact">CONTACT US</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-8 text-xl h-[52px] w-[300px]">
          <div className="flex gap-6">
            <FaHeart className="border border-white rounded-full p-2 h-10 w-10" />
            <IoMdContact className="border border-white rounded-full p-2 h-10 w-10" />
            <FaShoppingCart className="border border-white rounded-full p-2 h-10 w-10" />
          </div>
          <div>
            <Link href="/login">
              <button className="px-4 py-2 bg-[#CC3333] text-white rounded-lg cursor-pointer h-[52px] w-[129px] border-1 border-transparent rounded-lg hover:bg-[#131313] transition w-[140px] mt-10 hover:text-[#CC3333] hover:border-[#CC3333] hover:text-[#CC3333]">
                Login
              </button>
            </Link>
          </div>
        </div>

       
      </div>
    </div>
  );
}
