import React, { useState } from 'react'
import Car from './Car'

const CarData = () => {
    
    const [cardata,setCardata] = useState([
    {
        image:"https://cache4.pakwheels.com/ad_pictures/8171/kia-sorento-3-5-fwd-2022-81715819.webp",
        name:"KIA Sorento 2022",
        price:"PKR  9,800,000",
        place:"Karachi",
        route:"/car/info1",

    },
    {
        image:"https://cache2.pakwheels.com/ad_pictures/8277/mitsubishi-mirage-g-51-2014-82776037.webp",
        name:"Mitsubishi Mirage 2014",
        price:"  2,200,000",
        place:"Lahore",
        route:"/car/info2",
    }, 
    {
        image:"https://cache1.pakwheels.com/ad_pictures/8202/honda-br-v-i-vtec-s-2021-82028536.webp",
        name:"Honda BR-V 2021",
        price:"5,600,000",
        place:"Islamabad",
        route:"/car/info3",
    }, 
    {
        image:"https://cache1.pakwheels.com/ad_pictures/8052/honda-city-aspire-prosmatec-2014-80524716.webp",
        name:"Honda City 2014",
        price:"3,000,000",
        place:"Lahore",
        route:"/car/info4",
    }, 
    {
        image:"https://cache2.pakwheels.com/ad_pictures/8232/chery-tiggo-8-pro-1-6-dex-plus-2022-82320209.webp",
        name:"Chery Tiggo 8 Pro 2022",
        price:"10,200,000",
        place:"Islamabad",
        route:"/car/info5",
    }, 
    {
        image:"https://cache4.pakwheels.com/ad_pictures/8273/honda-city-1-5l-cvt-2022-82733369.webp",
        name:"Honda City 2022",
        price:"5,400,000",
        place:"Lahore",
        route:"/car/info6",
    }, 
    ])
  return (
    <>

    <Car carcard={cardata}/>

    </>
  )
}

export default CarData