let round
let random
user = 0
computer = 0
const userPoint = document.getElementById("user-point")
const compPoint = document.getElementById("comp-point")
userPoint.innerHTML = user
compPoint.innerHTML = computer
// const computerChoice = document.getElementById("comp-choice").value
// const userChoice = document.getElementById("user-choice").value

function rounds(){
    if(document.getElementById("round-input").value==""){
        round =5
        document.getElementById("remaining").style.display = "contents"
    }else{
        round = document.getElementById("round-input").value
        document.getElementById("remaining").style.display = "contents"
    }
    document.getElementById("prompt").style.display = "none"
}
function Rock(){
    document.getElementById("user-choice").value = "Rock"
    random = Math.floor(Math.random()*3)
    document.getElementById("comp-choice").value = ["Rock","Paper","Scissors"][random]

    if(document.getElementById("user-choice").value=="Rock" && document.getElementById("comp-choice").value == "Scissors"){
        user++
        userPoint.innerHTML = user
     compPoint.innerHTML = computer
    }else if(document.getElementById("user-choice").value=="Paper" && document.getElementById("comp-choice").value == "Rock"){
    user++
    userPoint.innerHTML = user
     compPoint.innerHTML = computer
    }else if(document.getElementById("user-choice").value=="Scissors" && document.getElementById("comp-choice").value == "Paper"){
    user++
    userPoint.innerHTML = user
     compPoint.innerHTML = computer
    }else if(document.getElementById("user-choice").value=="Scissors" && document.getElementById("comp-choice").value == "Rock"){
        computer++
        userPoint.innerHTML = user
     compPoint.innerHTML = computer
    }else if(document.getElementById("user-choice").value=="Rock" && document.getElementById("comp-choice").value == "Paper"){
        computer++
        userPoint.innerHTML = user
     compPoint.innerHTML = computer
    }else if(document.getElementById("user-choice").value=="Paper" && document.getElementById("comp-choice").value == "Scissors"){
        computer++
        userPoint.innerHTML = user
     compPoint.innerHTML = computer
    }

    if(user==round){
        document.getElementById("won").style.display = "flex"
        document.getElementById("button-group").style.display = "none"
        setTimeout(()=>{
            location.reload()
        },3000)
    }else if(computer==round){
        document.getElementById("button-group").style.display = "none"
        document.getElementById("lost").style.display = "flex"
        setTimeout(()=>{
            location.reload()
        },3000)
    }

   
}
function Paper(){
    document.getElementById("user-choice").value = "Paper"
    random = Math.floor(Math.random()*3)
    document.getElementById("comp-choice").value = ["Rock","Paper","Scissors"][random]

    if(document.getElementById("user-choice").value=="Rock" && document.getElementById("comp-choice").value == "Scissors"){
        user++
        userPoint.innerHTML = user
     compPoint.innerHTML = computer
    }else if(document.getElementById("user-choice").value=="Paper" && document.getElementById("comp-choice").value == "Rock"){
    user++
    userPoint.innerHTML = user
     compPoint.innerHTML = computer
    }else if(document.getElementById("user-choice").value=="Scissors" && document.getElementById("comp-choice").value == "Paper"){
    user++
    userPoint.innerHTML = user
     compPoint.innerHTML = computer
    }else if(document.getElementById("user-choice").value=="Scissors" && document.getElementById("comp-choice").value == "Rock"){
        computer++
        userPoint.innerHTML = user
     compPoint.innerHTML = computer
    }else if(document.getElementById("user-choice").value=="Rock" && document.getElementById("comp-choice").value == "Paper"){
        computer++
        userPoint.innerHTML = user
     compPoint.innerHTML = computer
    }else if(document.getElementById("user-choice").value=="Paper" && document.getElementById("comp-choice").value == "Scissors"){
        computer++
        userPoint.innerHTML = user
     compPoint.innerHTML = computer
    }

    if(user==round){
        document.getElementById("won").style.display = "flex"
        document.getElementById("button-group").style.display = "none"
        setTimeout(()=>{
            location.reload()
        },3000)
    }else if(computer==round){
        document.getElementById("button-group").style.display = "none"
        document.getElementById("lost").style.display = "flex"
        setTimeout(()=>{
            location.reload()
        },3000)
    }
}
function Scissors(){
    document.getElementById("user-choice").value = "Scissors"
    random = Math.floor(Math.random()*3)
    document.getElementById("comp-choice").value = ["Rock","Paper","Scissors"][random]

    if(document.getElementById("user-choice").value=="Rock" && document.getElementById("comp-choice").value == "Scissors"){
        user++
        userPoint.innerHTML = user
     compPoint.innerHTML = computer
    }else if(document.getElementById("user-choice").value=="Paper" && document.getElementById("comp-choice").value == "Rock"){
    user++
    userPoint.innerHTML = user
     compPoint.innerHTML = computer
    }else if(document.getElementById("user-choice").value=="Scissors" && document.getElementById("comp-choice").value == "Paper"){
    user++
    userPoint.innerHTML = user
     compPoint.innerHTML = computer
    }else if(document.getElementById("user-choice").value=="Scissors" && document.getElementById("comp-choice").value == "Rock"){
        computer++
        userPoint.innerHTML = user
     compPoint.innerHTML = computer
    }else if(document.getElementById("user-choice").value=="Rock" && document.getElementById("comp-choice").value == "Paper"){
        computer++
        userPoint.innerHTML = user
     compPoint.innerHTML = computer
    }else if(document.getElementById("user-choice").value=="Paper" && document.getElementById("comp-choice").value == "Scissors"){
        computer++
        userPoint.innerHTML = user
     compPoint.innerHTML = computer
    }

    if(user==round){
        document.getElementById("won").style.display = "flex"
        document.getElementById("button-group").style.display = "none"
        setTimeout(()=>{
            location.reload()
        },3000)
    }else if(computer==round){
        document.getElementById("button-group").style.display = "none"
        document.getElementById("lost").style.display = "flex"
        setTimeout(()=>{
            location.reload()
        },3000)
    }
}
