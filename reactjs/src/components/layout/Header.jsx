import Logo from "./Logo";
import { getImgPath } from "../../utils/path";

const Header = () => {
  return (
    <header className="navbar top-0 left-0 z-[999] w-full absolute">
      <div className="container">
        <nav className="py-7">
          <div className="flex items-center gap-4 sm:gap-8">
            <Logo />
            <a
              href={getImgPath("/Darshana-Perera-Resume.pdf")}
              download="Darshana-Perera-Resume.pdf"
              className="relative overflow-hidden cursor-pointer w-fit py-2 sm:py-3 md:py-5 px-3 sm:px-4 md:px-7 border border-primary rounded-full group text-xs sm:text-sm md:text-xl"
            >
              <span className="relative z-10 font-medium text-black group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                <span className="hidden sm:inline">Download PDF Resume</span>
                <span className="sm:hidden">Download PDF</span>
              </span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

