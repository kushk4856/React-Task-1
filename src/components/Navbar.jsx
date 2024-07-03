import logo from "../assets/HobbyCueB.png";
import DropDown from "./DropDown";
import MobNavbar from "./MobNavbar";
import SearchBar from "./SearchBar";
import { FaCompass } from "react-icons/fa";
import Badge from "../icons/Badge";
import Bookmark from "../icons/Bookmark";
import Bell from "../icons/Bell";
import Cart from "../icons/Cart";
import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <MobNavbar />
      <div className="hidden md:flex bg-white items-center justify-between gap-[2.7vw] py-5 md:px-6 lg:px-16 xl:px-24 shadow">
        <div className="left-nav flex gap-8 items-center">
          <div className="log">
            <img src={logo} alt="" />
          </div>
          <SearchBar />
        </div>
        <div className="right-nav flex gap-[1.66vw] items-center">
          <DropDown
            title="Explore"
            icon={<FaCompass className=" text-[#8064A2] size-6" />}
          />
          <DropDown title="Hobbies" icon={<Badge />} />

          <Bookmark />
          <Bell />
          <Cart />
          <Button />
        </div>
      </div>
    </>
  );
};

export default Navbar;
