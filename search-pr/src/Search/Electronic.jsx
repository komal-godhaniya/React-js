// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom';

// export default function Electronic() {
//     const navigate = useNavigate();
//     navigate("/")
  
//     return (
//     <div> 
//         <Link><h1>Electronic</h1></Link>
//         <input type="text" placeholder='Search' />
//     </div>
//   )
// }



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Electronic() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  let arr = [
    {
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/hair-straightener/h/e/x/-original-imagky3myujy5rar.jpeg?q=70",
      name: "hair Straitner", 
       price: "₹999" ,
    },
    {
      img:"https://rukminim2.flixcart.com/image/312/312/xif0q/mixer-grinder-juicer/y/x/v/-original-imagrzqypq5kedru.jpeg?q=70",
      name: "mixer grinder", 
      price: "₹1,299" ,
    },
    {
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/u/p/8/-original-imah4vcukghh8jh8.jpeg?q=70",
      name: "boAt airdopes 131 pro", 
       price: "₹1,199" ,
    },
    {
      img:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/e/g/-original-imah4sssfvvahchb.jpeg?q=70",
      name: "Samsung galaxy A14 5G", 
       price: "₹10,999" ,
    },
    {
      img:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/i/7/-original-imahfu766ybd5h4z.jpeg?q=70",
      name: "samsung Galaxy S24 Ultra", 
       price: "₹1,21,999" ,
    },
    {
      img:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/3/4/-original-imahyytukhkky5ew.jpeg?q=70",
      name: "vivoT3x5G", 
        price: "₹12,999" ,
     },
     {
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/mobile/m/e/3/-original-imah37gwn2xbvzhy.jpeg?q=70",
      name: "oppo K12x5G", 
        price: "₹15,999" ,
     },
     {
        img:"https://rukminim2.flixcart.com/image/312/312/xif0q/computer/v/m/3/-original-imah4qscy6zzverg.jpeg?q=70", 
        name: "hp 15s AMD Quad core", 
        price: "₹60,099" ,
     },
     {
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/hand-blender/l/a/l/-original-imahyjmnhf9kt4bz.jpeg?q=70",
      name: "PHILIPS 300 W Black Hand blender", 
        price: "₹2,029" ,
     },
     {
      img:"https://rukminim2.flixcart.com/image/612/612/l20rma80/sandwich-maker/9/l/h/-original-imagdggyzpb9phez.jpeg?q=70",
      name: "Non-stick sandwich maker", 
        price: "₹1,199" ,
     },
     {
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/pop-up-toaster/q/l/8/premium-grill-and-toast-sandwich-maker-gas-toaster-sandwich-original-imagxzf65zhafw6s.jpeg?q=70",
      name: "MILTON sandwich griller", 
        price: "₹305" ,
     },
     {
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/otg-new/r/p/c/1600-33184-agaro-25-original-imagqjpcgvxhy75g.jpeg?q=70",
      name: "25 Litter oven Toaster grill", 
        price: "₹4,449" ,
     },
     
     



];

  const data = arr.filter((item) => 
    item.name.includes(search) || item.price.includes(search) 
  );
  let handleClick = ()=>{
    navigate("/")

  }


  return (
    <div id='main'>
      <button id='back' onClick={handleClick}> Go Back</button>
      <Link > <p></p><h1>Electronic</h1></Link>

      <input type="text" placeholder='Search' onChange={(e) => setSearch(e.target.value)} />
                    
    <div className='main'>
      {
        // data.length > 0 ? (
          data.map((e, i) => {
            return (
                <div key={i} className='item1'>
                    <center>
                        <img className='cloth_img' src= {e.img} alt="" />
                        <h3>{e.name}</h3>
                        <h4>{e.price}</h4>
                        <button className='cloth_btn'>Buy Now</button>
                    </center>
                </div>
            )
          })
        // ) : <p>No results found</p>
      }
     </div>

    </div>
  );
}


