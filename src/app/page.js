"use client";
import Image from "next/image";
import React from "react";
import img from "./assets/image2.jpg";

export default function page() {
  return (
    <div>
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <Image
          src={img}
          className="image-2"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}
