# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Judy Zhu**

Time spent: **6** hours spent in total

Link to project: (https://glitch.com/edit/#!/tar-ultra-tax)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] display the number of mistakes player have made

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](https://cdn.glitch.global/f74f3c57-828a-4ee3-99e6-ee81259de971/ezgif.com-gif-maker.gif?v=1648695732626)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 


Image in Button: https://stackoverflow.com/questions/8683528/embed-image-in-a-button-element
 
Adding Media: https://learn.shayhowe.com/html-css/adding-media/
 
Rick and Morty images: https://jayuzumi.com/rick-and-morty-soundboards
 
Math floor and math random: https://stackoverflow.com/questions/43791101/how-does-math-floor-math-random-10-1-work 

Array: https://www.delftstack.com/howto/javascript/javascript-create-array-of-length/

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
 
 One of the difficulties was that I wanted all the buttons to be random each time to make the game more difficult and interesting. After some searching I found math.random() but it was a process of thinking about how to implement it into my programming. I started to set a value called randomNum directly and put this randomNum in all the positions of the pattern array. I soon found that because I only set a randomNum, all the numbers would be the same. I solved the problem by first setting the pattern array as an empty array and then adding random values later, so that I didn't have to set eight randomNums.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

After completing this assignment I got more interested in web programming, I really like the work where I can see the feedback, and I feel a sense of accomplishment when I finish writing a piece of code and then preview my website. What I want to learn now is probably how to layout the content on the site, although things can all be displayed now, how to distribute different content, how to make the content well spread on the screen, and how to make the site look better is what I am curious about.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a few more hours left, I would probably add some animations and sounds to the game. For example, when the player makes a mistake, there could be a sad background sound or a button twitching as a warning. I may also use sound clips of lines from the anime instead of the current sounds, making the game more relevant to the Rick and Morty theme. Even further, I could have more than one image for each button. Every time a button is pressed, the image changes. There are many possibilities to make the game interesting. Possibly by adding more buttons to make it harder, or by adding a feature that lets the player choose a game mode, from easy to hard. (Easy mode is the slowest and then gradually increases in speed)




## Interview Recording URL Link

[My 5-minute Interview Recording]https://youtu.be/Q8A51SfrVug


## License

    Copyright [Judy Zhu]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.