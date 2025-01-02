"use client";

import Image from "next/image";
import wallpaper from "../assets/imgs/golden_wallpaper.jpg";
import TickerFeed from "@/components/custom/TickerFeed";
import { Services } from "@/data/services-data";
import SerCard from "@/components/custom/SerCard";

export default function Home() {
  console.log("Home component rendered");

  console.log(Services, "services");
  console.log(Services?.services, "services array");

  return (
    <>
      <div className="relative bg-cover bg-center h-[23em]">
        <div className="absolute inset-0 bg-cover bg-center h-full">
          <Image
            src={wallpaper}
            alt="background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="relative flex items-center justify-center h-full px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="text-center">
            <h2 className="mb-6 font-sans text-3xl sm:text-4xl font-semibold tracking-tight text-[#f4ebdc] sm:leading-none">
            </h2>
            <p className="mb-6 text-base text-[#d7d0c2] md:text-l">
            </p>
          </div>
        </div>
      </div>
      <TickerFeed />
      <div className="w-full mb-12">
        <div className="mt-12 text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">List of Services</h2>
        </div>
        <div className="grid gap-3 md:grid-cols-5 md:gap-5 mt-3 m-10">
          <div className="grid gap-3 md:grid-cols-5 md:gap-5 mt-3 m-10">
            {Array.isArray(Services.services) &&
              Services.services.map((service) => (
                <SerCard
                  key={service.id}
                  initialTitle={service.title}
                  link={service.link}
                  icon={service.icon}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
