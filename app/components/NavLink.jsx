import Link from "next/link";

const NavLink = ({ href, title }) => {
    return (
        <Link href={href} className="block py-2 pl-3 pr-4 text-[#ADB&BE] sm:text-xl rounded md:p-0 text-white hover:text-green-300">
          {title}
        </Link>
    );
};

export default NavLink
