# 🦖 Dino Jump

## 💻 Technologies & Tools Used
- HTML
- CSS
- JavaScript & JQuery
- Git & GitHub
- Figma 
<br>

![](https://skills.thijs.gg/icons?i=js,html,css,jquery,git,github,figma)

<br>

## 🕹 How to play
The user controls the Dinosaur and helps him jump over obstacles by pressing the space bar. If the Dinosaur fails to jump over any obstacles successfully, a "Game Over" sign will pop out. 

The goal of the game is to get as many points as possible.

<br>

## 🛠 Development 

### General idea:
* Game should start after clicking the 'enter' key
* Obstacles should be moving towards the Dinosaur
* Dino should be able to jump
* Scoreboard should increase every time Dino jumps over an object successfully
* When Dino collides with an object, "Game Over" should pop out on the screen 
* Game should restart after closing the pop out


<p align="center">
  <img width="460" height="300" src="https://github.com/JT142/Dino-Jump/blob/main/images/Wireframe.png?raw=true">
</p>

<p align="center">
  <img width="460" height="400" src="https://github.com/JT142/Dino-Jump/blob/main/images/Flowchart.png?raw=true">
</p>

<br> 

### Approach:

1. Create a game border. Make sure game border can be dynamically adjusted 

2. Obstacles
* Make two obstacles with random speeds that will move towards the left 
* They should disappear once they hit the left border, and reappear again in an infinite loop

<p align="center">
  <img width="600" height="200" src="https://github.com/JT142/Dino-Jump/blob/main/images/Creating%20blocks.gif?raw=true">
</p>

3. Dinosaur
* Create a dinosaur sprite that can jump
* Dinosaur should be walking at all times
* I thought it'd be cute if his legs moved faster whilst in the air, so I added that 
* Dinosaur's jump should look realistic and adhere to gravity. I came across a formula called cubic bezier that helped to make the jump animation more realistic.
<p align="center">
  <img width="600" height="200" src="https://github.com/JT142/Dino-Jump/blob/main/images/creatingDino.gif?raw=true">
</p>

<p align="center">
  <img width="600" height="200" src="https://github.com/JT142/Dino-Jump/blob/main/images/cubicbezier.gif?raw=true">
</p>

4. Game logic
* Implemented a scoring and losing system 
* Implemented a start page where users could test out the game, and when ready, start by pressing "enter" on their keyboard 
* Added instructions

5. Game visuals
* Ended off by adding to the game visuals, styling the fonts, adding clouds and sound effects 

<p align="center">
  <img width="600" height="200" src="https://github.com/JT142/Dino-Jump/blob/main/images/Final.gif?raw=true">
</p>


## 🎈 Future Improvements
<ol>
    <li> Create different difficulty levels, where the speed of the obstacles would be increased </li>
    <li> To add more visual effects to the game </li>
    <li> To create a highscore page </li>
</ol>


