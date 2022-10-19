import React, { createElement } from 'react'
import ReactDOM from 'react-dom'

const flname = "DILZAIB"

ReactDOM.render(
    <React.Fragment>
        <h1> my nam is {flname} </h1>
        <p>abc</p>
        <h1>DIL ZAIB CHANNEL</h1>
    </React.Fragment>
    ,
    document.getElementById('root'))



// const h1 = document.createElement('h1')
// h1.innerHTML = "Hello World!"
// document.getElementById('root').appendChild(h1)