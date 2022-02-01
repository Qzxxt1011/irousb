const axios = require('axios').default

var games = document.getElementById("games")
var tools = document.getElementById("tools")
var other = document.getElementById("other")
let selected = 1

function updateActive() {
    if (selected == 1) {
        games.className = "is-active"
        tools.className = ""
        other.className = ""
    } else if (selected == 2) {
        games.className = ""
        tools.className = "is-active"
        other.className = ""
    } else {
        games.className = ""
        tools.className = ""
        other.className = "is-active"
    }
}

games.onclick = () => {
    selected = 1
    updateActive()
}

tools.onclick = () => {
    selected = 2
    updateActive()
}

other.onclick = () => {
    selected = 3
    updateActive()
}


