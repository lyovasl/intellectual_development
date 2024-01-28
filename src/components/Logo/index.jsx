import { Link } from "react-router-dom";
import Image from "../../assets/svg/logo.png";

const Logo = () => {
  return (
    <Link to="/">
      <img src={Image} alt="Logo" />
    </Link>
  );
};

export default Logo;
