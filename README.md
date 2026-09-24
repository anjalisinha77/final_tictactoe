## Tic-Tac-Toe Game - Built using React

## 1. Overview: What does your project do?
My project is a Tic-Tac-Toe game built in React. In the game, two players take turns playing on the 3x3 board. First, a player picks where to place "X," then the second player picks where to place "O". After that, they continue alternating turns until one player wins (by getting three in a row) or the game ends in a draw.

My code has some of the following characteristics:
- it shows whose turn it currently is
- it checks if a player has won and displays who won
- it puts a message up if the game ends in a draw.
- it keeps a history of the moves made so the user can go back
- it lets the user start a new game with the "Play Again" button

## 2. How to run it: What installation and start commands should we use?
In CodeSandBox, you can just play the game in the Preview folder.
If you would like to play directly on your computer, go to Terminal on your computer: 
- download ZIP file from Github
- unzip the file on your computer's hard drive
- go to Terminal: cd into the folder final_tictactoe-main
- to confirm you are in the right folder, you can ls and check that package.json is in that folder!
- make sure that Node.js and npm are installed
- type in: npm install (ignore the warnings that say deprecated packages)
- type in: npm start
Then, the Terminal should state a local web address like http://localhost:3000. You can click that link or paste it into a web browser to play the tic-tac-toe game!

## 3. Your contribution: What did you build or change?
I built the game initially using the React tutorial. Then, I made some changes.

First, I updated some of the CSS to make the game more visually appealing for users: 

1. Made the squares in the grid larger. 
2. Centered the game on the page. 

I also made some changes to the React code. 

3. Added a check to detect if the game ends in a draw. 
4. If the game ended in a draw, then I displayed a message on the screen saying "Game ended in a draw." 
5. Added a "Play Again" button so users can restart the game whenever they want.

## 4. What you learned: Briefly describe one challenge and how you approached it.
One challenge I faced was how to check when the game ended in a draw. The original game only checked if a user had won.

So, I approached this by first checking whether all 9 squares in the board were filled. An empty square has a "null" value; if no squares were "null" and no winner was declared, then the game must have ended in a draw. When the game resetted, I also reset the game state back to the initial values it had when it first started.

## 5. References: Credit any tutorials, starters, or other resources you used.
- React Tutorial: https://react.dev/learn/tutorial-tic-tac-toe
- React Documentation: https://react.dev/
- CSS Tutorial: https://www.w3schools.com/css/

