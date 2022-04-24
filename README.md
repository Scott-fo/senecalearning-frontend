# Seneca Learning - Front End Task

## Images

## Instructions

To run the project:
* Clone the repository
* run **npm i** to install dependencies
* **npm run start** to run the project on localhost:3000

## Description of Functionality

### How to use

* Select the correct answer on each row
* Once the question is answered correctly, if available, a "Next Question" prompt will be shown, otherwise a "Previous Question" prompt will be shown.
* Questions can also be selected by clicking the current active question at the top of the page to open the sidebar.

### Additional Comments

* The questions and the position of the answers are randomised
* Background colour changes when 50% of the answers are correct
* Typescript is used to enforce typechecking
* Radio buttons and state are used to track the selected answers and evaluate correctness
* The app is fully responsive, including support for 3 toggle positions

## Assumptions & Limitations

* Did not implement the sliding toggle that was defined in the specification
* The code expects the data to be provided in the format provided in the questions.json