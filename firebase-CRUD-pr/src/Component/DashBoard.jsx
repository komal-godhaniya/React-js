import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../FirebaseConfig'
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'

export default function DashBoard() {
    const [user, setUser] = useState(null)
    const [record, setRecord] = useState([])

    const [task, setTask] = useState("")
    const [priority, setPriority] = useState("")

    const [editIndex, setEditIndex] = useState(null)

    useEffect(() => {
        let subscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
            }
        })
    }, [])

    useEffect(() => {
        if (user) {
            fetchUser()
            fetchData()
        }
    }, [user])

    const fetchUser = () => {
        console.log(user.uid)
        getDoc(doc(db, "users", user.uid))

            .then(data => {
                console.log(data.data());
            })
    }

    const fetchData = async () => {
        let allData = await getDocs(collection(db, "Todos"))
        let filterData = allData.docs.map((data) => ({ docId: data.id, ...data.data() })).filter((item) => item.uid === user.uid)
        console.log(filterData)
        setRecord(filterData)
    }

    const handleTask = async () => {
        const obj = { uid: user.uid, task, priority }

        if (editIndex == null) {
            let addData = await addDoc(collection(db, "Todos"), obj)
                .then(data => {
                    setRecord([...record, obj])
                    fetchData()
                })
        }
        else {
            let updatedata = await updateDoc(doc(db, "Todos", editIndex), {
                id: user.uid, task, priority
            })
            fetchData()
        }
        setTask("")
        setPriority("")
        setEditIndex(null)
    }

    let handleDelete = async (id) => {
        let deleteData = await deleteDoc(doc(db, "Todos", id))
        fetchData()
    }

    let handleEdit = (id) => {
        let singleData = record.find(item => item.docId === id)
        setTask(singleData.task)
        setPriority(singleData.priority)
        setEditIndex(id)
    }

    return (
        <div id='dashboard'>
            <div>
                <h1>DashBoard</h1>
                <h2>Dashboard</h2>
            </div>

            {/* {
                record && <p>welcome to our website... {record.name} ✨</p>
            } */}

            <input type="text" placeholder='Enter Task' value={task} onChange={(e) => setTask(e.target.value)} />
            {/* <input type="text" placeholder='Enter Priority' value={priority} onChange={(e) => setPriority(e.target.value)} /> */}
            <select name="Priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option>Priority</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>

            <button onClick={handleTask}>{editIndex == null ? "Add Task" : "Update Task"}</button>

            <div id='Task'>
                {
                    record &&
                    record.map((e, i) => {
                        return <div id='task_data'>
                            <ul key={i}>
                                <li>Task  :  {e.task}</li>
                                <li>Priority  :  {e.priority}</li>
                                <button onClick={() => handleEdit(e.docId)}>Edit</button>
                                <button onClick={() => handleDelete(e.docId)}>Delete</button>
                            </ul>
                        </div>
                    })
                }
            </div>

        </div>
    )
}
