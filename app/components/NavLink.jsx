import Link from "next/link";

const NavLink = ({ href, title }) => {
    return (
        <Link href={href} className="block py-4 pl-3 pr-4 text-[#ADB&BE] text-lg rounded md:p-0 text-white hover:text-green-300">
          {title}
        </Link>
    );
};

export default NavLink
