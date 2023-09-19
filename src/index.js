import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

const store = configureStore()
console.log(store.getState())
store.subscribe(() => {
    console.log(store.getState())
})

const Root = ReactDOM.createRoot(document.getElementById('root'))
Root.render(<Provider store={store}>
             <App/></Provider>
               )
