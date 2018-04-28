
/*const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase()
  if (userInput === 'paper' || userInput === 'rock' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput
  } else {
    console.log('Wrong value')
  }
}
*/


const getUserChoice = () => {
 let randomNumber = Math.floor(Math.random() * 3) 
 switch (randomNumber){
  case 0:
   return 'rock'
  case 1:
   return 'scissors'
  case 2:
   return 'paper'
 }
}

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      return 'rock'
    case 1:
      return 'scissors'
    case 2:
      return 'paper'
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game is a tie'
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer win'
    } else {
      return 'Player win'
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer win'
    } else {
      return 'Player win'
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer win'
    } else {
      return 'Player win'
    }
  } else if (userChoice === 'bomb') {
    return 'Player Win'
  }
}

const playGame = () => {
  const userChoice = getUserChoice()
  const computerChoice = getComputerChoice()
  console.log('You threw: ' + userChoice)
  console.log('Computer choice: ' + computerChoice)

  console.log(determineWinner(userChoice, computerChoice))
}

playGame()
