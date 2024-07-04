import { useState,useEffect } from "react"

const useRestaurentCards =()=>{
    
    const [listofrestaurent, setlistofrestaurent] =useState([])

    useEffect(()=>{
        fetchData()
    },[])
    
    const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.498825&lng=73.9378363&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json=await data.json()
        const restaurents=json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        console.log(restaurents)
        setlistofrestaurent(restaurents)
    }
    return listofrestaurent;
}

export default useRestaurentCards;