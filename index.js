// Intitialize the count as 0
// listen for the clicks on the INCREMENT button
// Increment the count variable when the button is clicked
// Change the count-el in the html to reflect the count

let count = 0
let countEl = document.getElementById("count-el")
function increment() {
    count += 1
    countEl.innerText = count
}

let saveData = document.getElementById("save-btn")
let saveEl = document.getElementById("save-el")
let entries = 0
function save(){
    saveEl.textContent += count + " - "
    entries = saveEl.textContent
    console.log(entries + "  -  ")
    countEl.textContent = 0
    count = 0
}

function clearEntries(){
    console.log("Cleared")
    saveEl.textContent = "Previous Entries are :"
}