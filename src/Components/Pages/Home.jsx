import React from "react";
import pic from "../Images/myPic2.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="p-5  lf: text-white mt-20 lg:mt-30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={pic}
            alt="Portfolio"
            className="animate-slideRight object-contain w-96 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-3xl"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col animate-slideLeft justify-center p-5">
          <h1 className="text-3xl font-rubikMicrobe text-center lg:text-left font-bold mb-4">
            Hi there..{" "}
          </h1>
          <p className="text-xl font-gruppo text-center lg:text-left mb-4">
            I'm{" "}
            <strong>
              <span className="text-blue-400 font-bold text-2xl">S</span>hiva
              Teja
            </strong>
            , MERN Full Stack Developer.
          </p>

          <p className="text-lg text-center text-justify tracking-tigh lg:text-left">
            I like creating websites and applications. I focus on making my
            projects responsive and user-friendly, ensuring they look great and
            work well on any device. Building reliable and smooth experiences is
            what I enjoy most.
          </p>

          {/* Resume Button */}
          <div className="mt-6 flex  items-center justify-center ">
            <button className="font-bold bg-cta-primary hover:bg-cta-secondary transition-transform duration-500 hover:scale-105 shadow-md px-12 py-2 text-black rounded-md text-white motion-preset-slide-right-lg motion-duration-2000 motion-delay-500 motion-ease-bounce">
              <Link
                to="https://drive.google.com/file/d/1aMzHhcAjKwRMh7pcwvgu9Zn3H4u_VYaz/view?usp=sharing"
                target="_blank"
              >
                My Resume
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
