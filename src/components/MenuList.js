import { useDispatch } from "react-redux"
import { CDN_URL } from "../utils/constants"
import { add } from "../Redux/Cartslice"

const MenuCards = ({ items }) => {
   const dispatch=useDispatch()
    // console.log(items)
    const addtocart=(i)=>{
        dispatch(add(i));
    }
    return (
        <div>
            {items.map((i) => (
                <div key={i.card.info.id} className="p-2 m-2 border-gray-400 border-b-2 text-left flex justify-between">
                    <div className="w-9/12" >
                    <div className="py-2">
                        <span>{i.card.info.name}</span>
                        <span> -: ₹{i.card.info.price / 100 || i.card.info.defaultPrice/100}</span>
                    </div>
                    <p className="text-xs">
                        {i.card.info.description}
                    </p>
                    </div>
                    <div className="w-3/12 p-4">
                    <div className="absolute">
                    <button className="p-2 text-white rounded-lg bg-black shadow-lg  m-auto " onClick={()=>addtocart(i)}>ADD +</button>
                    </div>
                    <img src={CDN_URL+i.card.info.imageId} className="w-full"></img>
                    </div>
                </div>

            ))}
        </div>

    )
}

export default MenuCards