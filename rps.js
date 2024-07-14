const score ={
    wins: 0,
    loss: 0,
    ties: 0
 };
update();






function playGame(playerMove)
{
    PickcomputerMove();

console.log(computerMove);

 let result='';

 if (playerMove==='scissors')
 {
    if(computerMove==='rock')
    {
        result='You lose';
    }

    else if(computerMove==='paper')
    {
        result='You win';
    }

    else if(computerMove==='scissors')
    {
        result='Tie';
    }
 }
 else if(playerMove==='paper')

 {
    if(computerMove==='rock')
{
    result='You win';
}

else if(computerMove==='paper')
{
    result='Tie';
}

else if(computerMove==='scissors')
{
    result='You lose';
}

 }

 else if(playerMove==='rock')
 {
    

    if(computerMove==='rock')
    {
    result='Tie';
    }

    else if(computerMove==='paper')
    {
    result='You lose';
    }

    else if(computerMove==='scissors')
    {
    result='You win'
    }

 }    

if(result==='You win')
{
score.wins+=1;
}
else if(result==='You lose')
{
score.loss+=1;
}
else if(result==='Tie')
{
score.ties+=1;
}  

document.querySelector('.js-move').
innerHTML= ` You picked
<img src="rock-paper-img.html/${playerMove}-emoji.png" class="move-icon">
Computer picked
<img src="rock-paper-img.html/${computerMove}-emoji.png" class="move-icon">
`

document.querySelector('.js-result').
innerHTML=result;

update();




function update()
{
document.querySelector('.js-score').
  innerHTML=` 
   Wins: ${score.wins}, Loses: ${score.loss}, Ties: ${score.ties} `;
}

 
}


function PickcomputerMove(){

        const randomNumber=Math.random();

if(randomNumber>= 0 && randomNumber <1/3)
{
     computerMove='rock';
}

else if(randomNumber>=1/3 && randomNumber< 2/3)
{
    computerMove='paper';

}
else if(randomNumber >=2/3 && randomNumber <1)
{

     computerMove='scissors';
}

}
