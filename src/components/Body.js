
import useRestaurentCards from "../utils/useRestaurentCards";
import RestaurantCard ,{withPromotedLabel}from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    
    const [filterRestaurent, setfilterRestaurent] = useState([]);    // Filtered list of restaurants
    const [searchText, setsearchText] = useState("");

    
    const listofrestaurent = useRestaurentCards();  // custom hook -- Holds 20 restaurant cards
    const RestaurantCardPromoted=withPromotedLabel(RestaurantCard)   // higher order function
    const OnlineStatus=useOnlineStatus()
    useEffect(() => {
        setfilterRestaurent(listofrestaurent);
    }, [listofrestaurent]);

    console.log(filterRestaurent)

    const handleSearch = () => {
        const filterList = listofrestaurent.filter(
            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setfilterRestaurent(filterList);
    };

    const handleTopRated = () => {
        const filterList = listofrestaurent.filter((i) =>
            i.info.avgRating > 4
        );
        setfilterRestaurent(filterList);
    };

    if (listofrestaurent.length === 0) {
        return <Shimmer />;
    }

    if (OnlineStatus===false) {
        return <h1>there is issue in network</h1>    // if user offline it shows msg instead of shimmer
    }
    

    return (
        <div className="body p-4">
    <div className="filter flex flex-col md:flex-row items-center mb-4">
        <input
            type="text"
            className="search-box p-2 border border-gray-300 rounded-md w-full md:w-1/3 mb-2 md:mb-0 md:mr-2"
            placeholder="Search by name..."
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
        />
        <button
            onClick={handleSearch}
            className="bg-blue-500 text-white py-2 px-4 rounded-md mb-2 md:mb-0 md:mr-2 hover:bg-blue-600 transition duration-200"
        >
            Search
        </button>
        <button
            className="filter-btn bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-200"
            onClick={handleTopRated}
        >
            Top rated restaurants
        </button>
    </div>

    <div className="res-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filterRestaurent.map((restaurant) => (
            <Link key={restaurant.info.id} to={"restaurent/" + restaurant.info.id}>
                {
                    restaurant.info.isOpen==true ?<RestaurantCardPromoted resData={restaurant} /> : <RestaurantCard resData={restaurant}/>
                }
            </Link>
        ))}
    </div>
</div>

    );
};

export default Body;
