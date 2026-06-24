import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { serverUrl } from "../App";
import axios from "axios";
import { ClipLoader } from "react-spinners";

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newpassword, setNewPassword] = useState("")
  const [confirmpassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
 


  const handleSendOtp = async() =>{
    setLoading(true)
    try {
      const result = await axios.post(`${serverUrl}/api/auth/send-otp`, {email}, {withCredentials:true})
      console.log(result)
      setError("")
      setStep(2)
      setError(false)
       setLoading(false)
    } catch (error) {
         setError(error.response.data.message);
             setError(false)
             setLoading(false)
    }
  }


  const handleVerifyOtp = async() =>{
    setLoading(true)
    try {
      const result = await axios.post(`${serverUrl}/api/auth/verify-otp`, {email,otp}, {withCredentials:true})
      console.log(result)
      setError("")
      setStep(3)
          setError(false)
          setLoading(false)
    } catch (error) {
         setError(error.response.data.message);
             setError(false)
             setLoading(false)
    }
  }

  const handleResetPassword = async() =>{
    setLoading(true)
    if(newpassword != confirmpassword){
      return null
    }
    try {
      const result = await axios.post(`${serverUrl}/api/auth/reset-password`, {email, newpassword}, {withCredentials:true})
      console.log(result)
      setError("")
          setError(false)
          setLoading(false)
    navigate("/signin")
    } catch (error) {
           setError(error.response.data.message);
               setError(false)
               setLoading(false)
    }
  }

  return (
    <div className="flex w-full items-center justify-center min-h-screen p-4 bg-[#fff9f6]">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8 ">
        <div className="flex items-center gap-4 mb-4">
          <FaArrowLeftLong
            size={20}
            onClick={() => navigate("/signin")}
            className="text-[#ff4d2d] cursor-pointer"
          />
          <h1 className="text-xl font-bold text-center text-[#ff4d2d]">
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
              onClick={handleSendOtp} disabled={loading}
            >
              {loading?<ClipLoader size={20} color="white"/>:"Send Otp"}
            </button>
            
        <p className="text-red-500 text-center my-[10px]">{error}</p>
          </div>
        )}

        {step === 2 && (
          <div>
            {" "}
            <div className="mb-4">
              <label
                htmlFor="otp"
                className="block text-gray-700 font-medium mb-1"
              >
                OTP
              </label>
              <input
                type="number"
                className="w-full border-[1px] rounded-lg border-gray-200 px-3 py-2 focus:outline-none "
                placeholder="Enter your OTP"
                onChange={(e) => setOtp(e.target.value)}
                value={otp}
              />
            </div>
            <button
              className={`w-full mt-4 flex items-center justify-center gap-2 border rounded-lg px-4 py-2 transition duration-200 bg-[#ff4d2d] text-white hover:bg-[#e64323] cursor-pointer`}
                            onClick={handleVerifyOtp} disabled={loading}
            >
               {loading?<ClipLoader size={20} color="white"/>:"Verify"}
            </button>
            
        <p className="text-red-500 text-center my-[10px]">{error}</p>
          </div>
        )}

        {step === 3 && (
          <div>
            {" "}
            <div className="mb-4">
              <label
                htmlFor="newpassword"
                className="block text-gray-700 font-medium mb-1"
              >
                New Password
              </label>
              <input
                type="password"
                className="w-full border-[1px] rounded-lg border-gray-200 px-3 py-2 focus:outline-none "
                placeholder="Enter your new password"
                onChange={(e) => setNewPassword(e.target.value)}
                value={newpassword}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmNewPassword"
                className="block text-gray-700 font-medium mb-1"
              >
               Confirm Password
              </label>
              <input
                type="password"
                className="w-full border-[1px] rounded-lg border-gray-200 px-3 py-2 focus:outline-none "
                placeholder="Enter Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmpassword}
              />
            </div>
            <button
              className={`w-full mt-4 flex items-center justify-center gap-2 border rounded-lg px-4 py-2 transition duration-200 bg-[#ff4d2d] text-white hover:bg-[#e64323] cursor-pointer`}
                            onClick={handleResetPassword} disabled={loading}
            >
              {loading?<ClipLoader size={20} color="white"/>:"Reset Password"}
            </button>
            
        <p className="text-red-500 text-center my-[10px]">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
