import Link from "next/link";


const NavLink = ({ section, onClick, title, selectTab, active }) => {
  
  const buttonClasses = active ? 'text-green-300 transform -translate-y-0.5' : 'text-white';
  
  const handleClick = () => {
    onClick(section);
    selectTab(section);
  };

  return (
      <button
        className={`block p-4 text-[#ADB&BE] text-base rounded md:p-0 ${buttonClasses} transition ease-in-out`}
        onClick={handleClick}
      >     
        {title}
      </button>
  );
};

export default NavLink;
