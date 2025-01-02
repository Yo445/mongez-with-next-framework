import React from "react";

const NotFound = () => {
  return (
    <main className="flex items-center justify-center w-full min-h-screen py-8 text-gray-900 page md:py-16 ">
      <div className="relative flex flex-col items-center w-full gap-8 px-8 md:px-18 xl:px-40 md:gap-16">
        <h1 className="text-9xl md:text-[300px] w-full select-none  text-center font-black text-gray-400">
          404
        </h1>
        <p className="text-3xl font-bold capitalize">This page Not Found</p>
      </div>
    </main>
  );
};

export default NotFound;
