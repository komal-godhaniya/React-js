import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addData, deleteData, updateData } from '../fetures/TodoSlice';

export default function Redux() {

    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [mail, setMail] = useState("")
    const [phoneno, setPhoneno] = useState("")
    const [select, setSelect] = useState("")
    const [editIndex, setEditIndex] = useState("")
    const [check, setCheck] = useState(false)

    const[gender , setGender] = useState("")

    const count = useSelector((state) => {
        return state.todoKey
    })

    const dispatch = useDispatch();

    const addRecord = (event) => {
        event.preventDefault()

        if (!check) {
            alert("Please agree to the terms and conditions.")
            return;
        }
        else {
            if (editIndex === null || editIndex === "") {
                dispatch(addData({ id: Date.now(), fname, lname, mail, phoneno,gender, select  }))
            }
            else {
                dispatch(updateData({ id: editIndex, fname, lname, mail, phoneno, gender,select }))
                setEditIndex(null)
            }
            setFname("")
            setLname("")
            setMail("")
            setPhoneno("")
            setGender("")
            setSelect("")
            setCheck(false)
        }
    }

    const editRecord = (id) => {
        let singleData = count.students.find((item) => item.id === id);
        setFname(singleData.fname);
        setLname(singleData.lname);
        setMail(singleData.mail);
        setPhoneno(singleData.phoneno);
        setGender(singleData.gender);
        setSelect(singleData.select);
        setEditIndex(id);
    }

    const deleteRecord = (id) => {
        dispatch(deleteData(id))
    }



    return (
        <div>
            <div id='main'>

                <div id="prt-1">
                    <h1>To keep connected with largest shop in the world.</h1>
                </div>
                <div id="prt-2">
                    <form action="" onSubmit={addRecord}>
                        <h2>Sign in</h2>
                        <input type="name" placeholder='First Name' value={fname} onChange={(e) => setFname(e.target.value)} />
                        <input type="text" placeholder='Last Name' value={lname} onChange={(e) => setLname(e.target.value)} />
                        <input type="email" placeholder='E-mail' value={mail} onChange={(e) => setMail(e.target.value)} />
                        <input type="phone number" placeholder='Phone No' value={phoneno} onChange={(e) => setPhoneno(e.target.value)} />
                         <label htmlFor="" style={{display:"block",marginLeft:"25px"}} >gender</label>
                         <input type="radio" style={{height:"15px",width:"20px",display:"inline-block"}} name='gender' value="male" checked={gender === "male"}  onChange={(e)=>setGender(e.target.value)} /> <p style={{display:"inline-block"}}>male</p>
                         <input type="radio" style={{height:"15px" ,width:"20px",display:"inline-block"}} name='gender' value="female"  checked={gender === "female"} onChange={(e)=>setGender(e.target.value)}/> <p style={{display:"inline-block"}}>female</p>
                         <input type="radio" style={{height:"15px" ,width:"20px",display:"inline-block"}} name='gender' value="kids" checked={gender === "kids"} onChange={(e)=>setGender(e.target.value)}/> <p style={{display:"inline-block"}}>kids</p>

                        <select value={select} onChange={(e) => setSelect(e.target.value)}>
                            <option value="">Select Category</option>
                            <option value="women wear"> women wear</option>
                            <option value="Men wear"> Men wear</option>
                            <option value="Kid's wear"> Kid's wear</option>
                        </select>

                        <input type="checkbox" checked={check} onChange={(e) => setCheck(e.target.checked)} name="" id="check" /> <label htmlFor="">Terms & condition </label>
                        
                        <center>
                            <button onClick={addRecord}>{editIndex ? "Update Data" : "Add Data"}</button>
                        </center>
                    </form>
                </div>

            </div>

            <div>

                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Mail</th>
                            <th>Phone No.</th>
                            <th>Gender</th>
                            <th>Category</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            count ?
                                count.students.map((e, i) => {
                                    return <tr key={i}>
                                        <td>{e.id}</td>
                                        <td>{e.fname}</td>
                                        <td>{e.lname}</td>
                                        <td>{e.mail}</td>
                                        <td>{e.phoneno}</td>
                                        <td>{e.gender}</td>
                                        <td>{e.select}</td>
                                        <td>
                                            <button onClick={() => editRecord(e.id)}>Edit</button>
                                        </td>
                                        <td>
                                            <button onClick={() => deleteRecord(e.id)}>Delete</button>
                                        </td>
                                    </tr>
                                })
                                :
                                <p>No Data</p>
                        }
                    </tbody>


                </table>

            </div>
        </div>
    )
}
