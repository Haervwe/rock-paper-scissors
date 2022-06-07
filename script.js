let computerHand = 0;
let finished = false;
let playerCount = 0;
let computerCount = 0;
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const reset = document.querySelector(".reset");
const gameState = document.querySelector(".gameState");
const player = document.querySelector(".player");
const computer = document.querySelector(".computer");

//random number function with range variable (n) //

function randomNum (n){
    let a = Math.floor(Math.random()*n)+1;
    return a;
}

//function that stablishes the computer hand pick 1=rock 2=paper 3=scissor//

function computerPlay (){
    computerHand = randomNum(3);
  
}

//function to calculate game result of a round and keep track of match score, a = player hand, b = computer hand, c = number of rounds to play//

function game(a,b,c) {
    console.log(a);
    console.log(b);
    console.log(c);
    
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
        if (computerCount == c){
            gameState.textContent = "YOU LOOSE!";
            finished = true;
            return;
        }
        if (playerCount == c){
            gameState.textContent = "YOU WIN!";
            finished = true;
            return;
        }
        return;
    }

    if ((a == 2) && (b == 3)){   
        gameState.textContent = "Computer Won last round";
        computerCount++;
        if (computerCount == c){
            gameState.textContent = "YOU LOOSE!";
            finished = true;
            return;
        }
        if (playerCount == c){
            gameState.textContent = "YOU WIN!";
            finished = true;
            return;
        }
        return;
    }
    if ((a == 2) && (b == 1)){   
        gameState.textContent = "You Won last round";
        playerCount++;
        if (computerCount == c){
            gameState.textContent = "YOU LOOSE!";
            finished = true;
            return;
        }
        if (playerCount == c){
            gameState.textContent = "YOU WIN!";
            finished = true;
            return;
        }
        return;
    }
    if ((a == 3) &&( b == 1)){   
        gameState.textContent = "Computer Won last round";
        computerCount++;
        if (computerCount == c){
            gameState.textContent = "YOU LOOSE!";
            finished = true;
            return;
        }
        if (playerCount == c){
            gameState.textContent = "YOU WIN!";
            finished = true;
            return;
        }
        return;
    }
    if ((a == 3) && (b == 2)){   
        gameState.textContent = "You Won last round";
        playerCount++;
        if (computerCount == c){
            gameState.textContent = "YOU LOOSE!";
            finished = true;
            return;
        }
        if (playerCount == c){
            gameState.textContent = "YOU WIN!";
            finished = true;
            return;
        }
        return;
    }
    console.log("error");


}

//Function that updates scores//

function updateScore  (){
    console.log(playerCount)
    console.log(computerCount)
    computer.textContent = computerCount;
    player.textContent = playerCount;
}

// Reset Game function //

function resetGame () {
    finished = false;
    gameState.textContent = "Make a Choice"
    playerCount = 0;
    computerCount = 0;
    updateScore();
    console.log(finished)
    computerPlay();
}

//listeners that gets the selection of the players from the buttons//

rock.addEventListener("click", function () { computerPlay(); game(1, computerHand, 5);updateScore();});
paper.addEventListener("click", function () {  computerPlay(); game(2, computerHand, 5);updateScore();});
scissors.addEventListener("click",function () { computerPlay(); game(3, computerHand, 5);updateScore();});
reset.addEventListener("click", resetGame);

