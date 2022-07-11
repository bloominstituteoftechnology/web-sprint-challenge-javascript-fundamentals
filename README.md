# Sprint Challenge - JavaScript Fundamentals

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in project. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied array methods, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a range of JavaScript problems.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge. 

## Introduction

The index.js file contains all of your challenges. Please review it in full before answering the questions. If you complete the stretch goals please leave them in your file but commented out so that they do not affect the MVP tasks. 

In meeting the minimum viable product (MVP) specifications listed below, you should have all tests passing. You can console.log to check your work and ensure you are submitting the correct results. 

### Commits

Set up codegrade early and commit your code regularly and meaningfully. 

## Interview Questions
### (please edit this file and write your answer below each question.)
Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read.

1. Explain the differences between `.map`, `.reduce` and `.filter` and describe a use case for each. 
<!-- '.map' creates a new array by transforming every element in an array individually. You would use '.map' if you have an array of objects and you want to create a new array with specific keys from those objects

 '.filter' creates a new array by removing elements that don't belong. '.filter' is used when you want to create a new array with only some of the objects in the original array.
 
 '.reduce' takes all of the elements in an array and reduces them into a single value. '.reduce' is used to generate a single vaule or object from an array. -->
2. Explain the difference between a callback and a higher order function.
<!-- A callback is what is passed into a function. A higher order function recieves a function as a parameter or argument. -->
3. Explain what a closure is.
<!-- a closure gives you access to an outer function's scope from an inner function -->

4. Describe the four principles of the 'this' keyword.
<!-- Window binding: if we haven't given 'this' any context it will return the window, the global object in node or undefined in strict mode.

    Implicit binding: Applies to objects with methods. When the function is invoked, whatever is left of the dot, that's what 'this' refers to.

    Explicit binding: we tell a function what the 'this' keyword should be using .call, .apply or .bind. 

    New binding: When a function is invoked with a new keyword, 'this' is bound to the new object being constructed. When a function is invoked as a constructor function using the new keyword, this points to the new object that’s created  -->

5. Why do we need super() in an extended class?
<!-- The extends will inherit parent properties and will abstract away call() function. The super()function will inherit parent method to child and  will not ever need it to bind. Also abstract away any of syntax that we have using to being our objectS prototype. -->

You are expected to be able to answer questions in these areas. Your responses contribute to your Sprint Challenge grade. 

## Instructions

### Task 1: Set up Project

Using VSCode and Command Line:


1. Fork the repo
2. Go into canvas and connect your repo to codegrade
3. Clone your forked version of the repo
4. DO NOT CREATE A BRANCH. You will be pushing your changes to the main/master today
5. cd into your repo
6. open the terminal in your vs code and type `npm install`
7. next type `npm run test` in your terminal
8. Complete your work making regular commits to main/master; your codegrade score will update each time you make a push.


### Testing & Debugging

Open a second terminal inside of your project by clicking on the split terminal icon
![alt text](assets/split_terminal.png "Split Terminal")

Inside of your second terminal type `npm start` 
![alt text](assets/npm_start.png "type npm start")

You will be running your tests in one terminal and debugging in the other. As you work on your code you should make use of `console.log` to check your progress and debug.
![alt text](assets/tests_debug_terminal_final.png "your terminal should look like this")

### Task 2: Project Requirements (MVP)

You must complete all tasks inside of `index.js` and answer the questions above.

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Resources
 
 [Sprint Challenge Study Guide](https://www.notion.so/bloomtech/Unit-1-Sprint-3-Study-Guide-033a9a00659a4ef98c12eb97e49a6110)

## Submission format

Please submit your project via codegrade by following [these instructions](https://bloomtech.notion.site/bloomtech/BloomTech-Git-Flow-Step-by-step-269f68ae3bf64eb689a8328715a179f9) (see part 2, submitting an assignment with codegrade).
