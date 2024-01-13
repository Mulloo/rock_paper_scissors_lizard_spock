# Rock Paper Scissors Lizard Spock

Rock Paper Scissors Lizard Spock is a game just like Rock Paper Scissors but with added choices.
This game was popularized by the TV show The Big Bang Theory. This is a website where you can learn to play the game against a computer.

You can find the site here [Rock Paper Scissors Lizard Spock](https://mulloo.github.io/rock_paper_scissors_lizard_spock/)

![Am I responsive image](doc/amiresponsive.png)

## Features

### Added

- **Player Choices:** Choose between Rock, Paper, Scissors, Lizard and Spock.
- **Computer Opponent:** The computer opponent randomly selects its move based on the chosen difficulty level.
- **Score Tracking:** Keep track of the player's and computer's score.
- **Round Tracking:** Keep track of the amount of rounds you have played.
- **Computer Choice:** Tells you know what the computer has picked.
- **PlayerChoice:** Tells you know what you picked.
- **Game Rules:** Shows the rules for anyone unfamiliar with the game.

### Not Added

- **Difficulty levels:** Choose from three different levels of challenge -Easy, Medium and Hard.

## User Stories

- As a user, I need to be able to start the game.

![Image of the start button.](doc/startbtn.png)

- As a user, I need a way to make my choice.

![Image of the choice buttons rock paper scissors lizard spock.](doc/choicebtns.png)

- As a user, I need to know the rules.

![Image of the rules for the game.](doc/rules.png)

- As a user, I need to know the scores.

![Image of the scores](doc/score.png)

- As a user, I need to know the outcome of who won.

![Computer win](doc/cpuwinner.png)

![Player Win](doc/playerwin.png)

![Its a tie](doc/tie.png)

- As a user, I need to know how many rounds have been played.

![An image of the rounds](doc/rounds.png)

- As a user, I need to know what the computer chooses and what I choose

![player and computer choice](doc/playercpuchoice.png)

- As a user, I need to be able to restart the game if I want

![Restart button image](doc/restart.png)

## Validation

- [HTML Validation](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmulloo.github.io%2Frock_paper_scissors_lizard_spock%2F) No errors showing for the HTML.

- [CSS Validation](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmulloo.github.io%2Frock_paper_scissors_lizard_spock%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en) No errors showing for the CSS.

- JavaScript Validation.

![js validation](doc/jsvalidation.png)

## Lighthouse

- Lighthouse mobile report.

![lighthouse Mobile Report image](doc/lighthousetestmobile.png)

- Lighthouse Desktop report.

![lighthouse Desktop Report image](doc/lighthousedesktop.png)

## Manual Testing

|     Feature     |                  Action                 |                       Expected result                       | Tested | Passed |                               Comments                              |
|:---------------:|:---------------------------------------:|:-----------------------------------------------------------:|:------:|:------:|:-------------------------------------------------------------------:|
|   Start button  |        Click on the start button        |                        The game start                       |   Yes  |   Yes  | The start text changes to restart once the game container is loaded |
|  Choice Button  |   Click on one of the choices .ie rock  | The choice is passed and check then the output is displayed |   Yes  |   Yes  |          All additional dependent features function as well.          |
|  Player choice  |   Updates after choice button clicked   |                 Outputs the player's choice                 |   Yes  |   Yes  |                                  -                                  |
| Computer Choice |   Updates after choice button clicked   |                   Outputs the CPU's choice                  |   Yes  |   Yes  |                                  -                                  |
|      Rounds     |   Updates after choice button clicked   |                  Increases after each round                 |   Yes  |   Yes  |                                  -                                  |
|   Player Score  |         Updates after each round        |             Increases each time the player wins             |   Yes  |  Yes   |                                  -                                  |
|    CPU Score    |         Updates after each round        |            Increases each time the computer wins            |   Yes  |   Yes  |                                  -                                  |
|      Socials     | click the social logo you want to visit |    Bring the user to the social homepage of there choice    |  Yes   |   Yes  |                                -                                     |

## Bugs

### Fixed

- Due to a scope issue, the variable ComputerChoice was stuck as undefined this was fixed by moving multiple lines of code outside of the computerChoice function and creating a new function called mainGameLogic.
- After restarting the game the rounds and scores would jump to the previous score and rounds due to the function update variables didn't have the variables playerScore cpuScore and rounds set at all. This was fixed by setting the variables to the correct values inside this function
-

### Not Fixed

- No know unfixed bugs

## Technologies Used

- [HTML](https://www.w3schools.com/html/) is used as the foundation of the site.
- [CSS](https://www.w3schools.com/Css/) is used to add style and layout of the site.
- [JavaScript](https://www.w3schools.com/js/) is used for the main functionality of the site.
- [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) is used to arrange items on the page.
- [VSCode](https://code.visualstudio.com/) is used as the IDE for writing and editing code.
- [Git](https://git-scm.com/) is used as a version control.
- [GitHub](https://github.com/) is used to store the repository and deploy the sites.

## Citation

- The footer is taken from the Titanfall 2 wiki repo [Titanfall](https://github.com/Mulloo/Titanfall-2-Weapon-Wiki) icons are form font awesome.

-
