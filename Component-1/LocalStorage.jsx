import React from 'react'

export default function LocalStorage() {

    localStorage.setItem("Name1","Komal")
    localStorage.setItem("Name2","Meera")

    let Data = localStorage.getItem("Name1")
    console.log(Data)

    localStorage.removeItem("Name2")

    let obj = {
        Name : "Naksh",
        Subject : "ReactJS"
    }

    localStorage.getItem("Myobj",JSON.stringify(obj))

    let objData = JSON.parse(localStorage.getItem("myobj"))
    console.log(objData)

  return (
    <div>LocalStorage</div>
  )
}
