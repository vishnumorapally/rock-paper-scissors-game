let userscore = 0
let computerscore = 0
let drawscore = 0
let winner = ""

const showuserscore = document.querySelector("#userscore")
const showcomputerscore = document.querySelector("#compscore")
const showWinner = document.querySelector("#winner")
const showdrawscore = document.querySelector("#draw")

showWinner.innerHTML = winner
showcomputerscore.innerHTML = computerscore
showuserscore.innerHTML = userscore
showdrawscore.innerHTML = drawscore

const reset = document.querySelector("#reset")
reset.addEventListener("click",()=>{
    userscore = 0
    computerscore = 0
    drawscore = 0
    winner = ""
    const usermove = document.querySelector("#you-move")
    const compmove = document.querySelector("#comp-move")
    usermove.innerHTML = ""
    compmove.innerHTML = ""
    showWinner.innerHTML = winner
    showcomputerscore.innerHTML = computerscore
    showuserscore.innerHTML = userscore
    showdrawscore.innerHTML = drawscore
})



const options = document.querySelectorAll(".option")


const computeroption =()=>{
    choices = ["rock","paper","scissors"]
    return choices[Math.floor(Math.random()*2)]
}


const playGame = (useroption)=>{
    let comp = computeroption()
    console.log("user = ",useroption)
    console.log("computer = ",comp)

    const usermove = document.querySelector("#you-move")
    const compmove = document.querySelector("#comp-move")
    usermove.innerHTML = useroption
    compmove.innerHTML = comp

    
    const winner = document.querySelector("#winner")


    if(comp === useroption){
        drawscore+=1
        winner.innerHTML = "Draw"
    }else{
        if(useroption === "rock" && comp=== "paper"){
            computerscore+=1
            winner.innerHTML = "COMPUTER WON"

        }else if (useroption === "rock" && comp == "scissors"){ 
            userscore +=1
            winner.innerHTML = "YOU WON"
        }
        if(useroption === "paper" && comp === "scissors"){
            computerscore+=1
            winner.innerHTML = "COMPUTER WON"
        }else if(useroption === "paper" && comp === "rock"){
            userscore +=1
            winner.innerHTML = "YOU WON"
        }
        if(useroption === "scissors" && comp === "rock"){
            computerscore+=1
            winner.innerHTML = "COMPUTER WON"
        }else if(useroption === "scissors" && comp === "paper"){
            userscore +=1
            winner.innerHTML = "YOU WON"
        }
    }
    console.log("user = ",userscore,"computer = ",computerscore,"draws = ",drawscore)

    const showuscore = document.querySelector("#userscore")
    const showcscore = document.querySelector("#compscore")
    const showdscore = document.querySelector("#draw")

    showuscore.innerHTML = userscore
    showcscore.innerHTML = computerscore
    showdscore.innerHTML = drawscore
    
}




options.forEach((option)=>{
    option.addEventListener("click",()=>{
        const useroption = option.getAttribute("id")
        
        playGame(useroption);
    })
})