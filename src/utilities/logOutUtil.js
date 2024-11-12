import { useEffect, useState } from "react"
import expireCookie from "./expireCookie";
import readCookie from "./readCookie";



const logOutUtil = async (isLoggedIn, setisLoggedIn) => {
    await setisLoggedIn(false);
    expireCookie("jwt_token");

    console.log(readCookie("jwt_key"));
}  


export default logOutUtil;