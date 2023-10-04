import React from "react";
import doctor5 from "../asset/doctor5.jpg";
import sand from '../asset/kc.jpg'
import happy from '../asset/hppy2.jpg'
function Blog() {
  return (
    <section className="blog">
      <div className=" container mx-auto">
        <h2 className=" h2 mb-[50px] text-center md:text-left">
          Our Recent Posts
        </h2>
        {/* blog post */}

        <div className=" flex flex-col md:flex-row gap-y-6 md:gap-y-0 items-center md:justify-between md:gap-x-2 mb-[50px]">
          {/* post 1 */}

          <div className=" max-w-[555px] shadow-custom1 rounded-[10px] overflow-hidden cursor-pointer group">
            {/* img */}
            <div className=" relative overflow-hidden">
              <img
                className=" group-hover:scale-110 transition-all duration-500"
                src={doctor5}
                alt=""
              />
              {/* badge */}
              <div className=" bg-accent-tertiary absolute bottom-0 left-0 text-white text-base tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]">
                Surgery
              </div>
            </div>
            {/* text */}
            <div className=" px-3  py-6">
              <div className="mb-4">Jan 2, 2023</div>
              <h4 className="h4 mb-[10px]">10 food to avoid heart disease</h4>
              <p>
                It's normal to feel anxiety, worry and grief any time you're
                diagnosed with a condition that's certainly true...
                <a href="#" className=" italic underline text-[#4c5354]">
                  Read more
                </a>
              </p>
            </div>
          </div>



 {/* post 1 */}

 <div className=" max-w-[555px] shadow-custom1 rounded-[10px] overflow-hidden cursor-pointer group">
            {/* img */}
            <div className=" relative overflow-hidden">
              <img
                className=" group-hover:scale-110 transition-all duration-500"
                src={sand}
                alt=""
              />
              {/* badge */}
              <div className=" bg-accent-tertiary absolute bottom-0 left-0 text-white text-base tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]">
                Medicine
              </div>
            </div>
            {/* text */}
            <div className=" px-3  py-6">
              <div className="mb-4">Jan 2, 2023</div>
              <h4 className="h4 mb-[10px]">10 food to avoid heart disease</h4>
              <p>
                It's normal  feel anxiety, worry and grief any time you're
                diagnosed with  condition that's  true... 
                <a href="#" className=" italic underline text-[#4c5354]">
                  Read more
                </a>
              </p>
            </div>
          </div>



      {/* post 1 */}

      <div className=" max-w-[555px] shadow-custom1 rounded-[10px] overflow-hidden cursor-pointer group">
            {/* img */}
            <div className=" relative overflow-hidden">
              <img
                className=" group-hover:scale-110 transition-all duration-500"
                src={happy}
                alt=""
              />
              {/* badge */}
              <div className=" bg-accent-tertiary absolute bottom-0 left-0 text-white text-base tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]">
                Happy
              </div>
            </div>
            {/* text */}
            <div className=" px-4  py-6">
              <div className="mb-4">Jan 2, 2023</div>
              <h4 className="h4 mb-[10px]">10 food to avoid heart disease</h4>
              <p>
                It's normal to feel anxiety, worry and grief any time you're
                diagnosed with a condition that's certainly true...
                <a href="#" className=" italic underline text-[#4c5354]">
                  Read more
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
