import { IoSearchSharp } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="rounded-lg hidden sm:block relative h-[40px] w-[300px] border-[1px] border-[##EBEDF0]  text-[#939CA3] font-light text-sm leading-none">
      <input
        type="text"
        className="w-full h-full bg-[#F8F9FA] px-3"
        placeholder="Search here.."
      />
      <div className="search__icon h-full top-0 right-0 absolute w-10 rounded-tr-lg rounded-br-lg flex justify-center items-center  bg-[#8064A2]">
        <IoSearchSharp className="text-white" />
      </div>
    </div>
  );
};

export default SearchBar;
