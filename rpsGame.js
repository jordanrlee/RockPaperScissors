const game = () => {
	let playerScore = 0;
	let computerScore = 0;
	let tieScore = 0;
	let rounds = 10;

	const startGame = () => {
		const rockBtn = document.querySelector('.rock');
		const paperBtn = document.querySelector('.paper');
		const scissorBtn = document.querySelector('.scissor');
		const playerOptions = [rockBtn,paperBtn,scissorBtn];
		const computerOptions = ['rock','paper','scissors']
		
		playerOptions.forEach(option => {
			option.addEventListener('click',function(){
				// decrement rounds
				const roundsLeft = document.querySelector('.roundsLeft');
				rounds--;
				roundsLeft.innerText = 'Rounds Left: ' + rounds;
				
				// assign a choice to the computer
				const choiceNumber = Math.floor(Math.random()*3);
				const computerChoice = computerOptions[choiceNumber];

				// check winner
				winner(this.innerText,computerChoice)
				
				// Calling gameOver at the end of the rounds (10)
				if(rounds == 0){
					gameOver(playerOptions,roundsLeft);
				}
			})
		})
		
	}

	// Function to check winner
	const winner = (player,computer) => {
		const result = document.querySelector('.result');
		const playerScoreBoard = document.querySelector('.p-count');
		const computerScoreBoard = document.querySelector('.c-count');
		const tiesScoreBoard = document.querySelector('.t-count');
		player = player.toLowerCase();
		computer = computer.toLowerCase();
		if(player === computer){
			result.textContent = 'Tie'
			tieScore++;
			tiesScoreBoard.textContent = tieScore;
		}
		else if(player == 'rock'){
			if(computer == 'paper'){
				result.textContent = 'Computer Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;

			}else{
				result.textContent = 'Player Won'
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'scissors'){
			if(computer == 'rock'){
				result.textContent = 'Computer Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'Player Won';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'paper'){
			if(computer == 'scissors'){
				result.textContent = 'Computer Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'Player Won';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
	}

	// function to end the game and display the winner
	const gameOver = (playerOptions,roundsLeft) => {

		const chooseWeapon = document.querySelector('.weapChoice');
		const result = document.querySelector('.result');
		const resetBtn = document.querySelector('.reset');
		
		// to hide the player options
		playerOptions.forEach(option => {
			option.style.display = 'none';
		})


		if(playerScore > computerScore){
			chooseWeapon.innerText = 'Victory!';
			roundsLeft.style.display = 'none';
			result.style.fontSize = '2rem';
			result.innerText = 'You win!'
			result.style.color = '#AAFF00';
		}
		else if(playerScore < computerScore){
			chooseWeapon.innerText = 'Defeat!';
			roundsLeft.style.display = 'none';
			result.style.fontSize = '2rem';
			result.innerText = 'Computer wins!';
			result.style.color = 'red';
		}
		else{
			chooseWeapon.innerText = 'Draw!';
			roundsLeft.style.display = 'none';
			result.style.fontSize = '2rem';
			result.innerText = 'Tie';
			result.style.color = 'grey'
		}
		resetBtn.innerText = 'Play again?';
		resetBtn.style.display = 'flex'
		resetBtn.addEventListener('click',() => {
			window.location.reload();
		})
	}

	// start the game function
	startGame();
}

// calling the game function
game();
