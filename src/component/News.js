import React from "react";
import pattern from "../asset/rfce.png";
function News() {
  return (
    <section className=" bg-accent md:h-[444px] py-12 flex items-center relative overflow-hidden">
      <div className=" absolute left-0 bottom-">
        <img src={pattern} alt="" className=" opacity-5 h-64" />
      </div>
      {/* container */}
      <div className=" container mx-auto">
        {/* wrapper */}
        <div className=" flex flex-col md:flex-row md:items-center md:gap-x-[58px]">
            {/* text */}
            <div className=" flex-1 z-10 text-center md:text-left">
                <div className=" text-base uppercase text-white tracking-[2.24px] font-medium">Our newslatter</div>
                <h1 className="h1 mb-4 text-white">Subscribe to get more update</h1>
            </div>
            {/* form */}
            <form className=" flex-1">
                <div className=" flex flex-col md:flex-row relative gap-y-4">
                    <input type="text" placeholder=" Your email address" className=" rounded-full w-full h-[68px] bg-transparent border-2 border-white outline-none pl-[30px] placeholder:text-white focus:text-white"/>
                    <button className=" btn btn-lg btn-white md:absolute right-0">Subscribe</button>
                </div>
            </form>
        </div>
      </div>
    </section>
  );
}

export default News;
