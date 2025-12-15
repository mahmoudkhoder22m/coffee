import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Autoplay } from "swiper/modules";

import logo1 from"../../pic/logo1.png";
import logo2 from"../../pic/logo2.png";
import logo3 from"../../pic/logo3.png";
import logo4 from"../../pic/logo4.png";


export default function Swipe() {
    return (
        <div className="swipe ;
;
 "> 
 <div className="w-full bg-[ #E2D9C8] h-fit p-4 flex justify-center items-center">
      <Swiper 
      modules={[Autoplay]}
      slidesPerView={3}
      spaceBetween={30}
      loop={true}
      speed={2000}
      autoplay={{delay:2000,
        pauseOnMouseEnter: true,   disableOnInteraction: false,
      }}>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center gap-1 transition-transform duration-300 hover:scale-110 ">
            <img src={logo1} alt="slide 1" className="w-18 h-18 object-contain "/>
            <a href="#"  className="text-black">Cold Coffee</a>

          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="flex flex-col justify-center items-center gap-1.5 transition-transform duration-300 hover:scale-110">
            <img src={logo2} alt="slide 1" className="w-17 h-17 object-contain "/>
            <a href="#" className="text-black">Hot Coffee</a>

          </div>

        </SwiperSlide>

        <SwiperSlide>
        <div className="flex flex-col justify-center items-center gap-1.5 transition-transform duration-300 hover:scale-110">
            <img src={logo3} alt="slide 1" className="w-17 h-17 object-contain"/>
            <a  href="#" className="text-black"> Cup Coffee</a>

          </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col justify-center items-center gap-1.5 transition-transform duration-300 hover:scale-110">
           <a href="#">
            <img src={logo4} alt="slide 1" className="w-17 h-17 object-contain"/>
            </a> 
            <a href="#" className="text-black">Dessert</a>

          </div>
        </SwiperSlide>
      </Swiper>
    </div>        
        
        </div>
    )
}