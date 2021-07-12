# grow_coding_challenge
<p align="center"><img src="https://www.clicdata.com/wp-content/uploads/2018/12/clicdata-compared-grow-business-intelligence-dashboard-softwares.png"/></p>
<h1 align="center"> 🌱📈🌳 Grow Code Challenge 🌱📈🌳 </h1>

 
# Description

<p>This project was made for <a href="https://www.grow.com/">Grow</a>.</p>
<p>My main focus was to make the most reusable, fastest and most readable code that i could make.</p>

## Before we start 
 
 - Be sure to have Node up to date (I've used Node v16.4.2 for this project) 
 - Use ```npm install``` to install all dependencies.
 - Use ```node server.js``` to start the server. Or ```npm run watch``` to start the server with Nodemon, in dev mode.
<br></br>

## Goals

- Consume and manipulate API data ✅
- Use pagination to get the complete list of all of a resource at once.✅
- Keep the task simple. ✅
- Sort an array of objects. ✅
- Replace object field values with more appropriate data. ✅

----
# Possible Requests

Here are the possible requests

```
http://localhost:5000/planets
http://localhost:5000/people
http://localhost:5000/people?sortBy=name
http://localhost:5000/people?sortBy=height
http://localhost:5000/people?sortBy=mass
```
# Functions
 
 ## util.js
  
  | Name | Description | Return |
| :------------ |:---------------:| :-----:|
| **getDataFromSWAPI** | Returns an **array of objects** with data from */people* or */planets* endpoints | **Array** |
| **getNameFromResidentsURL**      | Returns an **array of objects** of planets with each residents' name instead of the urls | **Array** |
| **replaceResidents** | Replaces all of the residents' urls with its names | **Void** |

> **Note:** There is a bug that i couldn't figure out how to solve, for some reason **sort()** (the higher order function) takes **Jabba's mass value** (1,358 kg) **as a decimal**, making it the object with the  **least mass**, althought it should be the one with  **the most**. And I didn't wanted to change the value per se, thus changing the original response when not asked.

----
## Other notes 📋 ✏️
- I've used localeCompare instead of Collator because after several tests i found out that the former was a little bit faster, althought strangely enough, it should be the other way around, in theory at least.
<br></br>
## Response time :clock4:
- The average get response time (after 10 tests) is:
```
/planets | 8844.366 ms
/people  | 9185.685 ms
```
I don't really know if that's slow or not, but as i said before, i've tried to make it the most reusable that i could.


## About me :smile:

Hi! 🙋🏻‍♂️ My name is Nahuel (it is pronounced Nah-well, strange name, i know), and i'm from Argentina , i'm 22 years old, and i love programming :computer: , making music :musical_keyboard:, coffee ☕, and cats! :cat:
