import React from 'react'
import ReduxApi from './redux/ReduxApi'
import { Provider } from "react-redux";
import { store } from './app/Store';


export default function App() {
  return (
    <div>
      <Provider store={store}>
        <ReduxApi/>
      </Provider>
    </div>
  )
}
