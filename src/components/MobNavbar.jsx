import logo from "../assets/HobbyCue.png";
import MenuIcon from "../icons/MenuIcon";
import NotifyIcon from "../icons/NotifyIcon";
import SearchIcon from "../icons/SearchIcon";
import SearchBar from "./SearchBar";

const MobNavbar = () => {
  return (
    <div className="flex md:hidden justify-between items-center h-12 bg-white shadow px-5">
      <div className="left-nav">
        <img src={logo} alt="" className="h-8" />
      </div>
      <div className="right-nav flex items-center gap-4 ">
        <div className="serach-icon">
          <SearchIcon />
          <SearchBar />
        </div>
        <div className="notify-icon">
          <NotifyIcon />
        </div>
        <div className="menu-icon">
          <MenuIcon />
        </div>
      </div>
    </div>
  );
};

export default MobNavbar;
