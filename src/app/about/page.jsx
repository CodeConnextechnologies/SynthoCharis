"use client";
import React from "react";
import Image from "next/image";
import Beaker from "../assets/Beacker.png";
import { MdKeyboardArrowRight, MdOutlineHome } from "react-icons/md";
import Link from "next/link";
// import Footer from "../component/Footer";
const Page = () => {
  return (
    <div className="about_page">
      <div className="about">
      <div className="d-flex flex-column justify-content-end align-items-center mb-5">
          <h3 className="fs-1 text-capitalize mx-5 fw-bolder">About</h3>
          <div>
            <p className="d-flex flex-row justify-content-center align-items-center fw-bolder">
              <Link href="/" className="text-light">
                <MdOutlineHome className="fs-4 my-1" />
              </Link>
              <Link href="/" className="text-decoration-none text-light">
                <span className="fs-6">Home</span>
              </Link>
              <MdKeyboardArrowRight className="fs-4 mt-1" />
              <span className="fs-6">About</span>
            </p>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <h3 style={{ color: "#418E41", fontWeight: "600" }}>Our Story</h3>
        <hr
          style={{
            width: `7%`,
            height: `4px`,
            backgroundColor: `#418E41`,
            opacity: `1`,
            border: `none`,
            borderRadius: `10px`,
          }}
        />
        <p style={{ textAlign: "justify" }}>
          Our Story Syntho Chirals Private Limited (SCPL) was founded in 2008 by
          experienced pharmaceutical professionals. Situated in Bidar,
          Karnataka, near Hyderabad's pharmaceutical hub, SCPL specializes in
          the development and manufacturing of API intermediates and chiral
          compounds. Our core competency lies in producing high-quality,
          reliable intermediates for the pharmaceutical, agrochemical, and
          biotechnology industries.
        </p>
        <div className="row about-row">
          <div className="col-md-6">
            <div>
              <h4 style={{ color: `#418E41`, fontWeight: `600` }}>Mission</h4>
              <p style={{ textAlign: `justify` }}>
                Mission to deliver high-quality chiral intermediates and APIs,
                meeting predefined quality standards and ensuring timely
                delivery, while maintaining a commitment to environmental
                sustainability and regulatory compliance.
              </p>
            </div>
            <br />
            <div>
              <h4 style={{ color: `#418E41`, fontWeight: `600` }}>Milstone</h4>
              <p style={{ textAlign: `justify` }}>
                It's  seems like you're referring to "Syntho Chirals" and a
                milestone related to it. Syntho Chirals is a company or concept
                likely related to chiral chemistry or the synthesis of chiral
                compounds, which are essential in fields like pharmaceuticals,
                where the chirality of a molecule can significantly affect its
                biological activity
              </p>
            </div>
            <br />
            <div>
              <h4 style={{ color: `#418E41`, fontWeight: `600` }}>Vission</h4>
              <p style={{ textAlign: `justify` }}>
                Vision to be a global leader in chiral chemistry, known for
                innovation, reliability, and quality, continuously exceeding
                customer expectations and contributing to advancements in
                pharmaceutical and chemical research.
              </p>
            </div>

            <br />
            <div>
              <h4 style={{ color: `#418E41`, fontWeight: `600` }}>
                Our Values
              </h4>
              <div>
                <ul>
                  <li>
                    <b>Innovation : </b>
                    <span>
                      Continually pushing the boundaries of chiral chemistry.
                    </span>
                  </li>
                  <li>
                    <b>Quality : </b>
                    <span>
                      Ensuring the highest standards in every product.
                    </span>
                  </li>
                  <li>
                    <b>Reliability : </b>
                    <span>
                      Consistently meeting and exceeding customer expectations.
                    </span>
                  </li>
                  <li>
                    <b>Sustainability : </b>
                    <span>
                      Adopting eco-friendly and compliant manufacturing
                      practices.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 Beaker_cover mt-2">
            <Image src={Beaker} className="beaker" alt={`image`} />
          </div>
        </div>
        <br />
        <h3 style={{ color: `#418E41`, fontWeight: `600` }}>
          Our Core Competencies
        </h3>
        <hr
          style={{
            width: `7%`,
            height: `4px`,
            backgroundColor: "#418E41",
            opacity: `1`,
            border: `none`,
            borderRadius: `10px`,
          }}
        />
        <ul style={{ textAlign: `justify` }}>
          <li>
            <b>High-Quality Production : </b>
            <span>
              Our expertise in chiral intermediates and APIs has positioned us
              as a trusted partner in the industry. We pride ourselves on
              delivering products with predefined quality attributes and
              reliable, timely delivery.
            </span>
          </li>
          <li>
            <b>Sustainability and Compliance : </b>
            <span>
              We are committed to sustainable practices, with our trade effluent
              being treated by a Forced Evaporation System. Certification work
              for ISO 9001:2008, WHO GMP, ISO 14001:2004, and OHSAS 18001:2007
              standards is ongoing.
            </span>
          </li>
        </ul>
      </div>

      {/* leadership page */}
      <div className="container">
        <div className="d-grid justify-content-cener align-items-center">
          <h2
            className="text-center "
            style={{ color: `#418E41`, fontWeight: `600` }}
          >
            Our Leadership
          </h2>
        </div>

        <div className="row about-row leader">
          <div className="col-md-3 col-sm-6"></div>
          <div className="col-md-3 col-sm-6"></div>
          <div className="col-md-3 col-sm-6"></div>
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
        </div>
        <br />
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Page;
