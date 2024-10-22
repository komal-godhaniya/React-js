import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApi } from '../features/ApiSlice';

export default function ReduxApi() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchApi())
    }, [])

    const record = useSelector((state) => {
        return state.apiKey
    })

    return (
        <div>
            <h1>ReduxApi</h1>
            <div className='section'>

            {
                record.data &&
                record.data.map((e, i) => {
                    return <div key={i} id='main'>
                        <div id='div-img'>
                            <img src={e.image} alt="" />
                        </div>
                        <h2>{e.title}</h2>
                        <h2>{e.price}</h2>
                    </div>
                })
            }
            </div>
        </div>
    )
}
