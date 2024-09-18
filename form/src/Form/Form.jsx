// import React, { useState, useRef } from 'react';

// export default function Form() {
//   let [fname, setFname] = useState('');
//   let [lname, setLname] = useState('');
//   let [email, setMail] = useState('');
//   let [pass, setPass] = useState('');
//   let [category, setCategory] = useState('');

//   const [mailerr, setEmailErr] = useState('');
//   const [passerr, setPassErr] = useState('');
//   const [categoryErr, setCategoryErr] = useState('');

//   const formRef = useRef(null); // useRef to reference the form

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Reset errors before validation
//     setEmailErr('');
//     setPassErr('');
//     setCategoryErr('');

//     // EMAIL-VALIDATION
//     if (email === '' || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
//       setEmailErr('Enter Valid Email');
//     }

//     // PASSWORD-VALIDATION
//     if (pass === '' || !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(pass)) {
//       setPassErr('Enter Password like..Testing193!');
//     }

//     // CATEGORY VALIDATION
//     if (category === '') {
//       setCategoryErr('Choose Any One Category');
//     }

//     // SHOW DETAILS IN CONSOLE AND HIDE FORM
//     if (email !== '' && pass !== '' && category !== '' && mailerr === '' && passerr === '' && categoryErr === '') {
//       let obj = {
//         Firstname: fname,
//         Lastname: lname,
//         Email: email,
//         Password: pass,
//         Category: category,
//       };

//       console.log('Form Submitted:', obj);

//       // Clear form fields
//       setFname('');
//       setLname('');
//       setMail('');
//       setPass('');
//       setCategory('');

//       // Hide the form by changing the display style
//       formRef.current.style.display = 'none';
//     }
//   };

//   return (
//     <div id="main">
//       {/* Reference to the form using useRef */}
//       <div id="part-1" ref={formRef}>
//         <form onSubmit={(e) => handleSubmit(e)}>
//           <input
//             type="text"
//             placeholder="First Name"
//             value={fname}
//             onChange={(e) => setFname(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Last Name"
//             value={lname}
//             onChange={(e) => setLname(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Email Address"
//             value={email}
//             onChange={(e) => setMail(e.target.value)}
//           />
//           <span>{mailerr}</span>
//           <input
//             type="password"
//             placeholder="Password"
//             value={pass}
//             onChange={(e) => setPass(e.target.value)}
//           />
//           <span>{passerr}</span>

//           <select value={category} onChange={(e) => setCategory(e.target.value)}>
//             <option value="">Category</option>
//             <option value="kitchenware">Kitchenware</option>
//             <option value="electronic">Electronic</option>
//             <option value="clothing">Clothing</option>
//             <option value="food">Food</option>
//             <option value="toys">Toys</option>
//           </select>
//           <span>{categoryErr}</span>

//           <button type="submit" id="submit">
//             Submit
//           </button>
//         </form>
//       </div>

//       {/* Conditionally render part-2 if the form is submitted successfully and the category is "kitchenware" */}
//       {category === 'kitchenware'  
//             && email !== '' 
//             && pass !== '' 
//             && categoryErr === '' 
//             && mailerr === '' 
//             && passerr === ''  && (
//         <div id="part-2" style={{
//             height: '300px',
//             width: '300px',
//             backgroundColor: 'blue',
//             marginTop: '20px',
//           }}
//         ></div>
//       )}
//     </div>
//   );
// }



// import React, { useState, useRef } from 'react';

// export default function Form() {
//   let [fname, setFname] = useState('');
//   let [lname, setLname] = useState('');
//   let [email, setMail] = useState('');
//   let [pass, setPass] = useState('');
//   let [category, setCategory] = useState('');

//   const formRef = useRef(null)

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // EMAIL-VALIDATION
//     if (email === '' || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
//       alert('Enter Valid Email');
//       return;
//     }

//     // PASSWORD-VALIDATION
//    else if (pass === '' || !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(pass)) {
//       alert('Enter Password like..Testing193!');
//       return;
//     }

//     // CATEGORY VALIDATION
//     else if (category === '') {
//       alert('Choose Any One Category');
//       return;
//     }

