import Link from "next/link";

const NavLink = ({section, onClick, title }) => {
    return (
        <button className="block py-4 pl-3 pr-4 text-[#ADB&BE] text-base rounded md:p-0 text-white hover:text-green-300"
          onClick={() => onClick(section)}>
          {title}
        </button>
    );
};

export default NavLink
