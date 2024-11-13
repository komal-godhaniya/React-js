import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../FirebaseConfig'
import { doc, getDoc } from 'firebase/firestore'

export default function DashBoard() {
    const [user, setUser] = useState(null)
    const [record, setRecord] = useState("")

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
        }
    }, [user])

    const fetchUser = () => {
        console.log(user.uid)
        getDoc(doc(db, "users", user.uid))
            .then(data => {
                console.log(data.data());
                setRecord(data.data())
            })
    }

    return (
        <div id="dashboard">
            <div>
                <h1>DashBoard</h1>
                <h2>Dashboard</h2>
            </div>
            {
                record && <p>welcome to our website... {record.name} ✨</p>
            }
        </div>
    )
}
