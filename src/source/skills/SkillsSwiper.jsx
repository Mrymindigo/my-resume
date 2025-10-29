import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaSass, FaGit } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";

export default function SkillsSwiper() {
  const skills = [
    { id: 1, icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
    { id: 2, icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
    { id: 3, icon: <TbBrandJavascript className="text-yellow-400" />, name: "JavaScript" },
    { id: 4, icon: <FaReact className="text-cyan-400" />, name: "React" },
    { id: 5, icon: <RiTailwindCssFill className="text-sky-500" />, name: "Tailwind" },
    { id: 6, icon: <FaBootstrap className="text-purple-600" />, name: "Bootstrap" },
    { id: 7, icon: <FaSass className="text-pink-400" />, name: "Sass" },
    { id: 8, icon: <FaGit className="text-red-500" />, name: "Git" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-10">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={5}
        spaceBetween={30}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        loop
        className="flex items-center"
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {skills.map((skill) => (
          <SwiperSlide key={skill.id}>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 flex items-center justify-center rounded-full bg-[#e1dbcb] shadow-md hover:shadow-xl transition transform hover:scale-105">
                <div className="text-5xl">{skill.icon}</div>
              </div>
              <p className="mt-3 text-gray-700 font-semibold text-lg">{skill.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
