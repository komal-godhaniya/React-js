import React , {useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
// import { signInWithPopup } from 'firebase/auth'
import { auth} from '../../firebaseconfig'

export default function Dashboard() {
    const [record,setRecord] = useState(null)
    const navigate = useNavigate()

    useEffect(()=>{
        const user = auth.currentUser

        if(user) {
            setRecord(user)
        }
        else{
            navigate("/")
        }
    },[navigate])
  return (
    <div id='Dashboard'>
        <h1>Dashboard</h1>
        {
            record ? (
                <>
                    <span>Hey! {record.displayName} 🎊 Welcome to Our Website </span>
                    {/* <br/> */}
                    {/* <img src={record.photoURL} alt="" /> */}
                </>
            )
            :(<p>Loading...</p>)
        }
    </div>
  )
}
