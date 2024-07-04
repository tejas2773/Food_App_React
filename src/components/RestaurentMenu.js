
import "../style/RestaurentMenu.css"
import useRestaurentMenu from '../utils/useRestaurentMenu';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { CDN_URL, MENU_API } from '../utils/constants';
import RestaurentCategories from "./RestaurentCategories";

const RestaurentMenu = () => {
  const { resId } = useParams()       //  useParams-it collect dynamic url and stored into resId
  const menu = useRestaurentMenu(resId)   // custom hook 


  if (!menu) {
    return <Shimmer />;
  }

  const restaurantInfo = menu.cards?.[2]?.card?.card?.info;
  // console.log(menu.cards?.[2]?.card?.card?.info)
  const Categories = menu.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((i) => i.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  // console.log(Categories)
  if (!restaurantInfo) {
    return <Shimmer />;
  }

  const { name, areaName, avgRating, city, cuisines } = restaurantInfo;

  return (



    // <div className='text-center '>
    //   <h1 className="font-bold text-2xl">{name}</h1>
    //   <span>{avgRating}★</span>
    //   <h3>{areaName + city}</h3>
    //   <p className="font-bold text-lg">
    //     {cuisines.join(", ")}
    //   </p>
    //   <div>
    //     {Categories.map((i,index)=>{
    //       return(
    //         <RestaurentCategories key={index} data={i.card.card}/>
    //       )
    //     })}
    //   </div>
    // </div>

    <div className='text-center p-4 bg-gray-100'>
      <div className="flex justify-center items-center mb-2">
        <h1 className="font-bold text-2xl text-gray-800 px-5">{name}</h1>
        <span className="text-xl text-yellow-500">{avgRating}★</span>
      </div>
      <h3 className="text-gray-600 mb-2">{areaName + ", " + city}</h3>
      <p className="font-bold text-lg text-gray-700 mb-4">
        {cuisines.join(", ")}
      </p>
      <div className="mt-6">
        {Categories.map((i, index) => {
          return (
            <RestaurentCategories key={index} data={i.card.card} className="mb-4" />
          )
        })}
      </div>
    </div>

  );
};

export default RestaurentMenu;
