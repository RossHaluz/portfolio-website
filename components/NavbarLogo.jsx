import Link from "next/link";

const NavbarLogo = () => {
  return (
    <Link
      href="/"
      className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
    >
      <span className="text-white mr-1">Ross</span>
      <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
        .dev
      </span>
    </Link>
  );
};

export default NavbarLogo;
