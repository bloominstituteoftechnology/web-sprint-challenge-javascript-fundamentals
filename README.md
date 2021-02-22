# Sprint Challenge - JavaScript Fundamentals

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in project. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied array methods, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge. 

_You have **three hours** to complete this challenge. Plan your time accordingly._


## Introduction

The index.js file contains all of your challenges. Please review it in full before answering the questions. If you complete the stretch goals please leave them in your file but commented out so that they do not affect the MVP tasks 

In meeting the minimum viable product (MVP) specifications listed below, you should have all tests passing. You can console.log to check your work and ensure you are submitting the correct results 

### Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead as the evaluate your solution.

## Interview Questions
### (please edit this file and write your answer below each question. In addition, you may also review these questions with your mentor)
Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read.

1. Briefly compare and contrast `.forEach` & `.map` (2-3 sentences max)

>  .map is used to receive an array, perform a function on it, and present a new array. .map will always return the same number of items the original array had, just in a different form (like trying on new clothes or painting a house). It does not change the original array though. .forEach will return undefined and not return a new array, but can can still perform actions on each element in the array. For example, forEach can be used to console.log each element in an array, or save an array to a database, while .map can be used to return an array that has been filtered, reduced, etc.

2. Explain the difference between a callback and a higher order function.

> A callback is a function that can feed into a higher order function. A higher order function is a function that can return another function.

3. What is closure?

> A closure is an inner function that has access to an outer function's data. A closure can read everything above it, but nothing above it can read the closure.It is like a small animal that can fit outside of its little hole, but nothing is small enough to reach inside. 

4. Describe the four rules of the 'this' keyword.

> 1. Is the function called by new?: an empty object is created and referenced by the 'this' keyword. it is later returned if no other object is returned explicitly. 
2. Is the function called by call(), apply(), bind()? (explicit binding): sets context to what the 'this' keyword refers to, forces the function to use a specific object for this binding. 
3. Is the function called as a method? (implicit binding): 'this' will refer to the the "closest" call site (whether that be inside of the function or globally depending on how it is arranged)
4. Is the function called in the global scope?: this has the lowest priority. if 1-3 are not applicable, the function will be called according to the global (window) scope.

5. Why do we need super() in an extended class?

> super() is somewhat similar to semantic html in the sense it explicitly does what is implicitly stated. It is used to call the constructor, methods, and properties of the parent class. super() can be used in a subclass to access parent class values otherwise overwritten by a subclass

You are expected to be able to answer questions in these areas. Your responses contribute to your Sprint Challenge grade. 

## Instructions

### Task 1: Project Set Up

Follow these steps to set up your project:

1. Fork the repo
2. Clone your forked version of the repo
3. cd into your repo and create a branch with your first and last name
NOTE: Tests will run for the JavaScript portion of this challenge only
4. open the terminal in your vs code and type `npm install`
5. next type `npm run test:watch` in your terminal
6. Complete your work making regular commits, once you have all your tests passing and you are ready to submit your work please see canvas for instructions on how to submit

### Task 2: Project Requirements

Your finished project must include all of the following requirements

#### Task A: Closure

This challenge takes a look at closures as well as scope. 
* [ ] Find this challenge in the index.js file. Read the instructions carefully!

#### Task B: Objects and Arrays

Test your knowledge of advanced array methods and callbacks.
* [ ] Find this challenge in the index.js file. Read the instructions carefully!

#### Task C: Prototypes

Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Find this challenge in the index.js file. Read the instructions carefully!

#### Task D: Classes

Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* Find this challenge in the index.js file. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 3: Stretch Goals 

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements! Please remember to comment out your stretch goals before you submit 

## Submission format

See Canvas for submission instructions 

