"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    id: 1,
    url: "/",
    title: "Home",
  },
  {
    id: 2,
    url: "/about",
    title: "About me",
  },
  {
    id: 3,
    url: "/portfolio",
    title: "Portfolio",
  },
  {
    id: 4,
    url: "/contact",
    title: "Contact",
  },
];

const NavbarNavigagion = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-4  w-1/3">
      {links?.map(({ id, url, title }) => {
        return (
          <Link
            href={url}
            key={id}
            className={`rounded p-1 ${
              pathname === url && "bg-black text-white"
            }`}
          >
            {title}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavbarNavigagion;
