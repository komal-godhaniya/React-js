import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Cloth() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  let arr = [
    {
       img:"https://rukminim2.flixcart.com/image/612/612/xif0q/dress/h/n/c/l-dr11424-sheetal-associates-original-imah3zthyygxc7ga.jpeg?q=70", 
       name: "Women Fit and Flare Dress", 
       price: "₹350" ,
    },
    {
       img:"https://rukminim2.flixcart.com/image/832/832/xif0q/dress/l/9/l/xxl-dr11425-sheetal-associates-original-imah3zthem6rgfpy.jpeg?q=70&crop=false", 
       name: "Women Fit and Flare Multicolor Dress", 
       price: "₹400" ,
    },
    {
       img:"https://rukminim2.flixcart.com/image/832/832/xif0q/dress/n/q/s/xl-0901-nexxer-original-imagxy73ttbgnahw.jpeg?q=70&crop=false"                      , 
       name: "Women A-line Multicolor Dress", 
       price: "₹452" ,
    },
    {
       img:"https://rukminim2.flixcart.com/image/612/612/xif0q/jean/2/k/g/32-j-1320-blue-kashian-original-imagz9cwk22hhgxv.jpeg?q=70", 
       name: "Women Boyfriend High Rise Blue Jeans", 
       price: "₹479" ,
    },
    {
       img:"https://rukminim2.flixcart.com/image/904/904/xif0q/jean/o/p/8/28-6-pocket-grey-skiiestreet-original-imagxmfpp4j8pndp.jpeg?q=70&crop=false", 
       name: "Women Boot-Leg Mid Rise Black Jeans", 
       price: "₹499" ,
    },
    {
        img:"https://rukminim2.flixcart.com/image/400/400/xif0q/cargo/r/n/g/36-5221-montrez-original-imagqh6b4p3wvdcq.jpeg?q=70",
        name: "Women Cargoo", 
        price: "₹599" ,
     },
     {
        img:"https://rukminim2.flixcart.com/image/1125/1125/xif0q/shirt/2/u/k/l-topaah-indicare-original-imahyq85zzskhh34.jpeg?q=70&crop=false",
        name: "Collar Casual Shirt(White)", 
        price: "₹285" ,
     },
     {
        img:"https://rukminim2.flixcart.com/image/3000/3000/xif0q/shirt/o/b/1/s-topaah-indicare-original-imah3h88hqvhahcq.jpeg?q=70&crop=false",
        name: "Collar Casual Shirt(Lavender)", 
        price: "₹300" ,
     },
     {
        img:"https://rukminim2.flixcart.com/image/1832/1832/xif0q/ethnic-set/m/u/9/s-chikan-kurta-htk-original-imagwgz8hjjynwg7.jpeg?q=70&crop=false",
        name: "Cotten Blend Duppata Set", 
        price: "₹749" ,
     },
     {
        img:"https://rukminim2.flixcart.com/image/2160/2160/xif0q/ethnic-set/k/h/l/xl-s988purple-vastranikhar-original-imagrfhhdqgs5wsm.jpeg?q=70&crop=false",
        name: "Viscode Kurta Set", 
        price: "₹699" ,
     },
     {
        img:"https://rukminim2.flixcart.com/image/400/400/xif0q/ethnic-set/w/s/1/xs-rudrama-3pc-rudrama-original-imahyxvsqj4y4cjw.jpeg?q=70",
        name: "Rayon Duppata Set", 
        price: "₹850" ,
     },
     {
        img:"https://rukminim2.flixcart.com/image/666/666/xif0q/kurta/6/q/s/xxl-choco-anarkali-anjaneya-original-imaggav3bnhfd7yh.jpeg?q=70&crop=false",
        name: "Cotten Anarkali", 
        price: "₹789" ,
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
      <Link > <p></p><h1>Cloth</h1></Link>

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

