import { CDN_URL } from "../utils/constants";
import "../style/RestaurentCard.css"
const RestaurantCard = (props) => {
    const { resData } = props;   // destructured into resData.
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData.info  // destructuring into different properties
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt="" />
            <h3>{name}</h3>
            <p>{cuisines.join(', ')}</p>
            <p>Rating: {avgRating}</p>
            <p>Cost for Two: {costForTwo}</p>
        </div>
    )
}

// Higher Order component
// it takes input - RestaurentCard returns component by call-back function

export const withPromotedLabel=(RestaurantCard)=>{
    return (props)=>{
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">open</label>
                <RestaurantCard {...props}/>     {/** spread operator (...) pass props to restaurentcard*/}
            </div>
        )
    }
}

export default RestaurantCard;