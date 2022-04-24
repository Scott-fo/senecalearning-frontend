# Seneca Learning - Front End Task

## Images
![image](https://user-images.githubusercontent.com/34381264/164976093-bb4e80f6-d3a7-4875-b377-53508adce492.png)
![image](https://user-images.githubusercontent.com/34381264/164975975-667000bb-40ed-4a00-a7ef-9ad060ca88a2.png)

## Instructions

To run the project:
* Clone the repository
* run **npm i** to install dependencies
* **npm run start** to run the project on localhost:3000

## Description of Functionality

### How to use:

* Select the correct answer on each row.
* Once the question is answered correctly, if available, a "Next Question" prompt will be shown, otherwise a "Previous Question" prompt will be shown.
* Questions can also be selected by clicking the current active question at the top of the page to open the sidebar.

### Additional Comments:

* The questions and the position of the answers are randomised.
* Background colour changes when 50% of the answers are correct.
* Typescript is used to enforce typechecking.
* Radio buttons and state are used to track the selected answers and evaluate correctness.
* The app is fully responsive, including support for 3 toggle positions.

## Assumptions & Limitations

* The animation between toggle states defined in the specification was not implemented. 
  * Creating animations in CSS is a weak point in my current skillset. I have found a way to create the desired effect, but that solution would not have been     as responsive or clean as the result that I have produced.
  * Inspired by this project, I plan to expand my transitions and animations knowledge. 
  * This will come after my next topic of focus which is test driven development.
* It is required that the data is provided in the format provided in the questions.json.
