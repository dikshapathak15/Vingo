import React, { useEffect } from "react";
import { serverUrl } from "../App";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/userSlice";

function useGetCity() {
  const dispatch = useDispatch();
 useEffect(() => {
navigator.geolocation.getCurrentPosition(async(position)=> {
console.log(position);
})
 },[])
}

export default useGetCity;
