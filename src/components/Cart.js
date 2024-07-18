import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { clearCart, remove } from "../Redux/Cartslice";

const Cart = () => {

    // "useselector" conneting to "store" and fetching data from "store.cart.items" & store into cartItems
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch()
    const removetocart = (id) => {
        dispatch(remove(id))
    }
    const ClearAll=()=>{
        dispatch(clearCart())
    }
    return (
        <div className="flex justify-center m-4 p-4">
            <div className="text-center w-full max-w-xl">
                <h1 className="text-2xl font-bold mb-4">Cart</h1>
                <button className="bg-slate-600 font-bold text-red-50 w-3/12 rounded-lg"
                onClick={ClearAll}> Clear Cart</button>
                <div>
                    {cartItems.map((i) => (
                        <div key={i.card.info.id} className="p-2 m-2 border-gray-400 border-b-2 text-left flex justify-between">
                            <div className="w-9/12" >
                                <div className="py-2">
                                    <span>{i.card.info.name}</span>
                                    <span> -: ₹{i.card.info.price / 100 || i.card.info.defaultPrice / 100}</span>
                                </div>
                                <p className="text-xs">
                                    {i.card.info.description}
                                </p>
                            </div>
                            <div className="w-3/12 p-4">
                                <div className="absolute">
                                    <button className="p-2 text-white rounded-lg bg-black shadow-lg  m-auto "
                                        onClick={() => removetocart(i.card.info.id)}>Remove</button>
                                </div>
                                <img src={CDN_URL + i.card.info.imageId} className="w-full"></img>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
}

export default Cart;
