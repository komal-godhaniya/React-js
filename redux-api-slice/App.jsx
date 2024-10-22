import React from 'react'
import { Provider } from "react-redux";
import ReduxApi from './redux/ReduxApi'
import { store } from './app/store'


export default function App() {
  return (
    <div>
      <Provider store={store}>
        <ReduxApi/>
      </Provider>
    </div>
  )
}
