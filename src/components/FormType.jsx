/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { MdLock } from "react-icons/md";
import Input from "./Input";

const FormType = ({ type }) => {
  return (
    <div className="form flex  flex-col gap-6">
      <Input placeholder="Email" eye={false} />
      <Input placeholder="Password" eye={true} />
      <div className="action__btns flex  items-center justify-between">
        {type === "signIn" ? (
          <>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="size-4" />{" "}
              <span className="text-black text-xs">Remember me</span>
            </div>

            <div className="flex items-center gap-2">
              <MdLock className="size-4 text-[#939CA3]" />{" "}
              <span className="text-black text-xs">Forgot password?</span>
            </div>
          </>
        ) : (
          <div className="flex flex-col gap-2">
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-1">
                <div className="w-10 h-1 bg-white rounded-sm" />
                <div className="w-10 h-1 bg-white rounded-sm" />
                <div className="w-10 h-1 bg-white rounded-sm" />
              </div>
              <p className="text-zinc-400 text-[10px] font-semibold font-['Poppins'] leading-none">
                Password strength
              </p>
            </div>

            <div className="text-zinc-500 text-[9px] font-normal font-['Poppins']">
              By continuing, you agree to our
              <span className="text-zinc-950"> Terms of Service</span> and{" "}
              <span className="text-zinc-950">Privacy Policy</span>.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormType;
