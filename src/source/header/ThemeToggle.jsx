import { useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      onClick={() => setDarkMode(!darkMode)}
      className={`
        w-20 h-9 flex items-center rounded-full p-1 cursor-pointer relative
        transition-colors duration-300
        ${darkMode ? "bg-gray-600" : "bg-gray-400"}
      `}
    >
      {/* دایره متحرک */}
      <div
        className={`
          bg-white w-7 h-7 rounded-full shadow-md transform
          transition-transform duration-300
          ${darkMode ? "translate-x-11" : "translate-x-0"}
        `}
      />

      {/* آیکون‌ها */}
      {darkMode ? (
        <Moon className="w-5 h-5 text-black absolute right-2" />
      ) : (
        <Sun className="w-5 h-5 text-yellow-600 absolute left-2" />
      )}
    </div>
  );
}
