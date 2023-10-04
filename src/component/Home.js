import React, { useState } from "react";
import white from "../asset/white.png";
import empty from "../asset/doctor2.png";
import profile from "../asset/profile.png";
import me from "../asset/me.jpg";
import up from "../asset/up.jpeg";
import sand from "../asset/sand.jpg";
import doctot5 from "../asset/doctor5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Question from "./Question";
import Department from "./Department";
import Blog from "./Blog";
import Brands from "./Brands";
import News from "./News";
import Footer from "./Footer";
function Home() {
  const [btn, setBtn] = useState(false);

  return (
    <section>
      <section>
        <header className=" py-8 md:pt-6 md:pb-14">
          <div className=" container mx-auto md:relative flex flex-col md:flex-row md:justify-between gap-y-4 md:gap-y-0">
            {/* logo */}

            <div className=" flex justify-center md:justify-normal">
              <a href="#">
                <h2 className=" font-bold text-3xl">steroxy</h2>
              </a>
            </div>

            <div className=" flex flex-col gap-y-4 md:flex-row md:gap-x-10 md:gap-y-0">
              {/* location */}
              <div className="flex justify-center items-center gap-x-2 md:justify-normal">
                <p className=" text-2xl text-accent">
                  {/* map icon */}
                  <i class="fa-solid fa-location-dot"></i>
                </p>
                <div className=" text-secondary">123 Arling, Miola, NY</div>
              </div>

              {/* phone*/}
              <div className="flex justify-center items-center gap-x-2 md:justify-normal">
                <p className="text-2xl text-accent">
                  {/* phone icon */}
                  <i class="fa-solid fa-phone"></i>
                </p>

                <div className=" text-secondary"> (+123) 9018 94 4777</div>
              </div>
              {/* btn */}
              <button className=" btn btn-sm btn-outline w-[240px] md:w-auto  mx-auto md:mx-0">
                Book
              </button>
              {/* mobile nav */}
              <nav className="">
                {/* nav tigger btn */}
                <div className="">
                  <p
                    onClick={() => setBtn(true)}
                    className="  bg-primary w-8 h-8 relat fixed -left-[8px]  top-[45px] flex justify-center items-center rounded-tr-lg rounded-br-lg cursor-pointer transition-all text-2xl text-white z-20"
                  >
                    {" "}
                    <i class="fa-solid fa-list"></i>
                  </p>
                </div>
              </nav>
              <nav className="bg-white absolute w-full left-0 -bottom-[86px] shadow-custom1 h-16 rounded-[10px] hidden md:flex md:items-center md:justify-between md:px-[50px]">
                <ul className=" flex  gap-x-4">
                  <li>
                    <a
                      className=" border-r pr-4 text-secondary hover:text-accent transition-all duration-300"
                      href="#"
                    >
                      Home
                    </a>
                  </li>

                  <li>
                    <a
                      className=" border-r pr-4 text-secondary hover:text-accent transition-all duration-300"
                      href="#"
                    >
                      Doctors
                    </a>
                  </li>

                  <li>
                    <a
                      className=" border-r pr-4 text-secondary hover:text-accent transition-all duration-300"
                      href="#"
                    >
                      Department
                    </a>
                  </li>

                  <li>
                    <a
                      className=" border-r pr-4 text-secondary hover:text-accent transition-all duration-300"
                      href="#"
                    >
                      Services
                    </a>
                  </li>

                  <li>
                    <a
                      className=" border-r pr-4 text-secondary hover:text-accent transition-all duration-300"
                      href="#"
                    >
                      Blog
                    </a>
                  </li>

                  <li>
                    <a
                      className=" text-secondary hover:text-accent transition-all duration-300"
                      href="#"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
                <form className=" relative flex gap-x-[10px]">
                  <label
                    for=" search-input"
                    className="flex justify-center items-center group"
                  >
                    <p className="text-2xl text-accent">
                      {" "}
                      {/*  */} <i class="fa-solid fa-magnifying-glass"></i>
                    </p>
                  </label>
                  <input
                    type="text"
                    placeholder="Search..."
                    className=" outline-none w-[100px] focus:w-[180px] focus:border-b-2 focus:border-accent placeholder:italic placeholder:text-base transition-all duration-200"
                  />
                </form>
              </nav>
              {btn && (
                <div className=" bg-white fixed w-[300px] top-0 h-screen left-0 shadow-2xl md:hidden transition-all duration-300 z-20">
                  {/* logo */}

                  <div className=" flex flex-col px-4  ">
                    <a href="#">
                      <h2 className=" text-2xl pt-4 text-center font-semibold">
                        St<span className=" text-accent">ero</span>xy
                      </h2>
                    </a>
                    {/* list */}

                    <ul className=" flex flex-col gap-y-5">
                      <li>
                        <a
                          className=" text-secondary hover:text-accent transition-all duration-300"
                          href="#"
                        >
                          Home
                        </a>
                      </li>

                      <li>
                        <a
                          className=" text-secondary hover:text-accent transition-all duration-300"
                          href="#"
                        >
                          Doctors
                        </a>
                      </li>

                      <li>
                        <a
                          className=" text-secondary hover:text-accent transition-all duration-300"
                          href="#"
                        >
                          Department
                        </a>
                      </li>

                      <li>
                        <a
                          className=" text-secondary hover:text-accent transition-all duration-300"
                          href="#"
                        >
                          Services
                        </a>
                      </li>

                      <li>
                        <a
                          className=" text-secondary hover:text-accent transition-all duration-300"
                          href="#"
                        >
                          Blog
                        </a>
                      </li>

                      <li>
                        <a
                          className=" text-secondary hover:text-accent transition-all duration-300"
                          href="#"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                    <form className=" relative flex gap-x-[10px] pt-9">
                      <label for="">
                        <p className="text-2xl text-accent">{/*  */}0</p>
                      </label>
                      <input
                        type="text"
                        id=""
                        placeholder=" Search..."
                        className=" outline-none w-[160px] border-b-2 focus:border-b-2 focus:border-accent placeholder:italic"
                      />
                    </form>
                  </div>
                  <span
                    onClick={() => setBtn(false)}
                    className="  bg-primary w-8 h-8 relative -top-[460px] mdl:left-[300px] left-[280px]  flex justify-center items-center rounded-tr-lg rounded-br-lg cursor-pointer transition-all text-2xl text-white z-30"
                  >
                    <i class="fa-solid fa-xmark"></i>
                  </span>
                </div>
              )}
            </div>
          </div>
        </header>

        <section className="hero bg-grey py-12 md:pt-12 md:pb-0 overflow-hidden">
          <div className="containe px-12  mx-auto items-center flex justify-center h-full">
            <div className=" flex flex-col  md:flex-row items-center  justify-between h-full">
              {/* text */}
              <div className=" md:w-[48%] md:pl-12 text-center md:text-left">
                {/* bodge */}

                <div className=" flex items-center bg-white py-[10px] px-[17px] w-max gap-x-2 mb-[26px] rounded-full mx-auto md:mx-0">
                  <p className=" text-2xl text-accent">
                    {/* icon */}
                    <i class="fa-solid fa-heart-pulse"></i>
                  </p>

                  <div className=" uppercase text-base font-medium text-[#9ab4b7] md:tracking-[18px] tracking-[10px]">
                    {" "}
                    Live your life
                  </div>
                </div>

                {/* tittle */}
                <h1 className="h1 mb-6">We care about your health</h1>
                {/* desc */}
                <p className=" mb-[42px]  md:max-w-xl text-justify ">
                  with many years of experience in the industry. I’m a young
                  girl who lives and based in Manchester united kingdom, I have
                  a good communication and collaboration skills, and passionate
                  in creating intuitive and
                </p>
                {/* btn */}
                <button className=" btn btn-lg btn-accent mx-auto  md:mx-0">
                  Contact us
                </button>
              </div>
              {/* imag */}
              <div className=" hero__img md:flex hidden   max-w-[814px] self-end">
                <img src={empty} alt="" className=" h-[540px]  " />
              </div>
            </div>
          </div>
        </section>
        {/* stat */}
        <section className=" stats section">
          <div className=" container mx-auto">
            {/* wrapper */}
            <div className=" flex flex-col md:flex-row gap-y-6 justify-between">
              {/* item */}
              <div className=" flex-1 md:border-r flex flex-col items-center">
                <div className=" text-4xl md:text-[64px] font-semibold text-accent-tertiary md:mb-2">
                  +5120
                </div>
                <div>Happy Patients</div>
              </div>

              <div className=" flex-1 md:border-r flex flex-col items-center">
                <div className=" text-4xl md:text-[64px] font-semibold text-accent-tertiary md:mb-2">
                  26
                </div>
                <div>Total Branches</div>
              </div>

              <div className=" flex-1 md:border-r flex flex-col items-center">
                <div className=" text-4xl md:text-[64px] font-semibold text-accent-tertiary md:mb-2">
                  +55
                </div>
                <div>Senior Doctors</div>
              </div>

              <div className=" flex-1  flex flex-col items-center">
                <div className=" text-4xl md:text-[64px] font-semibold text-accent-tertiary md:mb-2">
                  +10
                </div>
                <div>Years Experience</div>
              </div>
            </div>
          </div>
        </section>
        {/* statend */}

        <section className="services">
          {/* bg */}
          <div className=" bg-services bg-cover bg-no-repeat max-w-[1466px] mx-4 md:mx-auto rounded-[20px] md:pt-[70px] px-6 md:px-0 relative h-[368px] flex items-center md:items-start -z-10">
            <div className=" container mx-auto">
              {/* text */}
              <div className=" flex items-center flex-col md:flex-row md:mb-[60px]">
                <h2 className=" text-[24px] xl:text-[44px] font-semibold capitalize tracking-[0.44px] mdl:h2 text-gray-500 flex-1 mb-4 md:mb-0 text-center md:text-left">
                  Our best services for your solution
                </h2>
                <p className=" text-gray-500 flex-1 text-center text-[14px] mdl:text-base font-medium md:text-left max-w-2xl md:max-w-none">
                  with many years of experience in the industry. I’m a young
                  girl who lives and based in Manchester united kingdom, I have
                  a good communication
                </p>
              </div>
            </div>
          </div>
          {/* grid container */}
          <div className=" container mx-auto mt-8 md:-mt-[144px]">
            {/* grid */}
            <div className=" grid md:grid-cols-3 xl:grid-cols-4 gap-5 px-8 md:px-0">
              {/* grid item */}
              <div className=" bg-white p-[30px] rounded-[10px] shadow-custom1 min-h-[288px] flex flex-col items-center text-center">
                {/* grid icon */}
                <div className=" mb-[15px]">
                  <p className=" text-3xl">
                    <i class="fa-solid fa-users"></i>
                  </p>
                  <img src="" alt="" />
                </div>
                {/* grid title */}

                <h3 className="h3 mb-[10px]">General Practitioners</h3>
                <p className=" font-light leading-normal max-w-[300px]">
                  interface that delight users and enhance best career their
                  overall
                </p>
              </div>

              <div className=" bg-white p-[30px] rounded-[10px] shadow-custom1 min-h-[288px] flex flex-col items-center text-center ">
                {/* grid icon */}
                <div className=" mb-[15px]">
                  <p className=" text-3xl">
                    <i class="fa-solid fa-bowl-food"></i>
                  </p>
                  <img src="" alt="" />
                </div>
                {/* grid title */}

                <h3 className="h3 mb-[10px]">Nutritional Support</h3>
                <p className=" font-light leading-normal max-w-[300px]">
                  interface that delight users and enhance best career their
                  overall
                </p>
              </div>

              <div className=" bg-white p-[30px] rounded-[10px] shadow-custom1 min-h-[288px] flex flex-col items-center text-center">
                {/* grid icon */}
                <div className=" mb-[15px]">
                  <p className=" text-3xl">
                    {" "}
                    <i class="fa-solid fa-person-pregnant"></i>
                  </p>
                  <img src="" alt="" />
                </div>
                {/* grid title */}

                <h3 className="h3 mb-[10px]">Pregnancy Support</h3>
                <p className=" font-light leading-normal max-w-[300px]">
                  interface that delight users and enhance best career their
                  overall
                </p>
              </div>

              {/* =========================================================================================================================================================== */}

              <div className=" bg-white hidden  p-[30px] rounded-[10px] shadow-custom1 min-h-[288px] xl:flex flex-col items-center text-center">
                {/* grid icon */}
                <div className=" mb-[15px]">
                  <p className=" text-3xl">
                    <i class="fa-solid fa-user-doctor"></i>
                  </p>
                  <img src="" alt="" />
                </div>
                {/* grid title */}

                <h3 className="h3 mb-[10px]">Pharmaceutical Care</h3>
                <p className=" font-light leading-normal max-w-[300px]">
                  interface that delight users and enhance best career their
                  overall
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className=" section">
          <div className=" container mx-auto">
            {/* titlle */}
            <h2 className=" text-[25px] mdl:text-[30px] xl:text-[44px] font-semibold capitalize tracking-[0.44px] mb-5 md:mb-[50px] text-center md:text-left">
              Book Appointment or call:{" "}
              <span className=" text-accent-tertiary">(+123 901 894 4777)</span>
            </h2>
            {/* form */}
            <form className=" flex flex-col gap-y-5">
              {/* select wrapper */}
              <div className=" flex flex-col md:flex-row gap-5">
                {/* select 1 */}
                <div className="  select relative flex items-center">
                  <div className=" absolute right-4">
                    {/* icon */}
                    <p className=" text-[26px] text-primary">
                      <i class="fa-solid fa-caret-down"></i>
                    </p>
                  </div>

                  {/* select */}
                  <select className=" appearance-none border-2  rounded-lg outline-none h-full w-full bg-transparent px-4">
                    <option value="1">Select department</option>
                    <option value="2"> Department 1</option>
                    <option value="3"> Department 2</option>
                    <option value="4"> Department 3</option>
                  </select>
                </div>

                {/* select 2 */}
                <div className="  select relative flex items-center">
                  <div className=" absolute right-4">
                    {/* icon */}
                    <p className=" text-[26px] text-primary">
                      <i class="fa-solid fa-caret-down"></i>
                    </p>
                  </div>

                  {/* select */}
                  <select className=" appearance-none border-2  rounded-lg outline-none h-full w-full bg-transparent px-4">
                    <option value="1">Select Doctors</option>
                    <option value="2"> Dr. Sixtus Amadi</option>
                    <option value="3"> Dr. Austin Opara</option>
                    <option value="4"> Dr. yougin udeski</option>
                  </select>
                </div>
              </div>
              {/* input wrapper */}
              <div className=" flex flex-col md:flex-row  gap-5">
                <input
                  type="text"
                  className=" input "
                  placeholder="Full Name"
                />

                <input
                  type="text"
                  className="input"
                  placeholder="Phone Number"
                />
              </div>

              {/* input wrapper */}
              <div className=" flex flex-col md:flex-row  gap-5">
                <input className=" input " type="date" />

                <input className="input" type="time" />
              </div>

              {/* btn */}

              <button
                className=" btn btn-lg btn-accent self-start"
                type="submit"
              >
                Book an appointment
              </button>
            </form>
          </div>
        </section>

        <section className=" testimonial bg-testimonails bg-cover bg-right bg-no-repeat py-12 md:min-h-[500px] md:py-0">
          <div className=" container mx-auto">
            <div className=" flex flex-col items-center gap-x-14 md:flex-row">
              {/* img */}
              <div className=" hidden md:flex">
                <img
                  src={profile}
                  alt=""
                  className=" w-[590px] h-[435px] pt-12"
                />
              </div>
              {/* slider */}
              <div className=" max-w-[98%] md:max-w-[710px]">
                {/* Slider main container  */}
                <div class="swiper h-[400px]">
                  {/* Additional required wrapper  */}
                  <div class="swiper-wrapper">
                    <Swiper
                      spaceBetween={50}
                      slidesPerView={1}
                      onSlideChange={() => console.log("slide change")}
                      onSwiper={(swiper) => console.log(swiper)}
                      className=" md:w-[570px]  "
                    >
                      {/* Slides 1  */}

                      <div class="swiper-slide">
                        <SwiperSlide>
                          <div className=" h-full flex flex-col justify-center items-start">
                            <div className=" max-w-[680px] mx-auto text-center md:text-left">
                              <p className="  relative mdl:text-[20px] text-[16px] text-justify  leading-[190%] mdl:text-center md:text-left mb-7 ">
                                {/* message */}

                                <span className="">
                                  I believe that a great user interface is
                                  critical to the success of any digital product
                                  and i work closely with my clients to craft
                                  designs that are clients to craft designs that
                                  are
                                </span>
                              </p>
                              {/* name */}
                              <div className=" text-[26px] text-[#4c5354] font-semibold">
                                Sixtus Amadi
                              </div>
                              {/* job */}
                              <div className=" text-[#9ab4b7] font-medium uppercase tracking-[2.24px]">
                                Customer
                              </div>
                              <div className=" flex items-center justify-center gap-x-4">
                                <div className=" text-[20px] text-accent">
                                  <i class="fa-regular fa-circle-dot fa-beat"></i>
                                </div>
                                <div className=" text-[12px]">
                                  <i class="fa-solid fa-circle-dot "></i>
                                </div>

                                <div className=" text-[12px]">
                                  <i class="fa-solid fa-circle-dot "></i>
                                </div>

                                <div className=" text-[12px]">
                                  <i class="fa-solid fa-circle-dot "></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      </div>

                      {/* slide2 */}

                      <div class="swiper-slide">
                        <SwiperSlide>
                          <div className=" h-full flex flex-col justify-center items-start">
                            <div className=" max-w-[680px] mx-auto text-center md:text-left">
                              <p className="  relative mdl:text-[20px]  text-[16px] text-justify leading-[190%] mdl:text-center md:text-left mb-7 ">
                                {/* message */}

                                <span className="">
                                  I believe that a great user interface is
                                  critical to the success of any digital product
                                  and i work closely with my clients to craft
                                  designs that are clients to craft designs that
                                  are
                                </span>
                              </p>
                              {/* name */}
                              <div className=" text-[26px] text-[#4c5354] font-semibold">
                                Chidex Ojugi
                              </div>
                              {/* job */}
                              <div className=" text-[#9ab4b7] font-medium uppercase tracking-[2.24px]">
                                Customer
                              </div>
                              <div className=" flex items-center justify-center gap-x-4">
                                <div className=" text-[12px]">
                                  <i class="fa-solid fa-circle-dot "></i>
                                </div>
                                <div className=" text-[20px] text-accent">
                                  <i class="fa-regular fa-circle-dot fa-beat"></i>
                                </div>
                                <div className=" text-[12px]">
                                  <i class="fa-solid fa-circle-dot "></i>
                                </div>

                                <div className=" text-[12px]">
                                  <i class="fa-solid fa-circle-dot "></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      </div>

                      <div class="swiper-slide">
                        <SwiperSlide>
                          <div className=" h-full flex flex-col justify-center items-start">
                            <div className=" max-w-[680px] mx-auto text-center md:text-left">
                              <p className="  relative mdl:text-[20px]  text-[16px] text-justify leading-[190%] mdl:text-center md:text-left mb-7 ">
                                {/* message */}

                                <span className="">
                                  I believe that a great user interface is
                                  critical to the success of any digital product
                                  and i work closely with my clients to craft
                                  designs that are clients to craft designs that
                                  are
                                </span>
                              </p>
                              {/* name */}
                              <div className=" text-[26px] text-[#4c5354] font-semibold">
                                Uche felip
                              </div>
                              {/* job */}
                              <div className=" text-[#9ab4b7] font-medium uppercase tracking-[2.24px]">
                                Customer
                              </div>
                              <div className=" flex items-center justify-center gap-x-4">
                                <div className=" text-[12px]">
                                  <i class="fa-solid fa-circle-dot "></i>
                                </div>
                                <div className=" text-[12px]">
                                  <i class="fa-solid fa-circle-dot "></i>
                                </div>
                                <div className=" text-[20px] text-accent">
                                  <i class="fa-regular fa-circle-dot fa-beat"></i>
                                </div>
                                <div className=" text-[12px]">
                                  <i class="fa-solid fa-circle-dot "></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      </div>

                      <div class="swiper-slide">
                        <SwiperSlide>
                          <div className=" h-full flex flex-col justify-center items-start">
                            <div className=" max-w-[680px] mx-auto text-center md:text-left">
                              <p className="  relative mdl:text-[20px]  text-[16px] text-justify  leading-[190%] mdl:text-center md:text-left mb-7 ">
                                {/* message */}

                                <span className="">
                                  I believe that a great user interface is
                                  critical to the success of any digital product
                                  and i work closely with my clients to craft
                                  designs that are clients to craft designs that
                                  are
                                </span>
                              </p>
                              {/* name */}
                              <div className=" text-[26px] text-[#4c5354] font-semibold">
                                Ebe Mmadueke
                              </div>
                              {/* job */}
                              <div className=" text-[#9ab4b7] font-medium uppercase tracking-[2.24px]">
                                Customer
                              </div>
                              <div className=" flex items-center justify-center gap-x-4">
                                <div className=" text-[12px]">
                                  <i class="fa-solid fa-circle-dot "></i>
                                </div>
                                <div className=" text-[12px]">
                                  <i class="fa-solid fa-circle-dot "></i>
                                </div>
                                <div className=" text-[12px]">
                                  <i class="fa-solid fa-circle-dot "></i>
                                </div>
                                <div className=" text-[20px] text-accent">
                                  <i class="fa-regular fa-circle-dot fa-beat"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      </div>
                    </Swiper>
                  </div>
                  {/* swiper pagination  */}
                  <div class="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==================================== */}
        <section className=" team section">
          <div className=" container mx-auto">
            <h2 className=" team__title h2 mb-[50px] text-center md:text-left">
              Our Team
            </h2>

            {/* slider */}

            <div className="  swiper min-h-[400px] ">
              {/* Slider main container  */}
              <div class="swiper">
                {/* Additional required wrapper  */}
                <div class="swiper-wrapper">
                  <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    className=" w-full  "
                  >
                    {/* Slides 1  */}

                    <div class="swiper-slide">
                      <SwiperSlide>
                        <div className=" flex flex-col mdl:flex-row gap-9">
                          {/* item 1 */}
                          <div className=" flex-1 flex flex-col md:flex-row">
                            <div className=" flex flex-col md:flex-row items-center gap-[30px]">
                              {/* img */}
                              <div className=" flex-1">
                                <img src={sand} alt="" className=" h-44   " />
                              </div>
                              {/* info */}
                              <div className=" flex-1 flex flex-col">
                                {/* name */}
                                <h4 className=" h4 mb-[10px]">
                                  Dr. chidex Opara
                                </h4>
                                {/* job */}
                                <div className=" font-medium uppercase tracking-[2.24px] text-[#9ab4b7] mb-[20px] ">
                                  Pediatrician
                                </div>

                                {/* desc */}
                                <p className=" font-light text-[13px] max-w-[320px]">
                                  lorem ispum dolar sit ament container
                                  adjipising elit lorem ispum dolar ament
                                  container{" "}
                                </p>
                                {/* social */}
                                <div className=" flex items-center text-[20px] gap-x-5 text-accent-secondary">
                                  <a
                                    href="#"
                                    className=" cursor-pointer hover:text-accent transition-all"
                                  >
                                    <i class="fa-brands fa-youtube"></i>
                                  </a>

                                  <a
                                    href="#"
                                    className=" cursor-pointer hover:text-accent transition-all"
                                  >
                                    <i class="fa-brands fa-facebook"></i>
                                  </a>

                                  <a
                                    href="#"
                                    className=" cursor-pointer hover:text-accent transition-all"
                                  >
                                    <i class="fa-brands fa-instagram"></i>
                                  </a>

                                  <a
                                    href="#"
                                    className=" cursor-pointer hover:text-accent transition-all"
                                  >
                                    <i class="fa-brands fa-linkedin"></i>
                                  </a>
                                </div>
                                
                              </div>{" "}
                            </div>
                          </div>

                          {/* item 2 */}

                          <div className=" flex-1 flex flex-col md:flex-row">
                            <div className=" flex flex-col md:flex-row items-center gap-[30px]">
                              {/* img */}
                              <div className=" flex-1">
                                <img src={me} alt="" className=" h-44  " />
                              </div>
                              {/* info */}
                              <div className=" flex-1 flex flex-col">
                                {/* name */}
                                <h4 className=" h4 mb-[10px]">Dr. Genevive</h4>
                                {/* job */}
                                <div className=" font-medium uppercase tracking-[2.24px] text-[#9ab4b7] mb-[20px] ">
                                  Pediatrician
                                </div>

                                {/* desc */}
                                <p className=" font-light text-[13px] max-w-[320px]">
                                  lorem ispum dolar sit ament container
                                  adjipising elit lorem ispum dolar ament
                                  container{" "}
                                </p>
                                {/* social */}
                                <div className=" flex items-center text-[20px] gap-x-5 text-accent-secondary">
                                  <a
                                    href="#"
                                    className=" cursor-pointer hover:text-accent transition-all"
                                  >
                                    <i class="fa-brands fa-youtube"></i>
                                  </a>

                                  <a
                                    href="#"
                                    className=" cursor-pointer hover:text-accent transition-all"
                                  >
                                    <i class="fa-brands fa-facebook"></i>
                                  </a>

                                  <a
                                    href="#"
                                    className=" cursor-pointer hover:text-accent transition-all"
                                  >
                                    <i class="fa-brands fa-instagram"></i>
                                  </a>

                                  <a
                                    href="#"
                                    className=" cursor-pointer hover:text-accent transition-all"
                                  >
                                    <i class="fa-brands fa-linkedin"></i>
                                  </a>
                                </div>
                              </div>{" "}
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </div>

                    <div class="swiper-slide">
                      <SwiperSlide>
                        <div className=" flex flex-col mdl:flex-row gap-9">
                          {/* item 1 */}
                          <div className=" flex-1 flex flex-col md:flex-row">
                            <div className=" flex flex-col md:flex-row items-center gap-[30px]">
                              {/* img */}
                              <div className=" flex-1">
                                <img src={up} alt="" className=" h-44   " />
                              </div>
                              {/* info */}
                              <div className=" flex-1 flex flex-col">
                                {/* name */}
                                <h4 className=" h4 mb-[10px]">
                                  Dr. Sixtus Amadi
                                </h4>
                                {/* job */}
                                <div className=" font-medium uppercase tracking-[2.24px] text-[#9ab4b7] mb-[20px] ">
                                  Pediatrician
                                </div>

                                {/* desc */}
                                <p className=" font-light text-[13px] max-w-[320px]">
                                  lorem ispum dolar sit ament container
                                  adjipising elit lorem ispum dolar ament
                                  container{" "}
                                </p>
                                {/* social */}
                                <div className=" flex items-center text-[20px] gap-x-5 text-accent-secondary">
                                  <a
                                    href="#"
                                    className=" cursor-pointer hover:text-accent transition-all"
                                  >
                                    <i class="fa-brands fa-youtube"></i>
                                  </a>

                                  <a
                                    href="#"
                                    className=" cursor-pointer hover:text-accent transition-all"
                                  >
                                    <i class="fa-brands fa-facebook"></i>
                                  </a>

                                  <a
                                    href="#"
                                    className=" cursor-pointer hover:text-accent transition-all"
                                  >
                                    <i class="fa-brands fa-instagram"></i>
                                  </a>

                                  <a
                                    href="#"
                                    className=" cursor-pointer hover:text-accent transition-all"
                                  >
                                    <i class="fa-brands fa-linkedin"></i>
                                  </a>
                                </div>
                              </div>{" "}
                            </div>
                          </div>
                          {/* item 2 */}

                          <div className=" flex-1 flex flex-col md:flex-row">
                            <div className=" flex flex-col md:flex-row items-center gap-[30px]">
                              {/* img */}
                              <div className=" flex-1">
                                <img src={doctot5} alt="" className=" h-44  " />
                              </div>
                              {/* info */}
                              <div className=" flex-1 flex flex-col">
                                {/* name */}
                                <h4 className=" h4 mb-[10px]">
                                  Dr. Justice Opara
                                </h4>
                                {/* job */}
                                <div className=" font-medium uppercase tracking-[2.24px] text-[#9ab4b7] mb-[20px] ">
                                  Pediatrician
                                </div>

                                {/* desc */}
                                <p className=" font-light text-[13px] max-w-[320px]">
                                  lorem ispum dolar sit ament container
                                  adjipising elit lorem ispum dolar ament
                                  container{" "}
                                </p>
                                {/* social */}
                                <div className=" flex items-center text-[20px] gap-x-5 text-accent-secondary">
                                  <a
                                    href="#"
                                    className=" cursor-pointer hover:text-accent transition-all"
                                  >
                                    <i class="fa-brands fa-youtube"></i>
                                  </a>

                                  <a
                                    href="#"
                                    className=" cursor-pointer hover:text-accent transition-all"
                                  >
                                    <i class="fa-brands fa-facebook"></i>
                                  </a>

                                  <a
                                    href="#"
                                    className=" cursor-pointer hover:text-accent transition-all"
                                  >
                                    <i class="fa-brands fa-instagram"></i>
                                  </a>

                                  <a
                                    href="#"
                                    className=" cursor-pointer hover:text-accent transition-all"
                                  >
                                    <i class="fa-brands fa-linkedin"></i>
                                  </a>
                                </div>
                              </div>{" "}
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </div>
                  </Swiper>
                </div>
                {/* swiper pagination  */}
                <div class="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </section>

        <Question />

        <Department />
        <Blog />

        <Brands />
        <News />
        <Footer />
        {/* <div className=" h-[600px]"></div> */}
      </section>
    </section>
  );
}

export default Home;
