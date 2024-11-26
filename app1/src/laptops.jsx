import { useState } from "react"

import LaptopStore from "./laptopStore"



let Laptops = () => {



    const [Laptops, setLapTops] = useState([LaptopStore])

    return (
        <>
        <div>
            {Laptops && Laptops.length > 0 ?
            Laptops.map(item => <div>{item.name}</div>)
            :null}
        </div>
        </>
    )
   
}

export default Laptops;