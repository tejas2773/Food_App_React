
const Cart=()=>{
    return(
        <div  className="p-2 m-2 border-gray-400 border-b-2 text-left flex justify-between">
                    <div className="w-9/12" >
                    <div className="py-2">
                        <span>Header</span>
                        <span>RS -: ₹</span>
                    </div>
                    <p className="text-xs">
                        
                    </p>
                    </div>
                    <div className="w-3/12 p-4">
                    <div className="absolute">
                    <button className="p-2 text-white rounded-lg bg-black shadow-lg  m-auto ">ADD +</button>
                    </div>
                    <img className="w-full"></img>
                    </div>
                </div>
    )
}

export default Cart;