//     // SHOW DETAILS IN CONSOLE AND HIDE FORM IF VALID
//     let obj = {
//       Firstname: fname,
//       Lastname: lname,
//       Email: email,
//       Password: pass,
//       Category: category,
//     };

//     console.log('Form Submitted:', obj);

    
//     setFname('');
//     setLname('');
//     setMail('');
//     setPass('');
//     setCategory('');

//     formRef.current.style.display = 'none';
//   };

//   return (
//     <div id="main">
//       <div id="part-1" ref={formRef}>
//         <form onSubmit={(e) => handleSubmit(e)}>
//           <input
//             type="text"
//             placeholder="First Name"
//             value={fname}
//             onChange={(e) => setFname(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Last Name"
//             value={lname}
//             onChange={(e) => setLname(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Email Address"
//             value={email}
//             onChange={(e) => setMail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={pass}
//             onChange={(e) => setPass(e.target.value)}
//           />

//           <select value={category} onChange={(e) => setCategory(e.target.value)}>
//             <option value="">Category</option>
//             <option value="kitchenware">Kitchenware</option>
//             <option value="electronic">Electronic</option>
//             <option value="clothing">Clothing</option>
//             <option value="food">Food</option>
//             <option value="toys">Toys</option>
//           </select>

//           <button type="submit" id="submit">
//             Submit
//           </button>
//         </form>
//       </div>

//       {category === 'kitchenware' && email !== '' && pass !== '' && (
//         <div id="part-2" style={{ height: '300px', width: '300px', backgroundColor: 'blue', marginTop: '20px',}} ></div>
//       )}
//     </div>
//   );
// }







import React, { useState, useRef } from 'react';

