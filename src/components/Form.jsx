import GoogleIcon from "../icons/GoogleIcon";
import FacebookIcon from "../icons/FacebookIcon";
import FormType from "./FormType";

const Form = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="auth__btn flex justify-center items-center gap-10  text-base font-semibold font-['Poppins']">
        <div className="text-[#8064A2] ">Sign In</div>
        <div className="text-[#939CA3]">Join In</div>
      </div>
      <FormType type="signIn" />
      {/* ---btn  */}
      <div className="filed w-full bg-[#8064A2] py-2 cursor-pointer  rounded-lg border flex items-center justify-center  border-gray-200">
        <p className="text-white text-sm font-semibold font-['Poppins'] leading-none">
          Continue
        </p>
      </div>
      {/* ----with google or facebook--- */}
      <div className="w-full flex justify-center items-center">
        <h2 className="flex w-full justify-between items-center text-black text-xs font-semibold font-['Poppins'] leading-none">
          {" "}
          <div className="w-[30%] h-0.5 bg-gray-300" />
          Or connect with <div className="w-[30%] h-0.5 bg-gray-300" />
        </h2>
      </div>

      <div className="with__google flex bg-neutral-100 rounded-lg py-2 px-4 border border-[#8064A2] w-full justify-between items-center">
        <GoogleIcon />
        <div className="text-zinc-950 text-xs font-semibold font-['Poppins'] leading-none">
          Continue with Google
        </div>
        <div className="blank_div"></div>
      </div>
      <div className="with__facebook flex bg-neutral-100 rounded-lg py-2 px-4 border border-[#8064A2] w-full justify-between items-center">
        <FacebookIcon />
        <div className="text-zinc-950 text-xs font-semibold font-['Poppins'] leading-none">
          Continue with Facebook
        </div>
        <div className="blank_div"></div>
      </div>
    </div>
  );
};

export default Form;
