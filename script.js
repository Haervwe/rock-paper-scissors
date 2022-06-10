
//html elements to modify//

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const lizard = document.querySelector(".lizard");
const spock = document.querySelector(".pick-spock");
const reset = document.querySelector(".reset");
const gameState = document.querySelector(".gameState");
const player = document.querySelector(".player");
const computer = document.querySelector(".computer");
const standar = document.querySelector(".standar");
const special = document.querySelector(".special");
const container = document.querySelector(".container")
const start = document.querySelector(".start")
const finish = document.querySelector(".restart");
const winner = document.querySelector(".finishText");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");

//game variables//
let computerHand = 0;
let finished = false;
let playerCount = 0;
let computerCount = 0;
let gameType = "";


//random number function with range variable (n) //

function randomNum (n){
    let a = Math.floor(Math.random()*n)+1;
    return a;
}

//function that stablishes the computer hand pick 1=rock 2=paper 3=scissor//

function computerPlay(){
    if (gameType == "standar") {
        computerPlayStandar();
        return;
    } else if (gameType == "spock") {
        computerPlaySpock();
        return;
    }
}

function computerPlayStandar (){
    computerHand = randomNum(3);
    switch (computerHand){
        case 1:
            one.style.backgroundColor = "red";
            two.style.backgroundColor = "";
            three.style.backgroundColor = "";
            four.style.backgroundColor = "";
            five.style.backgroundColor = "";
            break;
        case 2:
            one.style.backgroundColor = "";
            two.style.backgroundColor = "red";
            three.style.backgroundColor = "";
            four.style.backgroundColor = "";
            five.style.backgroundColor = "";
            break;
        case 3:
            one.style.backgroundColor = "";
            two.style.backgroundColor = "";
            three.style.backgroundColor = "red";
            four.style.backgroundColor = "";
            five.style.backgroundColor = "";
            break;
        
        
    }
  
}
 
//function that stablishes the computer hand pick 1=rock 2=paper 3=scissor 4=lizard 5=spock//

function playerHand (n){
    switch (n){
        case 1:
            rock.style.backgroundColor = "red";
            paper.style.backgroundColor = "";
            scissors.style.backgroundColor = "";
            lizard.style.backgroundColor = "";
            spock.style.backgroundColor = "";
            break;
        case 2:
            rock.style.backgroundColor = "";
            paper.style.backgroundColor = "red";
            scissors.style.backgroundColor = "";
            lizard.style.backgroundColor = "";
            spock.style.backgroundColor = "";
            break;
        case 3:
            rock.style.backgroundColor = "";
            paper.style.backgroundColor = "";
            scissors.style.backgroundColor = "red";
            lizard.style.backgroundColor = "";
            spock.style.backgroundColor = "";
            break;
        case 4:
            rock.style.backgroundColor = "";
            paper.style.backgroundColor = "";
            scissors.style.backgroundColor = "";
            lizard.style.backgroundColor = "red";
            spock.style.backgroundColor = "";
            break;
        case 5:
            rock.style.backgroundColor = "";
            paper.style.backgroundColor = "";
            scissors.style.backgroundColor = "";
            lizard.style.backgroundColor = "";
            spock.style.backgroundColor = "red";
            break;
        
    }
  
}

function computerPlaySpock (){
    computerHand = randomNum(5);
    switch (computerHand){
        case 1:
            one.style.backgroundColor = "red";
            two.style.backgroundColor = "";
            three.style.backgroundColor = "";
            four.style.backgroundColor = "";
            five.style.backgroundColor = "";
            break;
        case 2:
            one.style.backgroundColor = "";
            two.style.backgroundColor = "red";
            three.style.backgroundColor = "";
            four.style.backgroundColor = "";
            five.style.backgroundColor = "";
            break;
        case 3:
            one.style.backgroundColor = "";
            two.style.backgroundColor = "";
            three.style.backgroundColor = "red";
            four.style.backgroundColor = "";
            five.style.backgroundColor = "";
            break;
        case 4:
            one.style.backgroundColor = "";
            two.style.backgroundColor = "";
            three.style.backgroundColor = "";
            four.style.backgroundColor = "red";
            five.style.backgroundColor = "";
            break;
        case 5:
            one.style.backgroundColor = "";
            two.style.backgroundColor = "";
            three.style.backgroundColor = "";
            four.style.backgroundColor = "";
            five.style.backgroundColor = "red";
            break;
        
    }
  
}


