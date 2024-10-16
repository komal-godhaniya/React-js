import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addData, deleteData, updateData } from '../fetures/TodoSlice';

export default function Redux() {

    const [name, setName] = useState("")
    const [subject, setSubject] = useState("")
    const [mail, setMail] = useState("")
    const [rollno, setRollno] = useState("")
    const [select, setSelect] = useState("")
    const [editIndex, setEditIndex] = useState("")
    const [check, setCheck] = useState(false)

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
                dispatch(addData({ id: Date.now(), name, subject, mail, rollno, select }))
            }
            else {
                dispatch(updateData({ id: editIndex, name, subject, mail, rollno, select }))
                setEditIndex(null)
            }
            setName("")
            setSubject("")
            setMail("")
            setRollno("")
            setSelect("")
            setCheck(false)
        }
    }

    const editRecord = (id) => {
        let singleData = count.students.find((item) => item.id === id);
        setName(singleData.name);
        setSubject(singleData.subject);
        setMail(singleData.mail);
        setRollno(singleData.rollno);
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
                        <input type="name" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                        <input type="text" placeholder='Subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
                        <input type="email" placeholder='E-mail' value={mail} onChange={(e) => setMail(e.target.value)} />
                        <input type="number" placeholder='Enrollno' value={rollno} onChange={(e) => setRollno(e.target.value)} />
                        <select value={select} onChange={(e) => setSelect(e.target.value)}>
                            <option value="">select Batch</option>
                            <option value="1 to 3"> 1 to 3</option>
                            <option value="2 to 4"> 2 to 4</option>
                            <option value="3 to 5"> 3 to 5</option>
                            <option value="4 to 6"> 4 to 6</option>
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
                            <th>Name</th>
                            <th>Subject</th>
                            <th>Mail</th>
                            <th>RollNo</th>
                            <th>Batch</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            count ?
                                count.students.map((e, i) => {
                                    return <tr key={i}>
                                        <td>{e.id}</td>
                                        <td>{e.name}</td>
                                        <td>{e.subject}</td>
                                        <td>{e.mail}</td>
                                        <td>{e.rollno}</td>
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
