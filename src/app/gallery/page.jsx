"use client";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import React, { useState } from "react";
import gallery1 from "../assets/Gallery/g-1.jpg";
import gallery2 from "../assets/Gallery/g-2.jpg";
import gallery3 from "../assets/Gallery/g-3.jpg";
import gallery4 from "../assets/Gallery/g-4.jpg";
import gallery5 from "../assets/Gallery/g-5.jpg";
import gallery6 from "../assets/Gallery/g-6.jpg";
import gallery7 from "../assets/Gallery/g-7.jpg";
import gallery8 from "../assets/Gallery/g-8.jpg";
import gallery9 from "../assets/Gallery/g-9.jpg";
import gallery10 from "../assets/Gallery/g-10.jpg";
import gallery11 from "../assets/Gallery/g-11.jpg";
import gallery12 from "../assets/Gallery/g-12.jpg";
import gallery13 from "../assets/Gallery/g-13.jpg";
import gallery14 from "../assets/Gallery/g-14.jpg";
import gallery15 from "../assets/Gallery/g-15.jpg";
import gallery16 from "../assets/Gallery/g-16.jpg";
import gallery17 from "../assets/Gallery/g-17.jpg";
import gallery18 from "../assets/Gallery/g-18.jpg";
import gallery19 from "../assets/Gallery/g-19.jpg";
import gallery20 from "../assets/Gallery/g-20.jpg";

const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
  gallery15,
  gallery16,
  gallery17,
  gallery18,
  gallery19,
  gallery20,
];

const Page = () => {
  const [model, setModel] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setModel(true);
  };

  const Remove = () => {
    setModel(false);
  };

  const ShowImage = () => {
    return (
      <>
        <div className="mid-content" onClick={Remove}>
         <div className=" mt-5 pt-5 text-end mx-5 text-light fw-bold" style={{fontSize: "30px"}}>
         <IoMdClose onClick={Remove} className="mt-5" style={{cursor: "pointer"}} />
         </div>
        </div>
        <div className="container content-gallery">
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              {images.map((image, index) => (
                <div
                  className={`carousel-item ${
                    index === currentIndex ? "active" : ""
                  }`}
                  key={index}
                >
                  <Image
                    src={image}
                    className="d-block w-100 rounded-5 cour-image"
                    height={700}
                    alt="img"
                    style={{ filter: "brightness(82%)", objectFit:"cover" }}
                  />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon icons-g"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon icons-g"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="about">
        <h1>Gallery</h1>
      </div>
      <br />
      <div className="container gallery-content-2">
        <div className="grid">
          {images.map((image, index) => (
            <div
              className="grid-items"
              key={index}
              onClick={() => handleImageClick(index)}
            >
              <Image
                src={image}
                alt={`image-${index + 1}`}
                className="gallery-img"
              />
            </div>
          ))}
        </div>
        <br />
        <br />
        {model && <ShowImage />}
      </div>
    </>
  );
};

export default Page;
