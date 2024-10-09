import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Furniture() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  let arr = [
    {
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-sectional/r/g/x/symmetrical-78-74-berry-blue-78-74-jute-no-33-wkupmushy-wakeup-original-imah47ntfpswehqz.jpeg?q=70",
      name: "Fabric pocket spring couch(blue)", 
       price: "₹9,469" ,
    },
    {
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-sectional/t/d/6/symmetrical-96-52-orange-78-74-velvet-no-33-mushy-premium-fabric-original-imah47xfrvp6svaj.jpeg?q=70",
      name: "Fabric pocket spring couch(orange)", 
       price: "₹9,469" ,
    },
    {
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/recliner/0/4/3/-original-imagt79ngyech7kh.jpeg?q=70",
      name: "velvet manual single sofa", 
       price: "₹9,999" ,
    },
    {
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/recliner/0/3/g/-original-imah3cremczkyemc.jpeg?q=70",
      name: "orange manual single sofa", 
       price: "₹9,599" ,
    },
    {
      img:"https://rukminim2.flixcart.com/image/612/612/ku8pbbk0/table-lamp/9/h/b/eureka-polka-wood-table-lamp-bedside-distressed-living-room-original-imag7eghgzmfkzrq.jpeg?q=70",
      name: "Polka wood table lamp", 
       price: "₹1,450" ,
    },
    {
      img:"https://rukminim2.flixcart.com/image/612/612/ko62xzk0/stool/m/x/l/round-wooden-stool-heena-engineers-original-imag2zxhg7ygmev5.jpeg?q=70",
      name: "wooden round shape table", 
        price: "₹499" ,
     },
     {
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/coffee-table/k/a/j/3-5-mango-wood-10-1-naturecrafts-wooden-coffee-table-square-original-imahyu3utwfwpufq.jpeg?q=70",
      name: "Foldable table / stool", 
        price: "₹3,456" ,
     },
     {
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/vase/p/g/y/5-squerg-jhsfd-16-original-imah4kv8urfaxqyg.jpeg?q=70",
      name: "planter for room and balcony", 
        price: "₹935" ,
     },
     {
      img:"https://rukminim2.flixcart.com/image/612/612/l0sgyvk0/vase/r/z/s/5-planters-ads1-amaya-decors-5-original-imagchs9pxpw859v.jpeg?q=70",
      name: "gold apple planter", 
        price: "₹699" ,
     },
     {
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/shoe-rack/v/p/1/30-66-0-8-shoerack-19-tajcollections-black-88-original-imah3gybscgwkvnr.jpeg?q=70",
      name: "matel shoe stand", 
        price: "₹377" ,
     },
     {
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/coffee-table/q/k/b/-original-imagtjkgcchyfbhr.jpeg?q=70",
      name: "WOOD coffee table", 
        price: "₹2,069" ,
     },
     {
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/dining-set/b/7/g/114-3-na-57-15-0-rosewood-sheesham-25-rectangle-43-18-86-36-25-original-imahfq25pygcdc5m.jpeg?q=70",
      name: "Beautiful dinning wooden set", 
        price: "₹17,499" ,
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
      <Link > <p></p><h1>Furniture</h1></Link>

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