//function to calculate Spock game result of a round and keep track of match score, a = player hand, b = computer hand, c = number of rounds to play//
function gameSpock(a,b) {
    
    
    if (finished == true) {
        alert("Game Finished, Please Reset!");
    }

    if (a == b){
        gameState.textContent = "Draw";
        return;
    }
    if ((a == 1) && (b == 2)){   
        gameState.textContent = "Computer Won last round";
        computerCount++;
        return;
    }
    if ((a == 1) && (b == 3)){   
        gameState.textContent = "You Won last round";
        playerCount++;
        return;
    }

    if ((a == 1) && (b == 5)){   
        gameState.textContent = "Computer Won last round";
        computerCount++;
        return;
    }
    if ((a == 1) && (b == 4)){   
        gameState.textContent = "You Won last round";
        playerCount++;
        return;
    }

    if ((a == 2) && (b == 3)){   
        gameState.textContent = "Computer Won last round";
        computerCount++;
        return;
    }
    if ((a == 2) && (b == 1)){   
        gameState.textContent = "You Won last round";
        playerCount++;
        return;
    }
    if ((a == 2) && (b == 4)){   
        gameState.textContent = "Computer Won last round";
        computerCount++;
        return;
    }
    if ((a == 2) && (b == 5)){   
        gameState.textContent = "You Won last round";
        playerCount++;
        return;
    }
    if ((a == 3) &&( b == 1)){   
        gameState.textContent = "Computer Won last round";
        computerCount++;
        return;
    }
    if ((a == 3) && (b == 2)){   
        gameState.textContent = "You Won last round";
        playerCount++;
        return;
    }
    if ((a == 3) &&( b == 5)){   
        gameState.textContent = "Computer Won last round";
        computerCount++;
        return;
    }
    if ((a == 3) && (b == 4)){   
        gameState.textContent = "You Won last round";
        playerCount++;
        return;
    }
    if ((a == 4) &&( b == 1)){   
        gameState.textContent = "Computer Won last round";
        computerCount++;
        return;
    }
    if ((a == 4) && (b == 2)){   
        gameState.textContent = "You Won last round";
        playerCount++;
        return;
    }
    if ((a == 4) &&( b == 3)){   
        gameState.textContent = "Computer Won last round";
        computerCount++;
        return;
    }
    if ((a == 4) && (b == 5)){   
        gameState.textContent = "You Won last round";
        playerCount++;
        return;
    }
    if ((a == 5) &&( b == 2)){   
        gameState.textContent = "Computer Won last round";
        computerCount++;
        return;
    }
    if ((a == 5) && (b == 1)){   
        gameState.textContent = "You Won last round";
        playerCount++;
        return;
    }
    if ((a == 5) &&( b == 4)){   
        gameState.textContent = "Computer Won last round";
        computerCount++;
        return;
    }
    if ((a == 5) && (b == 3)){   
        gameState.textContent = "You Won last round";
        playerCount++;
        return;
        
    }
   


}

//function to calculate standar game result of a round and keep track of match score, a = player hand, b = computer hand, c = number of rounds to play//

function gameStandar(a,b) {
    
    
    if (finished == true) {
        alert("Game Finished, Please Reset!");
    }

    if (a == b){
        gameState.textContent = "Draw";
        return;
    }
    if ((a == 1) && (b == 2)){   
        gameState.textContent = "Computer Won last round";
        computerCount++;
        return;
    }
    if ((a == 1) && (b == 3)){   
        gameState.textContent = "You Won last round";
        playerCount++;
        return;
    }

    if ((a == 2) && (b == 3)){   
        gameState.textContent = "Computer Won last round";
        computerCount++;
        return;
    }
    if ((a == 2) && (b == 1)){   
        gameState.textContent = "You Won last round";
        playerCount++;
        return;
    }
    if ((a == 3) &&( b == 1)){   
        gameState.textContent = "Computer Won last round";
        computerCount++;
        return;
    }
    if ((a == 3) && (b == 2)){   
        gameState.textContent = "You Won last round";
        playerCount++;
        return;
    }
    console.log("error");


}

//Function that updates scores//

function updateScore  (c) {
    
    if (computerCount == c){
        winner.textContent = "YOU LOOSE!";
        finished = true;
        showFinish();
        
    } else
    if (playerCount == c){
        winner.textContent = "YOU WIN!";
        finished = true;
        showFinish();
        
    } else {

    computer.textContent = computerCount;
    player.textContent = playerCount;
    }

}

// Reset Game function //

function resetGame () {
    finished = false;
    gameState.textContent = "Make a Choice"
    playerCount = 0;
    computerCount = 0;
    updateScore();
    computerPlay();
    showStart();
}

// functions to allow dinamyc page changes //


function showStandar () {
    container.style.display="flex";
    start.style.display = "none"; 
    lizard.style.display="none";
    four.style.display="none";
    five.style.display="none";
    spock.style.display="none";
    finish.style.display="none"
    gameType = "standar";
}

function showSpock () {
    container.style.display="flex";
    lizard.style.display="flex";
    spock.style.display="flex";
    four.style.display="flex";
    five.style.display="flex";
    start.style.display = "none"; 
    finish.style.display="none"
    gameType = "spock";
}

function showFinish () {
    container.style.display="none";
    lizard.style.display="none";
    spock.style.display="none";
    four.style.display="none";
    five.style.display="none";
    start.style.display = "none";
    finish.style.display="flex"
    gameType = "";

}

function showStart () {
    container.style.display="none";
    lizard.style.display="none";
    spock.style.display="none";
    four.style.display="none";
    five.style.display="none";
    start.style.display = "flex";
    finish.style.display="none"
    gameType = "";
}

//game logic selector //

function game (a,b){
    if (gameType == "standar"){
        gameStandar(a,b);
        return;
    } 
    if (gameType == "spock"){
        gameSpock(a,b);
        return;
    } else {
    console.log(error);
    }
}


//listeners that gets the selection of the players from the buttons//

rock.addEventListener("click", function () { computerPlay(); playerHand(1); game(1, computerHand);updateScore(5);});
paper.addEventListener("click", function () {  computerPlay(); playerHand(2); game(2, computerHand);updateScore(5);});
scissors.addEventListener("click",function () { computerPlay(); playerHand(3); game(3, computerHand);updateScore(5);});
lizard.addEventListener("click",function () { computerPlay(); playerHand(4); game(4, computerHand);updateScore(5);});
spock.addEventListener("click",function () { computerPlay(); playerHand(5); game(5, computerHand);updateScore(5);});
reset.addEventListener("click", resetGame);
standar.addEventListener("click", showStandar);
special.addEventListener("click", showSpock);

