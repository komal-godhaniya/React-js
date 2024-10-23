import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../features/ApiSlice'

export default function ReduxApi() {

    const [budget, setBudget] = useState("")
    const [expence, setExpence] = useState("")
    const [description, setDescription] = useState("")

    const [cartlist, setCartList] = useState([])

    const dispatch = useDispatch()

    const count_budget = useSelector((state) => state.budgetKey.count_budget)

    const addMoney = () => {
        const amount = Number(budget)
        if (amount) {
            dispatch(increment(amount))
            setBudget("")
        }
    }

    const deleteMoney = () => {
        const amount = Number(expence)

        if (count_budget <= 0) {
            alert("Your budget is zero. Please add a budget before adding expenses.")
            return
        }

        if (count_budget < expence) {
            alert("Add Budget")
            return
        }

        if (amount && description) {
            dispatch(decrement(amount))
            setCartList([...cartlist, { expence: amount, description }])
            setExpence("")
            setDescription("")
        }
    }

    return (
        <div className='main'>

            <h1>ReduxApi</h1>

            <div id="section">
                <div className='part-1'>
                    <div className='budget'>
                        <h3>{count_budget}</h3> {/* Add class for animation */}
                    </div>
                    <input type="text" value={budget} placeholder='Budget' onChange={(e) => setBudget(e.target.value)} />
                    <button onClick={addMoney}>Budget+</button>

                </div>
                <div className='part-1' id='right-part'>
                    <input type="text" value={expence} placeholder='Expence' onChange={(e) => setExpence(e.target.value)} />
                    <input type="text" value={description} placeholder='Description' onChange={(e) => setDescription(e.target.value)} />
                    <button onClick={deleteMoney}>Add+</button>

                    <div className='table'>
                        <br />
                        {
                            cartlist &&
                            cartlist.map((e, i) => {
                                return (
                                    <div className='show' key={i}>
                                        <h2>{e.expence} {e.description}</h2>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

