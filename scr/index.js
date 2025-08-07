let peopleCounter = document.getElementById("people-counter")
let previousEntires = document.getElementById("previous-entires")

let count = 0

function visited() {
    count += 1
    peopleCounter.innerText = count
}

function save() {
    let countOff = count + " - "
    previousEntires.textContent += countOff
    peopleCounter.innerText = 0
    count = 0
}