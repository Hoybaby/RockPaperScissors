

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
        const options = document.querySelectorAll('.options button') //this will grab all the buttons from the options class on line 40
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');

        //computer Hands/choices to fight against player
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {
            option.addEventListener('click', function() {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber]
                console.log(computerChoice)
                //we will call the comparing hands to see who actually won the game
            })
        });
    };

    const compareHands = (playerChoice, computerChoice) => {
        //this will update text when a player wins or loses
        const winner = document.querySelector('.winner');

        //checks for a tie
        if( playerChoice === computerChoice) {
            winner.textContent = 'It is a tie';
            return;
        }
        //check if player has a rock choice
        if(playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = "Player Wins!";
                return;
            } else {
                winner.textContent = "Computer Wins";
                return
            }
        }
    }


    //calls all the inner functions
    startGame();
    playMatch();
}

//start the game function

game();