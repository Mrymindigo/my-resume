import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const allPortfolios = [
    { id: 1, image: "/image/Feminine Life.jpg", alt: "store" },
    { id: 2, image: "/image/Modern.jpg", alt: "feminine life" },
    { id: 3, image: "/image/more details.jpg", alt: "ui,ux" },
    { id: 4, image: "/image/Web Design.jpg", alt: "working desk" }
];

export default function PortfolioItem() {
    return (
        <div className="mainView">
            {/* desktop */}
            <div className="desktop hidden md:block">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation
                    pagination={{
                        clickable: true,
                        el: '.custom-pagination',
                      }}
                    loop={false}
                    observer={true}
                    observeParents={true}
                >
                    {allPortfolios.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="flex flex-col items-center">
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    className="rounded-2xl shadow-md w-full h-100 object-cover"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="custom-pagination mt-4 flex justify-center"></div>
            </div>
            {/* موبایل */}
            <div className="flex flex-col gap-4 md:hidden">
                {allPortfolios.map((item) => (
                    <div key={item.id}>
                        <img
                            src={item.image}
                            alt={item.alt}
                            className="rounded-2xl shadow-md w-full h-60 object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

// export default function PortfolioItem(props) {
//     let {image , alt}=props
//   return (
//    <>
//    <div className="portfolioImg w-[30%] h-[50%]">
//     <img src= {image} alt={alt} />
//    </div>
//    </>
//   )
// }
