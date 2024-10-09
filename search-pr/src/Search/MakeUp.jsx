import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function MakeUp() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  let arr = [
    {
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-eye-shadow/l/v/j/30-nude-and-rose-gold-eyeshadow-palette-combo-shimmery-finish-original-imahfzgtnfmggff3.jpeg?q=70",
      name: "Rose-Gold eyeshadow palette", 
       price: "₹157" ,
    },
    {
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/kajal/k/v/1/-original-imah48n2tffkkzjp.jpeg?q=70",
      name: "LAKME eyeconic collection", 
       price: "₹459" ,
    },
    {
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/lipstick/h/z/e/2-5-x-handaiyan-12-color-book-lip-gloss-set-liquid-lipstick-set-original-imah3nh6dujwmc6f.jpeg?q=70",
      name: "NANCY lip gloss set", 
       price: "₹319" ,
    },
    {
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/lipstick/v/6/d/-original-imagz7uea9brcuw5.jpeg?q=70",
      name: "LAKME primer + matte lipstick", 
       price: "₹718" ,
    },
    {
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/lip-gloss/5/u/d/-original-imagyys55ctgxptu.jpeg?q=70",
      name: "SWISS BEAUTY lip-gloss", 
       price: "₹250" ,
    },
    {
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/brush-applicator/u/g/m/-original-imagzn6nrsy5vdky.jpeg?q=70",
      name: "makeup brush applicator set of 15", 
        price: "₹155" ,
     },
     {
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/lip-balm/g/8/k/4-5-tipsy-lip-balm-long-lasting-moisturization-with-shea-butter-original-imah3fw2hbgzgfuz.jpeg?q=70",
      name: "SUGAR lip balm", 
        price: "₹147" ,
     },
     {
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/highlighter/2/m/f/7-5-brick-baked-highlighter-blusher-mars-original-imah2hfjzthy3kwx.jpeg?q=70",
      name: "MARS baked highlighter", 
        price: "₹279" ,
     },
     {
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/lipstick/v/6/d/-original-imagz7uea9brcuw5.jpeg?q=70",
      name: "PONDS light gel moisturise", 
        price: "₹274" ,
     },
     {
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/compact/6/6/z/-original-imah2jt8pvtvknxh.jpeg?q=70",
      name: "SWISS beauty compact", 
        price: "₹374" ,
     },
     {
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/compact/6/6/z/-original-imah2jt8pvtvknxh.jpeg?q=70",
      name: "SUGAR SPF30 mist primer", 
        price: "₹589" ,
     },
     {
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/hair-serum/u/q/z/-original-imahyjgzjrwca8ap.jpeg?q=70",
      name: "LIVON hair serum", 
        price: "₹128" ,
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
      <Link > <p></p><h1>MakeUp</h1></Link>

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


