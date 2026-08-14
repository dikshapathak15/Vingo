import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

function CreateEditShop() {
  const navigate = useNavigate();
  const {myShopData} = useSelector(state=>state.owner)

  return (
    <div className="felx justify-center flex-col items-center p-6 bg-gradient-to-br from-orange-50 relative to-white min-h-screen">
      <div
        className="absolute top-[20px] left-[20px] z-[10] mb-[10px]"
        onClick={()=>navigate("/")}
      >
        <IoArrowBackOutline size={35} className='text-[#ff4d2d]'/>
      </div>

      <div className="max-w-lg w-full bg-white shadow-xl rounded-2xl p-8 border border-orange-100">
        <div className="">
           <div></div>
           <div></div>
        </div>

      </div>
    </div>
  );
}

export default CreateEditShop;
