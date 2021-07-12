# grow_coding_challenge
<p align="center"><img src="https://assets-global.website-files.com/5bc779c7cb6515eacd17ad0f/5be50e5b71001a0d801683ae_grow-logo-dark.svg"/></p>
<h1 align="center"> 🌱📈🌳 Grow Code Challenge 🌱📈🌳 </h1>

 
# Description

<p>This project was made for <a href="https://www.grow.com/">Grow</a></p>
<p>The main focus was to make the most reusable, fastest and most readable code that i could make.</p>

### Before we start 
 
 - Be sure to have Node up to date (I've used Node v15.9.0 for this project) 
 - Use ```npm install``` to install all dependencies.
 - Use ```node server.js``` to start the server. Or ```npm run watch``` to start the server with Nodemon in dev mode.

<br></br>

# Functions
 
 ## util.js
  
  | Name | Description | Return |
| :------------ |:---------------:| :-----:|
| **getDataFromSWAPI** | Returns an **array of objects** with the data from *people* or *planets* endpoints | **Array** |
| **getNameFromResidentsURL**      | Returns an **array of objects** of the planets with the resident's names instead of the resident's urls | **Array** |
| **replaceResidents** | Replace resident's urls with its names    | **Void** |

> **Note:** There is a bug that i couldn't figure out how to solve it, for some reason the **sort** (higher order function) takes **Jabba's mass** (1,358 kg) **as a decimal**, making it the object with less mass, althought it should be the one with the most.
<br></br>
## Other notes 📋 ✏️
- I've used localeCompare instead of Collator because after several tests i found out that it was a little bit faster, althought strangely enough, it should be the other way around.
- The average get response time (after 10 tests) is: **8844.366 ms** *for planet's endpoint* and **9185.685 ms** *for people's endpoint* i don't know if that's too much time, as i said before, i've tried to make it the most reusable code that i could make.

## About me :raising_hand:

Hi! My name is Nahuel, and i'm from Argentina, i'm 22 years old, and i love programming :computer: , making music :musical_keyboard:, coffee ☕, and cats! :cat:
