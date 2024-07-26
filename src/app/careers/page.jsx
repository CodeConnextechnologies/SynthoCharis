import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight, MdOutlineHome } from "react-icons/md";

export default function page() {
  return (
    <>
      <div className="about">
        <div className="d-flex flex-column justify-content-end align-items-center mb-5">
          <h3
            className="fs-1 text-capitalize mx-5 fw-bolder"
            style={{ letterSpacing: "2px" }}
          >
            Careers
          </h3>
          <div>
            <p className="d-flex flex-row justify-content-center align-items-center fw-bolder">
              <Link href="/" className="text-light">
                <MdOutlineHome className="fs-4 my-1" />
              </Link>
              <Link href="/" className="text-decoration-none text-light">
                <span className="fs-6">Home</span>
              </Link>
              <MdKeyboardArrowRight className="fs-4 mt-1" />
              <span className="fs-6">Careers</span>
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="p-2 mb-4"
              style={{
                backgroundColor: "#418E41",
                width: "100%",
                height: "60px",
                textAlign: "center",
                borderTopLeftRadius: "50px",
                borderBottomRightRadius: "50px",
                boxShadow:
                  "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
              }}
            >
              <h2 className="text-light fw-bold p-1">Job Opporunities</h2>
            </div>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item shadow">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button text-success fw-bolder fs-5"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Clincal Research
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show p-4"
                  data-bs-parent="#accordionExample"
                >
                  {/* <div
                    style={{
                      backgroundColor: "#418E41",
                      padding: "5px",
                      color: "#fff",
                      borderTopLeftRadius: "100px",
                      borderBottomRightRadius: "100px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                    }}
                  >
                    <div className="d-flex flex-row justify-content-evenly align-items-center my-2">
                      <h4 className="fs-6">Job Title:Clinical Reasearch</h4>
                      <h4 className="fs-6">Job Type:Full time</h4>
                    </div>
                    <div className="d-flex flex-row justify-content-evenly align-items-center my-2">
                      <h4 className="fs-6">Apply:careers@syntho.com</h4>
                      <h4 className="fs-6">Vacancy:Available</h4>
                    </div>
                  </div> */}

                  <div
                    className="accordion-body"
                    style={{
                      // border: "4px solid green",
                      // borderTopLeftRadius: "90px",
                      // borderBottomRightRadius: "90px",
                    }}
                  >
                    <strong>Job Overview</strong> It Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Magni, aliquid facilis debitis
                    accusantium, totam ipsum iure, enim placeat deleniti at
                    error impedit quibusdam. Pariatur praesentium consequatur
                    vel maxime amet minima? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Magni, aliquid facilis debitis
                    accusantium, totam ipsum iure, enim placeat deleniti at
                    error impedit quibusdam. Pariatur praesentium otam ipsum
                    iure, enim placeat deleniti at error impedit quibusdam.
                    Pariatur praesentium consequatur vel maxime amet
                    minima?............
                    <ul>
                      <li className="">Study Management:</li>
                      <li className="ms-5 my-2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Dicta veritatis officia voluptas consequatur
                        repudiandae, nobis recusandae eveniet placeat
                      </li>
                      <li className="ms-5 my-2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Dicta veritatis officia voluptas consequatur
                        repudiandae, nobis recusandae eveniet placeat <br />{" "}
                        (veritatis officia voluptas consequatur repudiandae,
                        nobis recusandae eveniet placeat)
                      </li>
                      <li className="ms-5 mt-2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Dicta veritatis officia voluptas <br />{" "}
                        consequatur repudiandae, nobis recusandae eveniet
                        placeat
                      </li>
                      <li className="">Site Montoring:</li>
                      <li className="ms-5 my-2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Dicta veritatis officia voluptas(GCP) consequatur
                        repudiandae, nobis recusandae eveniet placeat
                      </li>
                      <li className="ms-5 my-2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Dicta veritatis officia voluptas consequatur
                        repudiandae,
                        <br />
                        (veritatis officia voluptas consequatur repudiandae,)
                        nobis recusandae eveniet placeat
                      </li>
                      <li className="ms-5 my-2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Dicta veritatis officia voluptas consequatur
                        repudiandae, nobis recusandae eveniet placeat, <br />
                        (Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. nobis recusandae eveniet placeat)
                      </li>
                    </ul>
                    <div className="mt-5 text-center">
                      <button
                        className=""
                        style={{
                          width: "130px",
                          height: "35px",
                          backgroundColor: "#418E41",
                          border: "none",
                          borderTopLeftRadius: "20px",
                          borderBottomRightRadius: "20px",
                          color: "#fff",
                          fontWeight: "bold",
                          boxShadow:
                            "rgba(0, 0, 0, 0.3) 0px 13px 50px, rgba(0, 0, 0, 0.22) 0px 5px 5px",
                        }}
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item shadow">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed text-success fw-bolder fs-5"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Medical Affairs
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse p-4"
                  data-bs-parent="#accordionExample"
                >

                  <div
                    className="accordion-body"
                  >
                    <strong>Job Overview</strong> It Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Magni, aliquid facilis debitis
                    accusantium, totam ipsum iure, enim placeat deleniti at
                    error impedit quibusdam. Pariatur praesentium consequatur
                    vel maxime amet minima? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Magni, aliquid facilis debitis
                    accusantium, totam ipsum iure, enim placeat deleniti at
                    error impedit quibusdam. Pariatur praesentium otam ipsum
                    iure, enim placeat deleniti at error impedit quibusdam.
                    Pariatur praesentium consequatur vel maxime amet
                    minima?............
                    <ul>
                      <li className="">Study Management:</li>
                      <li className="ms-5 my-2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Dicta veritatis officia voluptas consequatur
                        repudiandae, nobis recusandae eveniet placeat
                      </li>
                      <li className="ms-5 my-2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Dicta veritatis officia voluptas consequatur
                        repudiandae, nobis recusandae eveniet placeat <br />{" "}
                        (veritatis officia voluptas consequatur repudiandae,
                        nobis recusandae eveniet placeat)
                      </li>
                      <li className="ms-5 mt-2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Dicta veritatis officia voluptas <br />{" "}
                        consequatur repudiandae, nobis recusandae eveniet
                        placeat
                      </li>
                      <li className="">Site Montoring:</li>
                      <li className="ms-5 my-2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Dicta veritatis officia voluptas(GCP) consequatur
                        repudiandae, nobis recusandae eveniet placeat
                      </li>
                      <li className="ms-5 my-2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Dicta veritatis officia voluptas consequatur
                        repudiandae,
                        <br />
                        (veritatis officia voluptas consequatur repudiandae,)
                        nobis recusandae eveniet placeat
                      </li>
                      <li className="ms-5 my-2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Dicta veritatis officia voluptas consequatur
                        repudiandae, nobis recusandae eveniet placeat, <br />
                        (Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. nobis recusandae eveniet placeat)
                      </li>
                    </ul>
                    <div className="mt-5 text-center">
                      <button
                        className=""
                        style={{
                          width: "130px",
                          height: "35px",
                          backgroundColor: "#418E41",
                          border: "none",
                          borderTopLeftRadius: "20px",
                          borderBottomRightRadius: "20px",
                          color: "#fff",
                          fontWeight: "bold",
                          boxShadow:
                            "rgba(0, 0, 0, 0.3) 0px 13px 50px, rgba(0, 0, 0, 0.22) 0px 5px 5px",
                        }}
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item shadow">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed text-success fw-bolder fs-5"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Medical
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse p-4"
                  data-bs-parent="#accordionExample"
                >
                  <div
                    className="accordion-body"
                  >
                    <strong>Job Overview</strong> It Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Magni, aliquid facilis debitis
                    accusantium, totam ipsum iure, enim placeat deleniti at
                    error impedit quibusdam. Pariatur praesentium consequatur
                    vel maxime amet minima? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Magni, aliquid facilis debitis
                    accusantium, totam ipsum iure, enim placeat deleniti at
                    error impedit quibusdam. Pariatur praesentium otam ipsum
                    iure, enim placeat deleniti at error impedit quibusdam.
                    Pariatur praesentium consequatur vel maxime amet
                    minima?............
                    <ul>
                      <li className="">Study Management:</li>
                      <li className="ms-5 my-2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Dicta veritatis officia voluptas consequatur
                        repudiandae, nobis recusandae eveniet placeat
                      </li>
                      <li className="ms-5 my-2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Dicta veritatis officia voluptas consequatur
                        repudiandae, nobis recusandae eveniet placeat <br />{" "}
                        (veritatis officia voluptas consequatur repudiandae,
                        nobis recusandae eveniet placeat)
                      </li>
                      <li className="ms-5 mt-2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Dicta veritatis officia voluptas <br />{" "}
                        consequatur repudiandae, nobis recusandae eveniet
                        placeat
                      </li>
                      <li className="">Site Montoring:</li>
                      <li className="ms-5 my-2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Dicta veritatis officia voluptas(GCP) consequatur
                        repudiandae, nobis recusandae eveniet placeat
                      </li>
                      <li className="ms-5 my-2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Dicta veritatis officia voluptas consequatur
                        repudiandae,
                        <br />
                        (veritatis officia voluptas consequatur repudiandae,)
                        nobis recusandae eveniet placeat
                      </li>
                      <li className="ms-5 my-2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Dicta veritatis officia voluptas consequatur
                        repudiandae, nobis recusandae eveniet placeat, <br />
                        (Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. nobis recusandae eveniet placeat)
                      </li>
                    </ul>
                    <div className="mt-5 text-center">
                      <button
                        className=""
                        style={{
                          width: "130px",
                          height: "35px",
                          backgroundColor: "#418E41",
                          border: "none",
                          borderTopLeftRadius: "20px",
                          borderBottomRightRadius: "20px",
                          color: "#fff",
                          fontWeight: "bold",
                          boxShadow:
                            "rgba(0, 0, 0, 0.3) 0px 13px 50px, rgba(0, 0, 0, 0.22) 0px 5px 5px",
                        }}
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
}
