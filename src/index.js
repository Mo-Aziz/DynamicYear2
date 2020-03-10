import React from"react"
import ReactDOM from"react-dom"


const name ="Max"

const date = new Date().getFullYear()


ReactDOM.render(<div>
  <p>Created by {name}</p>
<p>Copy right {date}</p>
   </div>
   ,document.getElementById("root"))