

//this will host it all
const game = () => {
    let pScore = 0;
    let cScore = 0;

    //this will start the game.
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const matchScreen = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut'); // this adds a class to the intro class we targeted with querySelector. it adds the class fadeOut on click!
            matchScreen.classList.add('fadeIn');
        })
    }

    const playMatch = () => {
        const options = document.querySelector('.options button') //this will grab all the buttons from the options class on line 40
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');

        //computer Hands/choices to fight against player
        const computerOptions = ['rock', 'paper', 'scissors'];

        const computerNumber = Math.random() * 3;
        console.log(computerNumber);
        
    };


    //calls all the inner functions
    startGame();
    playMatch();
}

//start the game function

game();