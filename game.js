let score = JSON.parse(localStorage.getItem('score')) || { //ANOTHER WAY OF ASSIGNING VALUES
  wins:0,
  losses:0,
  ties:0
}; //its properties  are created from function play
 //default value for score, cuz if we try to get .wins from null itll give an error*/
let scoreElementWins = document.querySelector('.js-score-wins');
let scoreElementLosses = document.querySelector('.js-score-losses');
let scoreElementTies = document.querySelector('.js-score-ties');
function decideMove(){
  let computerMove ='unknown';
  const randomNum = Math.random(); 
  if(randomNum>=0 && randomNum<1/3){
    computerMove = 'rock';
  }
  else if(randomNum>=1/3 && randomNum<2/3){
    computerMove = 'paper';
  }
  else{
    computerMove = 'scissors';
  }
  return computerMove;      
}
function play(computerMoveResult,playerMove){
  let result = 'unknown';
  if(computerMoveResult === playerMove){
    result = 'TIE';
    score.ties++;
  }
  else if((computerMoveResult === 'rock' && playerMove === 'paper')||(computerMoveResult === 'scissors' && playerMove === 'rock')||(computerMoveResult === 'paper' && playerMove === 'scissors')){
    result = 'YOU WIN !';
    score.wins++;
  }
  else if((computerMoveResult === 'paper' && playerMove === 'rock')||(computerMoveResult === 'rock' && playerMove === 'scissors')||(computerMoveResult === 'scissors' && playerMove === 'paper')){
    result = 'YOU LOSE';
    score.losses++;
  }
  localStorage.setItem('score',JSON.stringify(score)); //into 

  document.querySelector('.js-move')
    .innerHTML = `Computer Chose : `; //didnt work as a function, scope of parameters ig ?
  document.querySelector('.js-computer-image')
    .innerHTML = `<img src ="pictures/${computerMoveResult}-icon.jpeg" class = "comp-move">`; //these only work for the outer class each time, why not for the class for the <p> that the image is in?
  //showResult
  document.querySelector('.js-result')
    .innerHTML = `${result}`;
  
  setPageScore();
}
function setPageScore(){
  document.querySelector('.js-score-wins')
    .innerHTML = `Wins: ${score.wins}`; //apparently, scope of score isnt an issue here?
  document.querySelector('.js-score-losses')
    .innerHTML = `Losses: ${score.losses}`;
  document.querySelector('.js-score-ties')
    .innerHTML = `Ties: ${score.ties}`;
}
function resetScore(){
  document.querySelector('.js-score-wins')
    .innerHTML = `Wins: ${0}`;
  document.querySelector('.js-score-losses')
    .innerHTML = `Losses: ${0}`;
  document.querySelector('.js-score-ties')
    .innerHTML = `Ties: ${0}`;
  
}
function removeText(){
  document.querySelector('.js-move')
    .innerHTML = ``;
  document.querySelector('.js-result')
    .innerHTML = ``;
  document.querySelector('.js-computer-image')
    .innerHTML = ``;
}
/*function showClicked(userMove){
  if(userMove === 'rock')
    document.querySelector('.rock-button')
      .innerHTML = `<img src ="pictures/${userMove}-icon-red.jpeg" class = "play-icon">`;
  else if(userMove === 'paper')
    document.querySelector('.paper-button')
      .innerHTML = `<img src ="pictures/${userMove}-icon-red.jpeg" class = "play-icon">`;
  else{
    document.querySelector('.scissors-button')
      .innerHTML = `<img src ="pictures/${userMove}-icon-red.jpeg" class = "play-icon">`;
  }
}
function resetClick(){
  document.querySelector('.rock-button')
    .innerHTML = `<img src ="pictures/rock-icon.jpeg" class = "play-icon">`;
  document.querySelector('.paper-button')
    .innerHTML = `<img src ="pictures/paper-icon.jpeg" class = "play-icon">`;
  document.querySelector('.scissors-button')
    .innerHTML = `<img src ="pictures/scissors-icon.jpeg" class = "play-icon">`;
}
TRY PUTTING SHOWCLICKED IN THE ONCLICK PROPERTIES OF EACH BUTTON, AND RESET CLICK BEFORE IT, IF IT DOESNT WORK PUT ALL OF THOSE ICONS IN HTML IMG IN <p> FIRST*/