/* eslint-disable react/prop-types */
import { MdKeyboardArrowDown } from "react-icons/md";
const DropDown = ({ title, icon }) => {
  return (
    <div className="flex gap-2 items-center justify-center">
      <div className="icon">{icon}</div>
      <div className="content text-black text-sm font-medium font-['Poppins'] leading-snug">
        {title}
      </div>
      <div className="arrow-icon size-[24px] cursor-pointer">
        <MdKeyboardArrowDown className="text-[#939CA3] text-[24px] font-medium" />
      </div>
    </div>
  );
};

export default DropDown;
