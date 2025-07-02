import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-between items-center px-6 py-4 shadow-md bg-black text-white p-4 m-4">
      
      <div className="one">
        <img src="/images/home/logo.png" alt="Khadyo Logo" className="h-12 w-auto " />
      </div>

      
      <div className="two ">
        <ul className="flex items-center gap-8 text-base font-medium">
          <li className="flex items-center gap-1">
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/about">ABOUT US</Link>
          </li>
          <li>
            <Link href="/menu">MENU</Link>
          </li>
          <li className="flex items-center gap-1">
            <Link href="/blog">BLOG</Link>
          </li>
          <li className="flex items-center gap-1">
            <Link href="/page">PAGES</Link>
          </li>
          <li>
            <Link href="/contact">CONTACT US</Link>
          </li>
        </ul>
      </div>

      
      <div className="three flex items-center gap-6 text-xl h-[52px] w-[229px]">
        <div className="logos flex gap-4">
          <FaHeart />
          <IoMdContact />
          <FaShoppingCart />
        </div>
        <div className="btn ">
          <button className="px-4 py-2 bg-red-700 text-white rounded hover:bg-red-500 transition h-[52px] w-[129px]">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
