import React, { createElement } from 'react'
import ReactDOM from 'react-dom'
import './index.css'


const fname = "DIL"
const lname = "ZAIB"
const img2 = "https://source.unsplash.com/random/200x200?sig=1"
const img1 = "https://source.unsplash.com/random/200x200?sig=2"
const img3 = "https://source.unsplash.com/random/200x200?sig=3"

ReactDOM.render(
    <React.Fragment>
        <h1 class="heading" >{`My Name Is ${fname} ${lname}`}</h1>
        <p>My Lucky Number Is {5 + 5}</p>
        <img src={img1} alt="Random Images" />
        <img src={img2} alt="Random Images" />
        <img src={img3} alt="Random Images" />
    </React.Fragment>
    ,
    document.getElementById('root'))