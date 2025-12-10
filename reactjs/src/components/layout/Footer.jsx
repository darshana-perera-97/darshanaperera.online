import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 sm:py-14 flex items-center justify-center">
      <div className="container">
        <div className="flex flex-col gap-1.5 items-center sm:items-start">
          <div className="relative flex items-center w-full">
            <div className="flex-grow h-px bg-black" />
            <div className="mx-4">
              <Logo />
            </div>
            <div className="flex-grow h-px bg-black" />
          </div>
          <div className="w-full flex items-center justify-center mt-4 sm:mt-6 md:mt-8 px-4">
            <p className="text-xs sm:text-sm text-secondary text-center">
              © {currentYear}{" "}
              <a
                href="https://www.darshanaperera.online"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                Darshana Perera
              </a>
              . All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

