import React from 'react'

function Footer() {
  return (
    <section className='footer pt-12 md:pt-[150px]'>
<div className=' containe mx-auto pb-12 md:pb-[100px] px-8' >
    <div className=' flex flex-col md:flex-row  gap-x-5 gap-y-10'>
        <div className='footer__item flex-1'>
            <h3><a href='#' className='h3 mb-[30px]'>Steroxy</a></h3>
            <p className='mb-[20px]'> It's normal to feel anxiety, worry and grief any time you're</p>

            <div className=' flex flex-col gap-y-3 mb-10'>
                <div className=' flex items-center gap-x-[6px]'>
                    <div>123 Arling, Miola</div>
                    <p ><i class="fa-solid fa-location-dot text-[24px] text-accent"></i></p>
                </div>

                <div className=' flex items-center gap-x-[6px]'>
                    <div>dexsteroxy1234@gmail.com</div>
                    <i class="fa-solid fa-envelope text-[24px] text-accent"></i>
                </div>
                
                <div className=' flex items-center gap-x-[6px]'>
                    <div>(+123) 901 894 4777</div>
                    <p ><i class="fa-solid fa-phone-volume text-[24px] text-accent"></i></p>
                </div>
            </div>

          <div className='flex items-center gap-[14px]'>
          <div className=' flex gap-[14px] text-[30px]'>
                <div className=' p-[10px] rounded-[10px] shadow-custom1 text-accent-tertiary hover:text-accent transition-all cursor-pointer'>
                <i class="fa-brands fa-facebook"></i>
                </div>
            </div>

            <div className=' flex gap-[14px] text-[30px]'>
                <div className=' p-[10px] rounded-[10px] shadow-custom1 text-accent-tertiary hover:text-accent transition-all cursor-pointer'>
                <i class="fa-brands fa-twitter"></i>
                </div>
            </div>

            <div className=' flex gap-[14px] text-[30px]'>
                <div className=' p-[10px] rounded-[10px] shadow-custom1 text-accent-tertiary hover:text-accent transition-all cursor-pointer'>
                <i class="fa-brands fa-instagram"></i>
                </div>
            </div>

            <div className=' flex gap-[14px] text-[30px]'>
                <div className=' p-[10px] rounded-[10px] shadow-custom1 text-accent-tertiary hover:text-accent transition-all cursor-pointer'>
                <i class="fa-brands fa-linkedin"></i>
                </div>
            </div>
          </div>
        </div>

        <div className='footer__item flex-1'>
            <h4 className='h4 mb-5'>Quick Links</h4>
            <div className=' flex gap-x-5'>
                <ul className=' flex-1 flex flex-col gap-y-5'>
                    <li><a href='#' className=' hover:text-accent transition-all'></a>Home</li>

                    <li><a href='#' className=' hover:text-accent transition-all'></a>Doctors</li>

                    <li><a href='#' className=' hover:text-accent transition-all'></a>Department</li>

                    <li><a href='#' className=' hover:text-accent transition-all'></a>Services</li>

                    <li><a href='#' className=' hover:text-accent transition-all'></a>Blog</li>

                  
                </ul>

                <ul className=' flex-1 flex flex-col gap-y-5'>
                    <li><a href='#' className=' hover:text-accent transition-all'></a>Our Pricing</li>

                    <li><a href='#' className=' hover:text-accent transition-all'></a>Contact</li>

                    <li><a href='#' className=' hover:text-accent transition-all'></a>Careers</li>

                    <li><a href='#' className=' hover:text-accent transition-all'></a>Faq</li>

                    <li><a href='#' className=' hover:text-accent transition-all'></a> Policy</li>

                  
                </ul>
            </div>
        </div>

        <div className='footer__item flex-1'>
        <h4 className='h4 mb-5'>Opening Hours</h4>
        <div className=' flex flex-col gap-5'>
            <div className=' flex-1'>
                <div className=' flex justify-between items-center border-b pb-[10px]'>
                    <div>Monday - Thursday</div>
                    <div className=' text-accent font-medium'>8:00 Am - 6:00 Pm</div>
                </div>
            </div>







            <div className=' flex-1'>
                <div className=' flex justify-between items-center border-b pb-[10px]'>
                    <div>Friday - Saturday</div>
                    <div className=' text-accent font-medium'>10:00 Am - 4:00 Pm</div>
                </div>
            </div>




            <div className=' flex-1'>
                <div className=' flex justify-between items-center border-b pb-[10px]'>
                    <div>sunday</div>
                    <div className=' text-accent font-medium'>Emergency Only</div>
                </div>
            </div>





            <div className=' flex-1'>
                <div className=' flex justify-between items-center border-b pb-[10px]'>
                    <div>Personal</div>
                    <div className=' text-accent font-medium'>7:00 Am - 8:00 Am</div>
                </div>
            </div>




            <div className=' flex-1'>
                <div className=' flex justify-between items-center border-b pb-[10px]'>
                    <div>Tuesday - Wednesday</div>
                    <div className=' text-accent font-medium'>12:00 pm - 2:00 Pm</div>
                </div>
            </div>
        </div>
        </div>
    </div>
</div>
<div className=' py-[30px] border-t'>
    <div className=' container mx-auto text-center'>
        <div className=' text-base font-light'>&copy; 2023 Steroxy - All rights reserved.</div>
    </div>
</div>
    </section>
  )
}

export default Footer