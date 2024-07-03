/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FaEye } from "react-icons/fa";

const Input = ({ placeholder, eye }) => {
  return (
    <div className="filed w-full relative bg-white rounded-lg border flex items-center   border-gray-200">
      <input
        type="text"
        className="w-full h-full rounded-lg  py-2 px-3 text-zinc-400 text-xs font-normal font-['Poppins'] leading-none"
        placeholder={placeholder}
      />
      {eye && (
        <FaEye className="absolute top-[30%] right-[5%] size-4 text-[#6D747A]" />
      )}
    </div>
  );
};

export default Input;
