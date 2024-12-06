import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-white md:text-white lg:text-paragraphColor font-semibold rounded md:p-0 hover:text-opacity-50"
    >
      {title}
    </Link>
  );
};

export default NavLink;