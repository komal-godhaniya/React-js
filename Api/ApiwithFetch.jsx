import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function ApiwithFetch() {

    const [record, setRecord] = useState("")

    const [id, setId] = useState("")
    const [title, setTitle] = useState("")
    const [views, setViews] = useState("")

    const [editIndex, setEditIndex] = useState(null)

    useEffect(() => {
        fetchApi()
    }, [])

    const fetchApi = async () => {
        let response = await axios.get("http://localhost:5000/posts")
        console.log(response.data)
        setRecord(response.data)
    }

    const addData = async () => {

        if (!id || !title || !views) {
            alert("please fill details")
            return
        }

        if (editIndex) {
            let updateResponse = await axios.put(`http://localhost:5000/posts/${editIndex}`, { "id": id, "title": title, "views": views })
            console.log(updateResponse)
            setRecord(record.map(item => item.id === editIndex ? updateResponse.data : item))
        }
        else {
            let addResponse = await axios.post("http://localhost:5000/posts", { "id": id, "title": title, "views": views })
            console.log(addResponse)
            setRecord([...record, addResponse.data])
        }

        setId("")
        setTitle("")
        setViews("")
        setEditIndex(null)


    }

    const deleteData = async (id) => {
        let deleteResponse = await axios.delete(`http://localhost:5000/posts/${id}`)
        console.log(id)
        setRecord(record.filter(item => item.id !== id))

    }

    const editData = async (id) => {
        let editResponse = record.find((item) => item.id == id)
        setId(editResponse.id)
        setTitle(editResponse.title)
        setViews(editResponse.views)
        setEditIndex(id)
    }


    return (
        <div>
            <h1>ApiwithFetch</h1>

            <h2>
                Enter Id :
                <input type="text" value={id} placeholder='Id' onChange={(e) => setId(e.target.value)} />
            </h2>

            <h2>
                Enter Title :
                <input type="text" value={title} placeholder='title' onChange={(e) => setTitle(e.target.value)} />
            </h2>

            <h2>
                Enter views :
                <input type="text" value={views} placeholder='views' onChange={(e) => setViews(e.target.value)} />
            </h2>

            <button onClick={addData}>{editIndex ? "Update data" : "Add Data"}</button>

            {
                record &&
                record.map((e, i) => {
                    return (
                        <div key={i}>
                            <h3>{e.id}</h3>
                            <h3>{e.title}</h3>
                            <h3>{e.views}</h3>
                            <button onClick={() => deleteData(e.id)}>Delete</button>
                            <button onClick={() => editData(e.id)}>Edit</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
