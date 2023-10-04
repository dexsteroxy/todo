import React, { useState } from "react";

function Question() {
  // https://www.youtube.com/watch?v=KBzqv4gIKWw
    const [open, setOpen] = useState(false)
    const [up, setUp] = useState(false)
    const [down, setDown] = useState(false)
    const [map, setMap] = useState(false)
  return (
    <section className=" faq">
      <div className=" container mx-auto">
        <h2 className=" h2 text-center mb-[50px]">We've got answers</h2>
        {/* item wrapper */}
        <div className=" max-w-5xl mx-auto">
          {/* item 1 */}

          <div onClick={() => setOpen((!open))} className=" faq__item md:px-[30px] px-[8px] pt-7 pb-4 border-b cursor-pointer select-none">
            {/* title icon */}
            <div className=" flex items-center justify-between mb-[10px]">
              {/* title */}
              <h4 className=" h4">
                Why to believe in Steroxy medical healthcare ?
              </h4>
              {/* icon */}

              <div className=" faq__btn  text-primary">
                <p className=" text-2xl"><i class="fa-solid fa-plus"></i></p>
              </div>
           

              {
                open && (
                  <div className=" faq__btn  text-primary">
                  <p className=" text-2xl"><i class="fa-solid fa-minus"></i></p>
                </div>
                )
              }
            </div>
            {/* answer text */}
           {
            open   && (
                <div  className=" faq__answer ">
                <p>
                  {" "}
                  I believe that a great user interface is critical to the success
                  of any digital product and i work closely with my clients to
                  craft designs that are clients to craft designs that are
                </p>
              </div>
            ) 
           }
          </div>

          {/* item 2 */}
          <div onClick={() => setUp((!up))} className=" faq__item md:px-[30px] px-[8px] pt-7 pb-4 border-b cursor-pointer select-none">
            {/* title icon */}
            <div className=" flex items-center justify-between mb-[10px]">
              {/* title */}
              <h4 className=" h4">
                Will we get healthcare updates after surgery
              </h4>
              {/* icon */}
              <div className=" faq__btn  text-primary">
                <p className=" text-2xl"><i class="fa-solid fa-plus"></i></p>
              </div>


              {
                up && (
                  <div className=" faq__btn  text-primary">
                  <p className=" text-2xl"><i class="fa-solid fa-minus"></i></p>
                </div>
                )
              }
            </div>
            {/* answer text */}
         {
          up && (
            <div className=" faq__answer">
            <p>
              {" "}
              I believe that a great user interface is critical to the success
              of any digital product and i work closely with my clients to
              craft designs that are clients to craft designs that are
            </p>
          </div>
          )
         }
          </div>

          {/* item 3 */}
          <div onClick={() => setDown((!down))} className=" faq__item md:px-[30px] px-[8px] pt-7 pb-4 border-b cursor-pointer select-none">
            {/* title icon */}
            <div className=" flex items-center justify-between mb-[10px]">
              {/* title */}
              <h4 className=" h4">
                What preparations are necessary before undergoing surgery ?
              </h4>
              {/* icon */}
              <div className=" faq__btn  text-primary">
                <p className=" text-2xl"><i class="fa-solid fa-plus"></i></p>
              </div>


              {
                down && (
                  <div className=" faq__btn  text-primary">
                  <p className=" text-2xl"><i class="fa-solid fa-minus"></i></p>
                </div>
                )
              }
            </div>
            {/* answer text */}
          {
            down && (
              <div className=" faq__answer">
              <p>
                {" "}
                I believe that a great user interface is critical to the success
                of any digital product and i work closely with my clients to
                craft designs that are clients to craft designs that are
              </p>
            </div>
            )
          }
          </div>

          {/* item 4 */}
          <div onClick={() => setMap((!map))} className=" faq__item md:px-[30px] px-[8px] pt-7 pb-4 border-b cursor-pointer select-none">
            {/* title icon */}
            <div className=" flex items-center justify-between mb-[10px]">
              {/* title */}
              <h4 className=" h4">
                How long will it take to recover after the surgery ?
              </h4>
              {/* icon */}
              <div className=" faq__btn  text-primary">
                <p className=" text-2xl"><i class="fa-solid fa-plus"></i></p>
              </div>

              {
                map && (
                  <div className=" faq__btn  text-primary">
                  <p className=" text-2xl"><i class="fa-solid fa-minus"></i></p>
                </div>
                )
              }
            </div>
            {/* answer text */}
          {
            map && (
              <div className=" faq__answer">
              <p>
                {" "}
                I believe that a great user interface is critical to the success
                of any digital product and i work closely with my clients to
                craft designs that are clients to craft designs that are
              </p>
            </div>
            )
          }
          </div>
        </div>
      </div>
    </section>
  );
}

export default Question;
