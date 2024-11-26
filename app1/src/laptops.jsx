import { useEffect, useState } from "react";
import "./App.css";
import LaptopStore from "./laptopStore.js";



let Laptops = () => {
    
    const [Laptops, setLapTops] = useState([])

    useEffect(() => {
        setLapTops(LaptopStore)
    },
     []);



    return (
        <div className="container">
        <h3>Laptops</h3>
        <div className="laptop_overview">
            {Laptops && Laptops.length > 0 ?
            Laptops.map(item => 
            
            <div className="laptop-product">
                <img src={item.img} alt="no image" id={item.name} style={{width:"150px", height:"150px"}}/>
                <p>Name: {item.name}</p>
                <p>Prize: {item.prize}</p>
                <p>Qty: {item.qty}</p>
                <p><a href={item.link}>Visit site</a></p>
                
            </div>)
            : 
            (
                <p>No laptops</p>
            )}
        </div>
        </div>
    )
   
}

export default Laptops;




// const LaptopStore = [
//     {
//         name: '2025 New Portable Windows 11 i7 Laptop Computer PC Intel Core i7-7500U 14.1" Notebook Office Study Laptops PC',
//         image:"/src/laptopImages/laptop1.avif",
//         link: "https://www.aliexpress.com/item/1005007925694019.html?srcSns=sns_Copy&spreadType=socialShare&bizType=ProductDetail&social_params=60888189830&aff_fcid=4f607a109395401c84f7ac8a70f91b8b-1732585246056-07864-_Ex7AC85&tt=MG&aff_fsk=_Ex7AC85&aff_platform=default&sk=_Ex7AC85&aff_trace_key=4f607a109395401c84f7ac8a70f91b8b-1732585246056-07864-_Ex7AC85&shareId=60888189830&businessType=ProductDetail&platform=AE&terminal_id=cdbcfffcb0124609b673e53187a69b3a&afSmartRedirect=y",
//         prize:475807.48,
//         quantity:"1",
//         bulkPrize:"",
//         ram: "12GB RAM",
//         hardDrive:" 512GB SSD"
//     }, 
//     {
//         name: '2025 New Portable Windows 11 i7 Laptop Computer PC Intel Core i7-7500U 14.1" Notebook Office Study Laptops PC',
//         image:"/src/laptopImages/laptop1.avif",
//         link: "https://www.aliexpress.com/item/1005007925694019.html?srcSns=sns_Copy&spreadType=socialShare&bizType=ProductDetail&social_params=60888189830&aff_fcid=4f607a109395401c84f7ac8a70f91b8b-1732585246056-07864-_Ex7AC85&tt=MG&aff_fsk=_Ex7AC85&aff_platform=default&sk=_Ex7AC85&aff_trace_key=4f607a109395401c84f7ac8a70f91b8b-1732585246056-07864-_Ex7AC85&shareId=60888189830&businessType=ProductDetail&platform=AE&terminal_id=cdbcfffcb0124609b673e53187a69b3a&afSmartRedirect=y",
//         prize:475807.48,
//         quantity:"1",
//         bulkPrize:"",
//         ram: "12GB RAM",
//         hardDrive:" 512GB SSD"
//     }
// ];