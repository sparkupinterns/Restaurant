"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    Image: "/images/home/testi1.png",
    name: "Christ Deo",
    title: "CEO A4TECH ltd.",
    quote:
      "Food Khan is a great Restaurant from the University of Texas Austin has been researching the benefits of frequent testing and the feedback leads to improvement.",
  },
  {
    Image: "/images/home/testi1.png",
    name: "John Cena",
    title: "CEO A4TECH ltd.",
    quote:
      "Food Khan is a great Restaurant from the University of Texas Austin has been researching the benefits of frequent testing and the feedback leads to improvement.",
  },
  {
    Image: "/images/home/testi1.png",
    name: "Christ Deo",
    title: "CEO A4TECH ltd.",
    quote:
      "Food Khan is a great Restaurant from the University of Texas Austin has been researching the benefits of frequent testing and the feedback leads to improvement.",
  },
  {
    Image: "/images/home/testi1.png",
    name: "John Cena",
    title: "CEO A4TECH ltd.",
    quote:
      "Food Khan is a great Restaurant from the University of Texas Austin has been researching the benefits of frequent testing and the feedback leads to improvement.",
  },
  {
    Image: "/images/home/testi1.png",
    name: "Christ Deo",
    title: "CEO A4TECH ltd.",
    quote:
      "Food Khan is a great Restaurant from the University of Texas Austin has been researching the benefits of frequent testing and the feedback leads to improvement.",
  },
  {
    Image: "/images/home/testi1.png",
    name: "John Cena",
    title: "CEO A4TECH ltd.",
    quote:
      "Food Khan is a great Restaurant from the University of Texas Austin has been researching the benefits of frequent testing and the feedback leads to improvement.",
  },
];

const chunkArray = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
    arr.slice(index * size, index * size + size)
  );

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = chunkArray(testimonials, 2);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto py-10 px-4 relative">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition z-10"
      >
        <FaChevronLeft className="text-green-800 w-5 h-5" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition z-10"
      >
        <FaChevronRight className="text-green-800 w-5 h-5" />
      </button>

      {/* Slider */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="grid grid-cols-2 gap-6 flex-shrink-0 w-full px-4"
            >
              {slide.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-md px-6 py-6 h-[280px] flex flex-col justify-between"
                >
                  <div className="flex gap-4 items-center">
                    <img
                      src={item.Image}
                      alt={item.name}
                      className="w-[80px] h-[80px] rounded-2xl object-cover"
                    />
                    <div>
                      <h2 className="text-lg font-bold text-gray-800">
                        {item.name}
                      </h2>
                      <p className="text-sm text-gray-500">{item.title}</p>
                    </div>
                  </div>
                  <p className="pt-4 text-gray-600 text-[15px] leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
