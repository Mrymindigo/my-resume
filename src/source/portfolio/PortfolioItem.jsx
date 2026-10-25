import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const allPortfolios = [
    { id: 1, image: "/image/Dashboard.png", alt: "store", src: 'https://admindashboardmanagement.netlify.app/' },
    { id: 2, image: "/image/Modern.jpg", alt: "feminine life", src: 'https://admindashboardmanagement.netlify.app/' },
    { id: 3, image: "/image/more details.jpg", alt: "ui,ux", src: 'https://admindashboardmanagement.netlify.app/' },
    { id: 4, image: "/image/Web Design.jpg", alt: "working desk", src: 'https://admindashboardmanagement.netlify.app/' }
];

export default function PortfolioItem() {
    return (
        <div className="mainView">
            {/* desktop */}
            <div className="desktop hidden md:block cursor-pointer">
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
                                <a
                                    href={item.src}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full cursor-pointer"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.alt}
                                        className="rounded-2xl shadow-md w-full h-100 object-cover object-fill"
                                    />
                                </a>

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
                        <a
                            href={item.src}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full cursor-pointer"
                        >
                            <img
                                src={item.image}
                                alt={item.alt}
                                className="rounded-2xl shadow-md w-full h-60 object-cover"
                            />
                        </a>

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
