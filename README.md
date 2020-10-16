# Sprint Challenge - JavaScript Fundamentals

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in project. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied array methods, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge. 

_You have **three hours** to complete this challenge. Plan your time accordingly._


## Introduction

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

### Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead as the evaluate your solution.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. Briefly compare and contrast `.forEach` & `.map` (2-3 sentences max)

    - Both are advanced array methods that can iterate thorugh an array or list
    of objects. These methods can be used to display or manipulate data. However,
    the .map function will create a new array while it iterates through the list and criteria
2. Explain the difference between a callback and a higher order function.
    - A higher order function will have another function set as its parameter and will invoke that function. A callback function is one that gets passed into another function. A higher order function will call a callback function. 
3. What is closure?
    - Closure refers to the scope of a vatiable based on where it is nested within function scopes. A variable is inaccessible from functions outward in scope and are accessible to function that are nested below its declaration. 
4. Describe the four rules of the 'this' keyword.
     1. Global/Window Binding: The "this" function, if it is not closed into a certain scope will bind with the global object. In web applications, it will bind with the window, because it is the object that encompasses all. 
    2. Implicit Binding: the "this" keyword will reference the object that the dot function follows. Meaning it will attach itself to whatever object the method is calling. If the method is not calling any particular object, it will refer to the window/global object.
    3. New Binding: when a new constructor class is created--the skeleton of an object that can be instantiated, the "this" keyword will refer to the constructed object. Every new instance of the object, when preceding with "this", it will refer to the new object. 
    4. Explicit Binding: if we do not want the "this" keyword to implicitly bind to the object it is attached to and point to another object, we can explicitly bind it to another object through the .call or .apply method. This prevents the "this" keyword from assuming which object is bound to and allows the developer to determine the bind. 

5. Why do we need super() in an extended class?
    - The super() method will pass on the properties and methods declared in the parent class 
    down into the child class. 
    
You are expected to be able to answer questions in these areas. Your responses contribute to your Sprint Challenge grade. 

## Instructions

### Task 1: Project Set Up

- [ ] Create a forked copy of this project
- [ ] Clone your OWN version of the repository (Not Lambda's by mistake!)
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly
- [ ] Push commits: git push origin `<firstName-lastName>`

### Task 2: Project Requirements

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

#### Task A: Objects and Arrays

Test your knowledge of advanced array methods and callbacks.
* [ ] Use the [arrays-callbacks.js](challenges/arrays-callbacks.js) link to get started.  Read the instructions carefully!

#### Task B: Closure

This challenge takes a look at closures as well as scope. 
* [ ] Use the [closure.js](challenges/closure.js) link to get started. Read the instructions carefully!

#### Task C: Prototypes

Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

#### Task D: Classes

Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 3: Stretch Goals 

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!

## Submission format

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo). **Please don't merge your own pull request**


