import React from "react";

function Department() {
  return (
    <section className=" section">
      <div className="departments__bg bg-departments bg-cover md:bg-96 bg-center bg-no-repeat max-w-[1466px] mx-4 md:mx-auto rounded-[20px] px-6 md:px-0 py-12 md:pt-[80px] md:pb-[90px] relative min-h-[500px] flex items-center ">
        <div className=" container mx-auto">
          <div className=" flex flex-col md:flex-row gap-x-5">
            <div className=" md:w-[310px] flex flex-col gap-y-[30px] md:gap-y-[40px] font-medium uppercase text-center md:text-left text-base text-[#9ab4b7] md:text-[17px] mb-[50px] md:mb-0 md:pt-3 ">
              <div className=" cursor-pointer hover:text-accent transition-all">
                Laboratory Analysis
              </div>

              <div className=" cursor-pointer hover:text-accent transition-all">
                Cardiology Clinic
              </div>

              <div className=" cursor-pointer hover:text-accent transition-all">
               Gynecology Clinic
              </div>

              <div className=" cursor-pointer hover:text-accent transition-all">
              Pathology Clinic
              </div>

              <div className=" cursor-pointer hover:text-accent transition-all">
               Pediatrics Clinic
              </div>

              <div className=" cursor-pointer hover:text-accent transition-all">
              Neurology Clinic
              </div>
            </div>
            <div className=" md:w-[640px]">
              {/* title */}
              <h2 className=" h2 mb-[20px] text-center md:text-left">Cardiology Clinic</h2>
              {/* description */}

              <p className=" mb-[30px] text-justify md:text-left">
                {" "}
                I believe that a great user interface is critical to the success of any digital product and i work closely with my clients to craft designs that are clients to craft designs 
              <br/> <br/>
                I believe that a great user interface is critical to the success of any digital product and i work closely with my clients to craft designs that are clients to craft designs 

              </p>

              <div className=" flex flex-col md:flex-row items-center md:justify-between max-w-[555px] mb-[50px] mx-auto md:mx-4">
                <div className=" text-accent md:border-r border-[#dcdcdc] md:pr-6">Neurocritical Care</div>
                <div className=" text-accent md:border-r border-[#dcdcdc] md:pr-6">Neuro Oncology</div>
                <div className=" text-accent ">Geriatric Neurology</div>

              </div>
              <button className=" btn btn-lg btn-accent mx-auto md:mx-0">Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Department;
