import React, { useEffect } from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchApi } from '../features/PaginationSlice'

export default function Redux() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchApi())
  },[])

  const record = useSelector((state) => {
  return state.apiKey
  })

  return (
    <div>
      <center> <h1>Redux Pagination</h1> </center>

      <div className='nav-btn'>
        <Link to={"/Mens"}>
          <button>Mens</button>
        </Link>
        <Link to={"/Womens"}>
          <button>Womens</button>
        </Link>
        <Link to={"/Food"}>
          <button>Food</button>
        </Link>
        <Link to={"/Beauty"}>
          <button>Beauty</button>
        </Link>
        <Link to={"/Gift"}>
          <button>Gift</button>
        </Link>
        <Link to={"/Electronic"}>
          <button>Electronic</button>
        </Link>
      </div>

      <div className='main_pr'>
        {
          record.data && 
          record.data.map((e) => (
            <div key={e.id} className='pr-div'>
              <div className='pr-img'>
                  <img src={e.image} alt="" />
              </div>
              <h2>{e.title}</h2>
              <h3>{e.price}</h3>
            </div>
          ))
        }
      </div>

    </div>
  )
}
