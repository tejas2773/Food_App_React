import { useState,useEffect } from "react"
import { MENU_API } from "./constants";

const useRestaurentMenu=(resId)=>{
    const [menu,setmenu]=useState([])
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData =async()=>{
        const response= await fetch(MENU_API+resId)
       const json=await response.json()
        setmenu(json.data)
        // console.log(json.data)
    }
    return menu;
}

export default useRestaurentMenu;