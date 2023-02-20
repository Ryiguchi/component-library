const DesktopNav = ({ navItems, color }) => {
  return (
    <ul className="flex gap-12 items-center ">
      {navItems.map((item, i) => (
        <li
          key={i}
          className={`transition-all duration-300 cursor-pointer hover:border-b-2 hover:border-[${color}]  border-b-2 border-white h-full flex items-center`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default DesktopNav;
