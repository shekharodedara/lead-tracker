// #1. PEOPLE COUNTER
// let countPpl = document.getElementById("countppl")
// let saveCount = document.getElementById("previous")
// let count = 0

// function increment(){
//     count = count + 1
//     countPpl.innerText = count
//     //console.log(count)
// }
// function save(){
//     let pre = count + " - "
//     count = 0
//     saveCount.textContent += pre
//     countPpl.innerText = 0
// }
// function reset(){
//     count = 0
//     countPpl.innerText = 0
//     saveCount.textContent = "previous Entries: "
// }


// #2. BLACKJACK
// let sum  = 0
// let hasBlackJack = false
// let isAlive = false
// let m = ""
// let msg = document.getElementById("msg")
// let cards = document.getElementById("cardd") 
// let card = []
// let total = document.getElementById("sum")
// let player = {
//     name: "skr",
//     chips: 100
// }
// let pl = document.getElementById("player")
// pl.textContent = player.name + ": $" + player.chips
// function getRendomNumber(){
//     ran = Math.floor(Math.random() * 13) + 1
//     if(ran > 10){
//         return 10
//     }else if(ran === 1){
//         return 11
//     }else{
//         return ran
//     }
// }
// function startGAME(){
//     isAlive = true
//     let fcard = getRendomNumber()
//     let scard = getRendomNumber()
//     card = [fcard, scard]
//     sum  = fcard + scard
//     renderGame()
// }
// function renderGame(){
//     total.textContent = "SUM: " + sum
//     cards.textContent = "CARDS: "
//     for(let i=0; i < card.length; i++){
//         cards.textContent += card[i] + " "
//     }
//     if(sum < 21){
//         m = "PLZ PICK A NEW CARD!"
//     }else if(sum === 21){
//         m = "YOU GOT THE BLACKJACK!"
//         hasBlackJack = true
//     }else{
//         m = "You've lost the game!"
//         isAlive = false
//     }
//     msg.textContent = m
// }
// function newCard(){
//     if(isAlive === true && hasBlackJack === false){
//         let newcard = getRendomNumber()
//         sum += newcard
//         card.push(newcard)
//         //cards.textContent = "CARDS: " + fcard + " " + scard + " " + newcard
//         renderGame()
//     }
// }


// #3. Practice array operations
// let arr = ["china", "india", "USA", "indonesia", "pakistan"]
// let con = document.getElementById("cont")
// let cont = document.getElementById("cont2")
// function logdata(){
//     console.log("5 largest countries")
//     for(let i = 0; i < arr.length; i++){
//         console.log("- " + arr[i])
//         con.textContent += arr[i] + " "
//     }
// }
// logdata()

// let arrr = ["Uk", "INDIA", "USA", "indonesia", "UAE"]
// console.log(arrr)
// arrr.pop() // remove item at the end of an array
// arrr.push("pakistan") // add item at the end of an array
// arrr.shift() // remove item at the beggining of an array
// arrr.unshift("china") // add item at the beggining of an array

// function logdat(){
//     console.log("5 largest countries")
//     for(let i = 0; i < arrr.length; i++){
//         console.log("- " + arrr[i])
//         cont.textContent += arrr[i] + " "
//     }
// }
// logdat()


// #4. sorting array items
// ar = [1, 2, 3, 2, 1, 2, 1, 3, 3, 1, 2, 4, 5]
// let one = document.getElementById("o")
// let two = document.getElementById("tt")
// let three = document.getElementById("ttt")
// function sortt()
// {
// for(let i = 0; i < ar.length; i++){
//     if(ar[i] === 1){
//         one.textContent += 1 + " "
//     }else if(ar[i] === 2){
//         two.textContent += 2 + " "
//     }else if(ar[i] === 3){
//         three.textContent += 3 + " "
//     }
// }
// }
// sortt()


//#5. chrome extention

// #5.4 we will typecast a srting to an array and array to a string all together
// with the help of JSON object
// let leads = `["www.example.com"]`
// leads = JSON.parse(leads) // typecast a string as an array
// leads.push("www.example2.0.com")
// console.log(leads)
// console.log(typeof leads)
// leads = JSON.stringify(leads) // typecast to a sting
// console.log(leads)
// console.log(typeof leads)


// #5.3 in order to set key values to the localstorage we have to use JSON methods 
//as localstorage is accepts only string values and we have an array required
// let leads = ["www.example.com"]
// leads = JSON.stringify(leads) // converts to a sting
// console.log(leads)
// console.log(typeof leads)


// #5.2 passing a string variable to json object so that.. 
// we can add an array element using push()(array function)
// let leads = `["www.example.com"]`
// leads = JSON.parse(leads) //parses a string as an array
// leads.push("www.example2.0.com")
// console.log(leads)


// #5.1 to store key values to the localstorage 
// can be seen in inspect element >> application >> localstoragr
// localStorage.setItem("lead", "www.example.com")
// let ls = localStorage.getItem("lead") 
// console.log(ls) //or  console.log(localStorage.getItem("lead"))
// localStorage.clear()

let lead = []
const inputex = document.getElementById("tex")
const inputbtn = document.getElementById("save")
const unli = document.getElementById("ulel")
const btntab =document.getElementById("tab")
const dlt = document.getElementById("dlt")
const leadsfromLS = JSON.parse( localStorage.getItem("lead") )
//const tab = [{url: "www.example.com"}]
//console.log(leadsfromLS)
//localStorage.clear()
if(leadsfromLS){
    lead = leadsfromLS
    render(lead)
}

inputbtn.addEventListener("click", function(){
    if(inputex.value !== ""){
        lead.push(inputex.value)
        inputex.value = ""
    }
    localStorage.setItem("lead", JSON.stringify(lead))
    render(lead)
})
    console.log(localStorage.getItem("lead"))
    console.log(lead)
    
dlt.addEventListener("dblclick", function(){
    localStorage.clear()
    lead = []
    render(lead)
})

btntab.addEventListener("click", function(){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            lead.push(tabs[0].url)
            localStorage.setItem("lead", JSON.stringify(lead))
            render(lead)
        })
})

function render(a){
let listitem = ""
for(let i = 0; i < lead.length; i++){
        listitem += `<li>
                    <a target='_blank' href='${lead[i]}'> ${lead[i]}
                    </a>
                    </li>`
        // const li = document.createElement("li")
        // li.textContent = lead[i]
        // unli.append(li)
    }
    unli.innerHTML = listitem
}