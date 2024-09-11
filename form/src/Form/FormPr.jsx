import React, { useRef, useState } from 'react';

export default function FormPr() {
  const [name, setName] = useState('');
  const [no, setNo] = useState('');
  const [mail, setMail] = useState('');
  const [pw, setPassword] = useState('');
  
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const inputRef4 = useRef();
  


  const handleSubmit = (event) => {
    event.preventDefault();
    let obj = {
      name: name,
      number: no,
      email: mail,
      password: pw,
    };
    if(name !== "" && no!== ""  && pw !== "" && mail !== "" )
    {
        alert('Form Submitted 🎊')

        console.log('Form Submitted:', obj)

        setName('');
        setNo('');
        setMail('');
        setPassword('');
    
        inputRef1.current.value = '';
        inputRef2.current.value = '';
        inputRef3.current.value = '';
        inputRef4.current.value = '';

    }
    else{
        alert('Fill Uncomplete Details');
    }
  };



  return (
    <div id='form'>
      <form onSubmit={handleSubmit}>
        <h3>
          <label>Your Name: </label>
          <input type="text" ref={inputRef1} onChange={(e) => setName(e.target.value)} />
        </h3>

        <h3>
          <label>Phone No.: </label>
          <input type="text" ref={inputRef2} onChange={(e) => setNo(e.target.value)} />
        </h3>

        <h3>
          <label>Email Id: </label>
          <input type="text" ref={inputRef3} onChange={(e) => setMail(e.target.value)} />
        </h3>

        <h3>
          <label>Password: </label>
          <input type="password" ref={inputRef4} onChange={(e) => setPassword(e.target.value)} />
        </h3>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}






// import React, { useState, useEffect } from 'react';

// export default function FormPr() {
//   const [name, setName] = useState('');
//   const [no, setNo] = useState('');
//   const [mail, setMail] = useState('');
//   const [pw, setPassword] = useState('');

//   useEffect(() => {
//     console.log('Form data updated', { name, no, mail, pw });
//   }, [name, no, mail, pw]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     let obj = {
//       name: name,
//       number: no,
//       email: mail,
//       password: pw,
//     }
//     console.log(obj)
//   }

//   return (
//     <div id='form'>
//       <form onSubmit={handleSubmit}>
//         <h3>
//           <label>Your Name: </label>
//           <input type='text' onChange={(e) => setName(e.target.value)}/>
//         </h3>

//         <h3>
//           <label>Phone No.: </label>
//           <input
//             type='text' onChange={(e) => setNo(e.target.value)}/>
//         </h3>

//         <h3>
//           <label>Email Id: </label>
//           <input
//             type='text'onChange={(e) => setMail(e.target.value)}/>
//         </h3>

//         <h3>
//           <label>Password: </label>
//           <input type='password' onChange={(e) => setPassword(e.target.value)}/>
//         </h3>

//         <button type='submit'>Submit</button>
//       </form>
//     </div>
//   );
// }