"use client";

import React from "react";

export default function Jumbotron() {
  // Static image URL from the public folder
  const image = "/imagess/imagess02.jpg"; // Only one image

  return (
    <div className="relative bg-gray-100 shadow-md rounded-lg overflow-hidden mb-8">
      {/* Single Image Display */}
      <div className="w-full h-64 relative">
        <img
          src="/imagess/imagess02.jpg"
          alt="Jumbotron Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay Text */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">ImageBase Shop</h1>
      </div>
    </div>
  );
}
