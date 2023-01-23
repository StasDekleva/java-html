const gameboard=document.querySelector(".board")
const numbers=document.querySelector(".numbers")
const letters=document.querySelector(".letters")

let white=true
let letter="ABCDEFGH"

for (let i=2;i<=64;i++){
    let square=document.createElement("div")
    square.classList.add("square")
    if(!white){
        square.classList.add("black")
    }
    white=!white
    if(i%8==0){
        white=!white
    }
gameboard.appendChild(square)

}





































