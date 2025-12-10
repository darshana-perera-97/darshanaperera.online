import { Link } from "react-router-dom";
import { getImgPath } from "../../utils/path";

const Logo = () => {
  return (
    <Link to="/">
      <img
        src={getImgPath("/images/logo/logo.svg")}
        alt="logo"
        className="w-14 h-14"
        loading="lazy"
      />
    </Link>
  );
};

export default Logo;

