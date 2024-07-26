"use client";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
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
import gallery21 from "../assets/Gallery/g-21.jpg";
import { MdOutlineHome } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

const images = [
  gallery21,
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const thumbnailRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    afterChange: (current) => scrollToThumbnail(current),
  };

  const handleThumbnailClick = (index) => {
    setCurrentSlide(index);
    sliderRef.current.slickGoTo(index);
    scrollToThumbnail(index);
  };

  const scrollToThumbnail = (index) => {
    const thumbnailContainer = thumbnailRef.current;
    const thumbnailElement = thumbnailContainer.children[index];
    const containerWidth = thumbnailContainer.clientWidth;
    const thumbnailWidth = thumbnailElement.clientWidth;
    const scrollPosition =
      thumbnailElement.offsetLeft - containerWidth / 2 + thumbnailWidth / 2;
    thumbnailContainer.scrollTo({ left: scrollPosition, behavior: "smooth" });
  };

  return (
    <>
      <div className="about">
        <div className="d-flex flex-column justify-content-end align-items-center mb-5">
          <h3 className="fs-1 text-capitalize mx-5 fw-bolder">Gallery</h3>
          <div>
            <p className="d-flex flex-row justify-content-center align-items-center fw-bolder">
              <Link href="/" className="text-light">
                <MdOutlineHome className="fs-4 my-1" />
              </Link>
              <Link href="/" className="text-decoration-none text-light">
                <span className="fs-6">Home</span>
              </Link>
              <MdKeyboardArrowRight className="fs-4 mt-1" />
              <span className="fs-6">Gallery</span>
            </p>
          </div>
        </div>
      </div>
      <div
        className="slider-container container mx-auto"
        style={{ padding: "10px" }}
      >
        <Slider ref={sliderRef} {...settings}>
          {images.map((url, index) => (
            <div
              key={index}
              style={{
                padding: "10px",
                // borderRadius: "20px",
                position: "relative"
              }}
            >
             <div style={{padding:"10px"}}>
             <Image
                src={url}
                alt={`Slide ${index + 1}`}
                // style={{
                //   width: "100%",
                //   maxHeight: "500px",
                //   border: "3px solid green",
                //   borderBottomLeftRadius: "30px",
                //   borderTopLeftRadius: "100px",
                //   borderBottomRightRadius: "100px",
                //   borderTopRightRadius: "30px",
                //   filter: "brightness(80%)",
                //   objectFit: "cover",
                // }}
                className="g-img"
              />
             </div>
             <div>
             </div>
            </div>
          ))}
        </Slider>
        <div
          className="thumbnail-container container-fluid"
          ref={thumbnailRef}
          style={{
            display: "flex",
            justifyContent: "start",
            marginTop: "20px",
            overflowX: "auto",
            whiteSpace: "nowrap",
          }}
        >
          {images.map((url, index) => (
            <div
              key={index}
              style={{
                margin: "3.5px",
                cursor: "pointer",
                display: "inline-block",
              }}
              onClick={() => handleThumbnailClick(index)}
            >
              <Image
                src={url}
                alt={`Thumbnail ${index + 1}`}
                style={{
                  border: currentSlide === index ? "3px solid green" : "none",
                }}
                className="image-fluid thumbline-image"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
