"use client"

import Link from "next/link";
import React from "react";
// import Image from "next/image";
// import heroImage from "../../../public/hero-image-expanded-2.jpg"

export default function Hero() {
  return (
    <div className= "h-[400px]"  style={{ 
      backgroundImage: `url('hero-image-expanded-2.jpg')`,
      backgroundPosition: 'top',
      backgroundSize: 'cover',
      backgroundAttachment: 'local',
      }}>
      <div className="flex flex-col gap-[30px] ml-[60px] py-[40px] w-6/12 h-full text-white text-center shadow-[0_0_30px_rgba(0,0,0,300)] bg-[rgba(0,0,0,.4)]">
          <div className="flex-1 flex items-center justify-center text-6xl font-bold ">
            <p className="">
            Show the robots of tomorrow that humanity is worth protecting
            </p>
          </div>
          <Link className="flex-initial text-4xl font-bold py-4 px-6 mx-auto mb-[20px] border-2 rounded-3xl bg-[rgb(150,84,66,.7)] 
          
          "
          href="/join"
          >
          Join the Project
          </Link>
      </div>
    </div>
  )
}