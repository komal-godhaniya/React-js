import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Update({ data, setData }) {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [subject, setSub] = useState('')
  const [city, setCity] = useState('')
  const [editId, setEditId] = useState(null)

  const handleEdit = (id) => {
    const item = data.find((d) => d.id === id);
    if (item) {
      setName(item.name)
      setSub(item.subject)
      setCity(item.city)
      setEditId(id)
    }
  };

  const handleUpdate = () => {
    const updatedData = data.map((item) => {
          if (item.id === editId) {
            return { ...item, name, subject ,city}
          }
          return item
        })

    setData(updatedData)
    navigate('/')
  }

  return (
    <div>
        <center>
            <h1>Update</h1>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /> <br />
      <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSub(e.target.value)} /> <br />
      <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} /> <br />
     <br /> <button onClick={handleUpdate} id="data">Update</button>
     </center>

      <table style={{ border: '1px solid black'}}>
        <thead style={{ border: '1px solid black' }}>
          <tr>
            <th style={{ border: '1px solid black', textAlign: 'center' }}>Id</th>
            <th style={{ border: '1px solid black', textAlign: 'center' }}>Name</th>
            <th style={{ border: '1px solid black', textAlign: 'center' }}>Subject</th>
            <th style={{ border: '1px solid black', textAlign: 'center' }}>City</th>
            <th style={{ border: '1px solid black', textAlign: 'center' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((e, i) => (
              <tr key={i}>
                <td style={{ border: '1px solid black', textAlign: 'center' }}>{e.id}</td>
                <td style={{ border: '1px solid black', textAlign: 'center' }}>{e.name}</td>
                <td style={{ border: '1px solid black', textAlign: 'center' }}>{e.subject}</td>
                <td style={{ border: '1px solid black', textAlign: 'center' }}>{e.city}</td>
                <td style={{ border: '1px solid black', textAlign: 'center' }}>
                  <button onClick={() => handleEdit(e.id)}>Update</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
