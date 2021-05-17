Inital Commit




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

.forEach does the specified operation for each item that it works through, while .map does the specified operation, transforms each item, and returns a new array of the transformed items.



2. Explain the difference between a callback and a higher order function.

A function exists on the global scope, while a method is part of an object. (though after we went over the whole 'this' thing with the window object, aren't all functions in that global scope technically part of the window object?)



3. Can you explain what a closure is and how you used it in the counter function? 

When a function is created, it contains a function definition and a closure. The closure is a little backpack of all the variables that were available to it when it was created, including variables in the global scope and variables in the calling scope (and its calling scope, and its calling scope, and its calling scope...). After a function is executed, internal variables no longer exist as far as the global execution stack is concerned, but the function keeps its little backpack of variables that were in scope.



4. Describe the four principles of the 'this' keyword.

1 - Window or Global Object Binding - if you call this in the global scope, it'll reach to the window object to figure out what it is.

2 - Implicit Binding - when you call a function that involves this with a dot (e.g. object.function();), this knows that it referrs to the object before the dot.

When the function takes an object as an argument, 'this' knows that it belongs to the object. 

3 - New Binding - when using a constructor function, when you call it with new, 'this' understands that it belongs to the newly created object that you're returning from the constructor.

4 - Explicit Binding - when you call a function with .call() .apply() or .bind() you specify the object that this refers to in the first parameter.



5. Why do we need super() in an extended class?

It tells the child's constructor that we should be pulling in the parent's constructor for use with the object that is being passed in to the child constructor. Like Parent.call(this, ).




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