export default function Form() {
  let [fname, setFname] = useState('');
  let [lname, setLname] = useState('');
  let [email, setMail] = useState('');
  let [pass, setPass] = useState('');
  let [category, setCategory] = useState('');

  const [stylepart2,setStylepart2] = useState({display:'none'})
  const [stylepart3,setStylepart3] = useState({display:'none'})
  const [stylepart4,setStylepart4] = useState({display:'none'})
  const [stylepart5,setStylepart5] = useState({display:'none'})
  const [stylepart6,setStylepart6] = useState({display:'none'})

  let [cart, setCart] = useState([]);

  const formRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();

    // EMAIL-VALIDATION
    if (email === '' || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      alert('Enter Valid Email');
      return;
    }

    // PASSWORD-VALIDATION
    else if (pass === '' || !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(pass)) {
      alert('Enter Password like..Testing193!');
      return;
    }

    // CATEGORY VALIDATION
    else if (category === '') {
      alert('Choose Any One Category');
      return;
    }

    // SHOW DETAILS IN CONSOLE AND HIDE FORM IF VALID
    let obj = {
      Firstname: fname,
      Lastname: lname,
      Email: email,
      Password: pass,
      Category: category,
    };

    console.log('Form Submitted:', obj);

    setFname('');
    setLname('');
    setMail('');
    setPass('');
    setCategory('');

    formRef.current.style.display = 'none';

    // BY CATEGORY SHOW DIV

    if (category === 'kitchenware') {
      setStylepart2({ display: 'block' });
      setStylepart3({ display: 'none' });
      setStylepart4({ display: 'none' });
      setStylepart5({ display: 'none' });
      setStylepart6({ display: 'none' });
    } 
    else if (category === 'electronic') {
      setStylepart2({ display: 'none' });
      setStylepart3({ display: 'block' });
      setStylepart4({ display: 'none' });
      setStylepart5({ display: 'none' });
      setStylepart6({ display: 'none' });
    } 
    else if (category === 'clothing') {
      setStylepart2({ display: 'none' });
      setStylepart3({ display: 'none' });
      setStylepart4({ display: 'block' });
      setStylepart5({ display: 'none' });
      setStylepart6({ display: 'none' });
    } 
    else if (category === 'food') {
      setStylepart2({ display: 'none' });
      setStylepart3({ display: 'none' });
      setStylepart4({ display: 'none' });
      setStylepart5({ display: 'block' });
      setStylepart6({ display: 'none' });
    }
    else if (category === 'toys') {
      setStylepart2({ display: 'none' });
      setStylepart3({ display: 'none' });
      setStylepart4({ display: 'none' });
      setStylepart5({ display: 'none' });
      setStylepart6({ display: 'block' });
    }

  };

   const addToCart = (itemName) => {
    setCart([...cart, itemName]); 
    alert(`${itemName} has been added to your cart.`);
  };

  return (
    <div id="main">
      <div id="part-1" >
        <form onSubmit={(e) => handleSubmit(e)} ref={formRef}>
          <center>

          <h1>Sign In</h1>
          
          <input
            type="text"
            placeholder="First Name"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            />
          <input
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setMail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />

          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Category</option>
            <option value="kitchenware">Kitchenware</option>
            <option value="electronic">Electronic</option>
            <option value="clothing">Clothing</option>
            <option value="food">Food</option>
            <option value="toys">Toys</option>
          </select>

          <button type="submit" id="submit">
            Submit
          </button>
        </center>
        </form>
      </div>

      <div id="kitchenware" style={stylepart2} >
        <center>
           <h2 style={{marginTop:"20px"}}>Kichenware</h2>
        </center>   
            <h2 style={{margin :"5px 30px"}}>Storage-box</h2>
            <div id="k_ware">
                <div id="k_1">
                  <div className='image'>
                    <img src="https://m.media-amazon.com/images/I/71hpkS1d4vL._AC_UL320_.jpg" alt="" />
                  </div>
                  <center>
                    <br />
                    <h3>Air tight container set of 6</h3>
                    <h3 style={{color:"orange"}}> &#9733; &#9733; &#9733; &#9733; &#9734;</h3>
                    <h3><b style={{color:"red"}}>₹599 </b> M.R.P: <del>₹999</del> (40% off)</h3>
                    <button  onClick={() => addToCart('Air tight container set of 6')} style={{backgroundColor:"rgb(223,121,33)" , color:"white"}}>Add To Cart</button>
                  </center>
                </div>
                <div id="k_1">
                  <div className='image'>
                    <img src="https://m.media-amazon.com/images/I/71auAIxh1PL._AC_UL320_.jpg" alt="" />
                  </div>
                  <center>
                    <br />
                    <h3>KWER 1200ml Air tight container set of 8</h3>
                    <h3 style={{color:"orange"}}> &#9733; &#9733; &#9733; &#9734; &#9734;</h3>
                    <h3><b style={{color:"red"}}>₹493 </b> M.R.P: <del>₹699</del> (50% off)</h3>
                    <button onClick={() => addToCart('KWER 122ml Air tight container set of 8')} style={{backgroundColor:"rgb(223,121,33)" , color:"white"}}>Add To Cart</button>
                  </center>
                </div>
                <div id="k_1">
                  <div className='image'>
                    <img src="https://m.media-amazon.com/images/I/71C5KTp+TOL._AC_UL320_.jpg" alt="" />
                  </div>
                  <center>
                    <br />
                    <h3>GOLWYN 700ML Fridge Storage container set of 6</h3>
                    <h3 style={{color:"orange"}}> &#9733; &#9733; &#9734; &#9734; &#9734;</h3>
                    <h3><b style={{color:"red"}}>₹350 </b> M.R.P: <del>₹450</del> (20% off)</h3>
                    <button onClick={() => addToCart('GOLWYN 700ML Fridge Storage container set of 6')} style={{backgroundColor:"rgb(223,121,33)" , color:"white"}}>Add To Cart</button>
                  </center>
                </div>
            </div>

            <h2 style={{margin :"20px 30px"}}>Cockery</h2>
            <div id="k_ware">
                <div id="k_1">
                  <div className='image'>
                    <img src="https://m.media-amazon.com/images/I/61xuWKedmVL._AC_UL320_.jpg" alt="" />
                  </div>
                  <center>
                    <br />
                    <h3>Cello opalware Dazzle series set , units 18</h3>
                    <h3 style={{color:"orange"}}> &#9733; &#9733; &#9733; &#9733; &#9733;</h3>
                    <h3><b style={{color:"red"}}>₹1299 </b> M.R.P: <del>₹1653</del> (21% off)</h3>
                    <button  onClick={() => addToCart('Cello opalware Dazzle series set , units 18')} style={{backgroundColor:"rgb(223,121,33)" , color:"white"}}>Add To Cart</button>
                  </center>
                </div>
                <div id="k_1">
                  <div className='image'>
                    <img src="https://m.media-amazon.com/images/I/511iiVXZHpL._AC_UL320_.jpg" alt="" />
                  </div>
                  <center>
                    <br />
                    <h3>Stainless Steel Cookware 3 peice</h3>
                    <h3 style={{color:"orange"}}> &#9733; &#9733; &#9733; &#9734; &#9734;</h3>
                    <h3><b style={{color:"red"}}>₹2,599 </b> M.R.P: <del>₹3,800</del> (45% off)</h3>
                    <button onClick={() => addToCart('Stainless Steel Cookware 3 peice')} style={{backgroundColor:"rgb(223,121,33)" , color:"white"}}>Add To Cart</button>
                  </center>
                </div>
                <div id="k_1">
                  <div className='image'>
                    <img src="https://m.media-amazon.com/images/I/5113M+-2q7L._AC_UL320_.jpg" alt="" />
                  </div>
                  <center>
                    <br />
                    <h3>LARA by Borosil Blue eve silk series, 35 peices</h3>
                    <h3 style={{color:"orange"}}> &#9733; &#9733; &#9734; &#9734; &#9734;</h3>
                    <h3><b style={{color:"red"}}>₹1,949 </b> M.R.P: <del>₹3,640</del> (46% off)</h3>
                    <button onClick={() => addToCart('LARA by Borosil Blue eve silk series, 35 peices')} style={{backgroundColor:"rgb(223,121,33)" , color:"white"}}>Add To Cart</button>
                  </center>
                </div>
            </div>            
      </div>

       <div id='electronic' style={stylepart3}>
       <center>
           <h2 style={{marginTop:"20px"}}>Electronic</h2>
        </center>  
            <h2 style={{margin :"5px 30px"}}>Mobile-Phone</h2>
            <div id="e_ware">
                <div id="e_1">
                <div className='image'>
                    <img src="https://m.media-amazon.com/images/I/61gGBEmzriL._AC_UY218_.jpg" alt="" />
                  </div>
                  <center>
                    <br />
                    <h3>Lava Blaze 3 5G - Glass Gold(6+6* RAM)</h3>
                    <h3 style={{color:"orange"}}> &#9733; &#9733; &#9733; &#9733; &#9733;</h3>
                    <h3><b style={{color:"red"}}>₹11,499 </b> M.R.P: <del>₹12,999</del> (21% off)</h3>
                    <button  onClick={() => addToCart('Lava Blaze 3 5G - Glass Gold(6+6* RAM)')} style={{backgroundColor:"rgb(223,121,33)" , color:"white"}}>Add To Cart</button>
                  </center>
                </div>
                <div id="e_1">
                <div className='image'>
                    <img src="https://m.media-amazon.com/images/I/913EiorAS0L._AC_UY218_.jpg" alt="" />
                  </div>
                  <center>
                    <br />
                    <h3>Samsung Galaxy M14 4G (4GB RAM ,64GB)</h3>
                    <h3 style={{color:"orange"}}> &#9733; &#9733; &#9733; &#9734; &#9734;</h3>
                    <h3><b style={{color:"red"}}>₹8,369 </b> M.R.P: <del>₹13,999</del> (21% off)</h3>
                    <button  onClick={() => addToCart('Samsung Galaxy M14 4G (4GB RAM ,64GB)')} style={{backgroundColor:"rgb(223,121,33)" , color:"white"}}>Add To Cart</button>
                  </center>
                </div>
                <div id="e_1">
                <div className='image'>
                    <img src="https://m.media-amazon.com/images/I/619VJYWIbXL._AC_UY218_.jpg" alt="" />
                  </div>
                  <center>
                    <br />
                    <h3>IQ00 Z9 Lite 5G(Mocha Brown , 6GB RAM , 128Gb Storage)</h3>
                    <h3 style={{color:"orange"}}> &#9733; &#9733; &#9733; &#9733; &#9734;</h3>
                    <h3><b style={{color:"red"}}>₹11,499 </b> M.R.P: <del>₹15,999</del> (26% off)</h3>
                    <button  onClick={() => addToCart('IQ00 Z9 Lite 5G(Mocha Brown , 6GB RAM , 128Gb Storage)')} style={{backgroundColor:"rgb(223,121,33)" , color:"white"}}>Add To Cart</button>
                  </center>
                </div>
            </div> 

            <h2 style={{margin :"20px 30px"}}>Bluetooth</h2>
            <div id="e_ware">
                <div id="e_1">
                <div className='image'>
                    <img src="https://m.media-amazon.com/images/I/61kReoWGtHL._AC_UY218_.jpg" alt="" />
                  </div>
                  <center>
                    <br />
                    <h3>boAt Airdopes 91 Truly Wireless</h3>
                    <h3 style={{color:"orange"}}> &#9733; &#9733; &#9733; &#9733; &#9733;</h3>
                    <h3><b style={{color:"red"}}>₹1,099 </b> M.R.P: <del>₹4,990</del> (48% off)</h3>
                    <button  onClick={() => addToCart('boAt Airdopes 91 Truly Wireless')} style={{backgroundColor:"rgb(223,121,33)" , color:"white"}}>Add To Cart</button>
                  </center>
                </div>
                <div id="e_1">
                <div className='image'>
                    <img src="https://m.media-amazon.com/images/I/51GJbc+43+L._AC_UY218_.jpg" alt="" />
                  </div>
                  <center>
                    <br />
                    <h3>pTron Tanentbeat in-Ear Bluetooth</h3>
                    <h3 style={{color:"orange"}}> &#9733; &#9733; &#9733; &#9734; &#9734;</h3>
                    <h3><b style={{color:"red"}}>₹499 </b> M.R.P: <del>₹2,999</del> (80% off)</h3>
                    <button  onClick={() => addToCart('pTron Tanentbeat in-Ear Bluetooth')} style={{backgroundColor:"rgb(223,121,33)" , color:"white"}}>Add To Cart</button>
                  </center>
                </div>
                <div id="e_1">
                <div className='image'>
                    <img src="https://m.media-amazon.com/images/I/81r4-kfrAvL._AC_UY218_.jpg" alt="" />
                  </div>
                  <center>
                    <br />
                    <h3>Boult Audio Z40 True Wireless Ear Earbuds</h3>
                    <h3 style={{color:"orange"}}> &#9733; &#9733; &#9733; &#9733; &#9734;</h3>
                    <h3><b style={{color:"red"}}>₹1,299 </b> M.R.P: <del>₹4,999</del> (74% off)</h3>
                    <button  onClick={() => addToCart('Boult Audio Z40 True Wireless Ear Earbuds')} style={{backgroundColor:"rgb(223,121,33)" , color:"white"}}>Add To Cart</button>
                  </center>
                </div>
            </div> 
       </div> 

      <div id='clothing' style={stylepart4}>
      <center>
           <h2 style={{marginTop:"20px"}}>Clothing</h2>
        </center>  
            <h2 style={{margin :"20px 30px"}}>Women Wear</h2>
            <div id="c_ware">
                <div id="c_1">
                <div className='image'>
                    <img src="https://m.media-amazon.com/images/I/71+dHGqDzTL._AC_UL320_.jpg" alt="" />
                  </div>
                  <center>
                    <br />
                    <h3>Womens & Girls White Chikankari Gown</h3>
                    <h3 style={{color:"orange"}}> &#9733; &#9733; &#9733; &#9733; &#9733;</h3>
                    <h3><b style={{color:"red"}}>₹799 </b> M.R.P: <del>₹2,590</del> (70% off)</h3>
                    <button  onClick={() => addToCart('Womens & Girls White Chikankari Gown')} style={{backgroundColor:"rgb(223,121,33)" , color:"white"}}>Add To Cart</button>
                  </center>
                </div>
                <div id="c_1">
                <div className='image'>
                    <img src="https://m.media-amazon.com/images/I/61BBlDNERFL._AC_UL320_.jpg" alt="" />
                  </div>
                  <center>
                    <br />
                    <h3>Plain Round Neck Rib Knite Top</h3>
                    <h3 style={{color:"orange"}}> &#9733; &#9733; &#9733; &#9734; &#9734;</h3>
                    <h3><b style={{color:"red"}}>₹328 </b> M.R.P: <del>₹999</del> (67% off)</h3>
                    <button  onClick={() => addToCart('Plain Round Neck Rib Knite Top')} style={{backgroundColor:"rgb(223,121,33)" , color:"white"}}>Add To Cart</button>
                  </center>
                </div>
                <div id="c_1">
                <div className='image'>
                    <img src="https://m.media-amazon.com/images/I/61Z7-SW2zyL._AC_UL320_.jpg" alt="" />
                  </div>
                  <center>
                    <br />
                    <h3>Oversize Shirt For Women</h3>
                    <h3 style={{color:"orange"}}> &#9733; &#9733; &#9733; &#9733; &#9734;</h3>
                    <h3><b style={{color:"red"}}>₹419 </b> M.R.P: <del>₹1,990</del> (79% off)</h3>
                    <button  onClick={() => addToCart('Oversize Shirt For Women')} style={{backgroundColor:"rgb(223,121,33)" , color:"white"}}>Add To Cart</button>
                  </center>
                </div>
            </div>


            <h2 style={{margin :"20px 30px"}}>Men Wear</h2>
            <div id="c_ware">
                <div id="c_1">
                <div className='image'>
                    <img src="https://m.media-amazon.com/images/I/71W+kOgr4aL._AC_UL320_.jpg" alt="" />
                  </div>
                  <center>
                    <br />
                    <h3>Men Solid Regular Fit Shirt</h3>
                    <h3 style={{color:"orange"}}> &#9733; &#9733; &#9733; &#9734; &#9734;</h3>
                    <h3><b style={{color:"red"}}>₹379 </b> M.R.P: <del>₹1,999</del> (81% off)</h3>
                    <button  onClick={() => addToCart('Men Solid Regular Fit Shirt')} style={{backgroundColor:"rgb(223,121,33)" , color:"white"}}>Add To Cart</button>
                  </center>
                </div>
                <div id="c_1">
                <div className='image'>
                    <img src="https://m.media-amazon.com/images/I/71l6J5SwZVL._AC_UL320_.jpg" alt="" />
                  </div>
                  <center>
                    <br />
                    <h3>Casual Shirt for Men</h3>
                    <h3 style={{color:"orange"}}> &#9733; &#9733; &#9733; &#9734; &#9734;</h3>
                    <h3><b style={{color:"red"}}>₹409 </b> M.R.P: <del>₹3,999</del> (90% off)</h3>
                    <button  onClick={() => addToCart('Casual Shirt for Men')} style={{backgroundColor:"rgb(223,121,33)" , color:"white"}}>Add To Cart</button>
                  </center>
                </div>
                <div id="c_1">
                <div className='image'>
                    <img src="https://m.media-amazon.com/images/I/61Zf+H8T+0L._AC_UL320_.jpg" alt="" />
                  </div>
                  <center>
                    <br />
                    <h3>Cotten Blend Short Kurta For Men</h3>
                    <h3 style={{color:"orange"}}> &#9733; &#9733; &#9733; &#9733; &#9734;</h3>
                    <h3><b style={{color:"red"}}>₹499 </b> M.R.P: <del>₹999</del> (50% off)</h3>
                    <button  onClick={() => addToCart('Cotten Blend Short Kurta For Men')} style={{backgroundColor:"rgb(223,121,33)" , color:"white"}}>Add To Cart</button>
                  </center>
                </div>
            </div> 
      </div> 

      <div id='food' style={stylepart5}>
      <center>
           <h2 style={{marginTop:"20px"}}>Food</h2>
        </center>  
            <h2 style={{margin :"20px 30px"}}>Pizza</h2>
            <div id="f_ware">
                <div id="f_1">
                <div className='image'>
                    <img src="https://b.zmtcdn.com/data/dish_photos/1f8/538a75ee56d33f292f391e7d227061f8.png" alt="" />
                  </div>
                  <center>
                    <br />
                    <h3>Sam's pizza</h3>
                    <h3 style={{color:"orange"}}> &#9733; &#9733; &#9733; &#9734; &#9734;</h3>
                    <h3><b style={{color:"red"}}>₹400 </b>(₹50 off) </h3>
                    <button  onClick={() => addToCart('Sams pizza')} style={{backgroundColor:"rgb(223,121,33)" , color:"white"}}>Add To Cart</button>
                  </center>
                </div>
                <div id="f_1">
                  <div className='image'>
                    <img src="https://b.zmtcdn.com/data/dish_photos/2ea/af372286195589863927069b50d2c2ea.jpg" alt="" />
                  </div>
                  <center>
                    <br />
                    <h3>Yanki Sizzler</h3>
                    <h3 style={{color:"orange"}}> &#9733; &#9733; &#9733; &#9734; &#9734;</h3>
                    <h3><b style={{color:"red"}}>₹650 for one </b>(₹20 off) </h3>
                    <button  onClick={() => addToCart('Yanki Sizzler')} style={{backgroundColor:"rgb(223,121,33)" , color:"white"}}>Add To Cart</button>
                  </center>

                </div>
                <div id="f_1">
                  <div className='image'>
                    <img src="https://b.zmtcdn.com/data/dish_photos/b64/643cb105d9ec8ef7cd0c97af9c426b64.jpg" alt="" />
                  </div>
                  <center>
                    <br />
                    <h3>Martino pizza</h3>
                    <h3 style={{color:"orange"}}> &#9733; &#9733; &#9733; &#9734; &#9734;</h3>
                    <h3><b style={{color:"red"}}>₹200 For one </b>(Flat 25% off) </h3>
                    <button  onClick={() => addToCart('Martino pizza')} style={{backgroundColor:"rgb(223,121,33)" , color:"white"}}>Add To Cart</button>
                  </center>
                </div>
            </div> 

            <h2 style={{margin :"20px 30px"}}>Burger</h2>
            <div id="f_ware">
                <div id="f_1">
                <div className='image'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ69tApxyp2Ol1AwyIkoz_yl40e-h_UT_DAJw&s" alt="" />
                  </div>
                  <center>
                    <br />
                    <h3>Paneer saz' </h3>
                    <h3 style={{color:"orange"}}> &#9733; &#9733; &#9733; &#9734; &#9734;</h3>
                    <h3><b style={{color:"red"}}>₹150 for one </b>(₹25 off) </h3>
                    <button  onClick={() => addToCart('Paneer saz')} style={{backgroundColor:"rgb(223,121,33)" , color:"white"}}>Add To Cart</button>
                  </center>
                </div>
                <div id="f_1">
                  <div className='image'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQln67gfd1G5ad_2wslhWSKSSnI97kuDUBvEA&s" alt="" />
                  </div>
                  <center>
                    <br />
                    <h3>Combo(Burger & Fries)</h3>
                    <h3 style={{color:"orange"}}> &#9733; &#9733; &#9733; &#9734; &#9734;</h3>
                    <h3><b style={{color:"red"}}>₹299 for one </b>(20% off) </h3>
                    <button  onClick={() => addToCart('Combo(Burger & Fries)')} style={{backgroundColor:"rgb(223,121,33)" , color:"white"}}>Add To Cart</button>
                  </center>

                </div>
                <div id="f_1">
                  <div className='image'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbQUmQFwubry1ZN-XQAffjpIukdhpVJ9B42A&s" alt="" />
                  </div>
                  <center>
                    <br />
                    <h3>Chilly Tadka</h3>
                    <h3 style={{color:"orange"}}> &#9733; &#9733; &#9733; &#9733; &#9734;</h3>
                    <h3><b style={{color:"red"}}>₹199 For one </b>(Flat 15% off) </h3>
                    <button  onClick={() => addToCart('Chilly Tadka')} style={{backgroundColor:"rgb(223,121,33)" , color:"white"}}>Add To Cart</button>
                  </center>
                </div>
            </div> 
            
       </div> 

       <div id='toys' style={stylepart6}>
       <center>
           <h2 style={{marginTop:"20px"}}>Toys</h2>
        </center>  
            <h2 style={{margin :"20px 30px"}}>Soft Toys</h2>
            <div id="t_ware">
                <div id="t_1">
                <div className='image'>
                    <img src="https://m.media-amazon.com/images/I/61FvuCHYHUL._AC_UL320_.jpg" alt="" />
                  </div>
                  <center>
                    <br />
                    <h3>Jam & Honey Strawberry Bunny </h3>
                    <h3 style={{color:"orange"}}> &#9733; &#9733; &#9733; &#9734; &#9734;</h3>
                    <h3><b style={{color:"red"}}>₹399 </b> M.R.P: <del>₹1,299</del> (69% off)</h3>
                    <button  onClick={() => addToCart('Jam & Honey Strawberry Bunny')} style={{backgroundColor:"rgb(223,121,33)" , color:"white"}}>Add To Cart</button>
                  </center>

                </div>
                <div id="t_1">
                <div className='image'>
                    <img src="https://m.media-amazon.com/images/I/51C5TrSt-GL._AC_UL320_.jpg" alt="" />
                  </div>
                  <center>
                    <br />
                    <h3>BabyQue Unicorn Teddy Bear </h3>
                    <h3 style={{color:"orange"}}> &#9733; &#9733; &#9733; &#9733; &#9734;</h3>
                    <h3><b style={{color:"red"}}>₹169 </b> M.R.P: <del>₹699</del> (76% off)</h3>
                    <button  onClick={() => addToCart('BabyQue Unicorn Teddy Bear')} style={{backgroundColor:"rgb(223,121,33)" , color:"white"}}>Add To Cart</button>
                  </center>

                </div>
                <div id="t_1">
                <div className='image'>
                    <img src="https://m.media-amazon.com/images/I/61A2ddWFQxL._AC_UL320_.jpg" alt="" />
                  </div>
                  <center>
                    <br />
                    <h3>Jam & Honey - Penguin soft toy </h3>
                    <h3 style={{color:"orange"}}> &#9733; &#9733; &#9733; &#9733; &#9733;</h3>
                    <h3><b style={{color:"red"}}>₹299 </b> M.R.P: <del>₹1,299</del> (82% off)</h3>
                    <button  onClick={() => addToCart('Jam & Honey - Penguin soft toy')} style={{backgroundColor:"rgb(223,121,33)" , color:"white"}}>Add To Cart</button>
                  </center>

                </div>
            </div> 

            <h2 style={{margin :"20px 30px"}}>Cars</h2>
            <div id="t_ware">
                <div id="t_1">
                <div className='image'>
                    <img src="https://m.media-amazon.com/images/I/613a+9fxavL._AC_UL320_.jpg" alt="" />
                  </div>
                  <center>
                    <br />
                    <h3>ARNIYAVALA 1/32 model Car For BMW race </h3>
                    <h3 style={{color:"orange"}}> &#9733; &#9733; &#9733; &#9734; &#9734;</h3>
                    <h3><b style={{color:"red"}}>₹1,599 </b> M.R.P: <del>₹3,999</del> (47% off)</h3>
                    <button  onClick={() => addToCart('ARNIYAVALA 1/32 model Car For BMW race')} style={{backgroundColor:"rgb(223,121,33)" , color:"white"}}>Add To Cart</button>
                  </center>

                </div>
                <div id="t_1">
                <div className='image'>
                    <img src="https://m.media-amazon.com/images/I/41r3UQtYUFL._AC_UL320_.jpg" alt="" />
                  </div>
                  <center>
                    <br />
                    <h3>Mini Monster Friction Power pack of 2 </h3>
                    <h3 style={{color:"orange"}}> &#9733; &#9733; &#9733; &#9733; &#9734;</h3>
                    <h3><b style={{color:"red"}}>₹170 </b> M.R.P: <del>₹249</del> (32% off)</h3>
                    <button  onClick={() => addToCart('Mini Monster Friction Power pack of 2')} style={{backgroundColor:"rgb(223,121,33)" , color:"white"}}>Add To Cart</button>
                  </center>

                </div>
                <div id="t_1">
                <div className='image'>
                    <img src="https://m.media-amazon.com/images/I/61q8uJe2M3L._AC_UL320_.jpg" alt="" />
                  </div>
                  <center>
                    <br />
                    <h3>Combat Electronic Robot Tank With Light </h3>
                    <h3 style={{color:"orange"}}> &#9733; &#9733; &#9733; &#9734; &#9734;</h3>
                    <h3><b style={{color:"red"}}>₹588 </b> M.R.P: <del>₹1,999</del> (71% off)</h3>
                    <button  onClick={() => addToCart('Combat Electronic Robot Tank With Light')} style={{backgroundColor:"rgb(223,121,33)" , color:"white"}}>Add To Cart</button>
                  </center>

                </div>
            </div> 
            
       </div> 
       
    </div>
  )
}
