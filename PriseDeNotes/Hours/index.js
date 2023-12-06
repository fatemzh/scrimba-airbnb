import React from "react"
import ReactDOM from "react-dom"

function App() {
    const date = new Date()
    const hours = date.getHours() % 12
    let timeOfDay

    if(hours < 12) {
        timeOfDay = "morning" 
    }
    else if(hours >= 12 && hours <=18)
    { 
        timeOfDay = "afternoon"
    }
    else
    {
        timeOfDay = "evening"
    }

    return (
        <div className="hours">
            <h1>It is currently about {hours} o'clock!</h1>
            <h2>Good {timeOfDay}</h2>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))