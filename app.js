//DICE GAME

var scores, roundScore, avtivePlayer, dice;

score= [0,0];
roundScore = 0;
activePlayer = 1;

//dice = Math.floor(Math.random() * 6) + 1;


//var x = document.querySelector('#score-0').textContent;

//CSS = style CSS element = .display
document.querySelector('.dice').style.display = 'none';

//id selector which is faster than querySelector, SETS EVERY THING TO ZERO
document.getElementById('score-0').textContent ='0';
document.getElementById('score-1').textContent ='0';
document.getElementById('current-0').textContent ='0';
document.getElementById('current-1').textContent ='0';

//Make an anonymous function to use just for this eventListener

document.querySelector('.btn-roll').addEventListener('click', function(){
    //1.Random Number
    dice = Math.floor(Math.random() * 6) + 1;
    
    //2. Display the result
    var diceDOM = document.querySelector('.dice');
    document.querySelector('.dice').style.display = 'block';
    //change image src attribute
    diceDOM.src = 'dice-' + dice + '.png';
    
    
    
    //3. Update the round score IF the rolled number was NOT a 1
    
    if (dice !==1){
        //Add score
        roundScore = roundScore + dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

        
    }else{
        //Next player turnerary operator
        nextPlayer();
        
    }
    
    
});


document.querySelector('.btn-hold').addEventListener('click', function(){
  //Add CURRENT score to Global score
    score[activePlayer] += roundScore;
    
    //Update the UI
    document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
    
    //Check if the player has WON the game
    if(score[activePlayer] >= 10){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    }
    
    
    //Next Player
    nextPlayer();
    
    
    
    
});

function nextPlayer(){
        //Next player turnerary operator
        activePlayer ===0 ? activePlayer = 1: activePlayer=0;
        roundScore =0;
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        

        //Toggle the gray background between players rolling dice
         document.querySelector('.player-0-panel').classlist.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
    
    
        
        //Reset dice after roll of 1
        document.querySelector('.dice').style.display = 'none';
    }
    


