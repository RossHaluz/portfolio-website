import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const NavbarSocials = () => {
  return (
    <div className="hidden md:flex items-center gap-4 w-1/3 justify-end">
      <Link href="/">
        <IoLogoGithub size={24} />
      </Link>
      <Link href="/">
        <FaLinkedin size={24} />
      </Link>
      <Link href="/">
        <FaFacebook size={24} />
      </Link>
      <Link href="/">
        <RiInstagramFill size={24} />
      </Link>
    </div>
  );
};

export default NavbarSocials;
