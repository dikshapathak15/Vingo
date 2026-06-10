import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [step, setStep] = useState(2);
  const [email, setEmail] = useState();
  const [otp, setOTP] = useState("");
  const navigate = useNavigate()
  return (
    <div className="flex w-full items-center justify-center min-h-screen p-4 bg-[#fff9f6]">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8 ">
        <div className="flex items-center gap-4 mb-4">
          <FaArrowLeftLong size={20} onClick={()=>navigate("/signin")} className="text-[#ff4d2d] cursor-pointer" />
          <h1 className="text-xl font-bold text-center text-[#ff4d2d]" >
            Forgot Password
          </h1>
        </div>
        {step === 1 && (
          <div>
            {" "}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-1"
              >
                Email
              </label>
              <input
                type="email"
                className="w-full border-[1px] rounded-lg border-gray-200 px-3 py-2 focus:outline-none "
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <button
              className={`w-full mt-4 flex items-center justify-center gap-2 border rounded-lg px-4 py-2 transition duration-200 bg-[#ff4d2d] text-white hover:bg-[#e64323] cursor-pointer`}
              
            >
              Send Otp
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            {" "}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-1"
              >
                OTP
              </label>
              <input
                type="email"
                className="w-full border-[1px] rounded-lg border-gray-200 px-3 py-2 focus:outline-none "
                placeholder="Enter your OTP"
                onChange={(e) => setOtp(e.target.value)}
                value={otp}
              />
            </div>
            <button
              className={`w-full mt-4 flex items-center justify-center gap-2 border rounded-lg px-4 py-2 transition duration-200 bg-[#ff4d2d] text-white hover:bg-[#e64323] cursor-pointer`}
              
            >
              Verify
            </button>
          </div>
        )}  

        {step === 3 && (
          <div>
            {" "}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-1"
              >
                OTP
              </label>
              <input
                type="email"
                className="w-full border-[1px] rounded-lg border-gray-200 px-3 py-2 focus:outline-none "
                placeholder="Enter your OTP"
                onChange={(e) => setOtp(e.target.value)}
                value={otp}
              />
            </div>
            <button
              className={`w-full mt-4 flex items-center justify-center gap-2 border rounded-lg px-4 py-2 transition duration-200 bg-[#ff4d2d] text-white hover:bg-[#e64323] cursor-pointer`}
              
            >
              Verify
            </button>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default ForgotPassword;
