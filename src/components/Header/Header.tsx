import { MdOutlineEast } from "react-icons/md";

const Header = () => {
  return (
    <header className="w-full h-auto p-3 flex justify-center items-center">
      <nav className="w-full h-18 px-5 py-2 rounded-full border-2 bg-white shadow-lg flex justify-between items-center">
        <h1 className="font-sans text-2xl font-bold text-slate-800 tracking-wide">
          Fin
          <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
            der
          </span>
        </h1>
        <ul className="flex justify-center items-center space-x-12">
          <li className="group relative hover:text-blue-600 hover:font-semibold text-gray-700 font-medium cursor-pointer transition-all duration-300">
            Home
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-[29%]"></span>
            <span className="absolute right-0 bottom-0 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-[69%]"></span>
          </li>
          <li className="group relative hover:text-blue-600 hover:font-semibold text-gray-700 font-medium cursor-pointer transition-all duration-300">
            Docs
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-[29%]"></span>
            <span className="absolute right-0 bottom-0 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-[69%]"></span>
          </li>
          <li className="group relative hover:text-blue-600 hover:font-semibold text-gray-700 font-medium cursor-pointer transition-all duration-300">
            Plans
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-[29%]"></span>
            <span className="absolute right-0 bottom-0 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-[69%]"></span>
          </li>
          <li className="group relative hover:text-blue-600 hover:font-semibold text-gray-700 font-medium cursor-pointer transition-all duration-300">
            About
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-[29%]"></span>
            <span className="absolute right-0 bottom-0 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-[69%]"></span>
          </li>
          <li className="group relative hover:text-blue-600 hover:font-semibold text-gray-700 font-medium cursor-pointer transition-all duration-300">
            Contact Us
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-[29%]"></span>
            <span className="absolute right-0 bottom-0 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-[69%]"></span>
          </li>
        </ul>
        <button className="px-6 py-2 flex gap-1 justify-center items-center bg-gradient-to-r from-blue-500 to-sky-500 text-white rounded-full font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-sky-600 hover:to-blue-600 hover:shadow-lg cursor-pointer">
          Login <MdOutlineEast />
        </button>
      </nav>
    </header>
  );
};

export default Header;
