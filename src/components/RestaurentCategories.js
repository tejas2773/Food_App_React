import { useState } from "react"
import MenuCards from "./MenuList"

const RestaurentCategories = ({ data }) => {
    const [showItem, setshowItem] = useState(false)
    console.log(data)
    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
                <div className=" flex justify-between" onClick={() => {
                    setshowItem(!showItem)
                }}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span>🡇</span>
                </div>
                {
                    showItem && <MenuCards items={data.itemCards} />
                }
            </div>
        </div>


    )
}

export default RestaurentCategories