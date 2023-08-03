# Note Taker (Module 11 Homework - Express)

The goal was to create a note taking application so that the user can keep themself organized. The requirements were:
  - Present a landing page with a link to a notes page.
  - The link to the notes page presents a page with existing notes and empty fields that can be used to enter a new note
  - When a title and body are created for a note, a Save icon appears in the navigation bar
  - Clicking the Save button saves the new note to the existing notes column
  - Existing notes can be clicked on to display in the column on the right
  - Clicking the Write (plus) icon presents empty fields to enter a new note
  - Bonus: The delete button for an existing note allows the user to delete the note

## Usage

- To start the README Generator, run: 

  ```
  node index.js
  ``` 

  in the command line. You will then answer prompts to generate the logo.

- If you choose not to answer a prompt in the terminal, you will be required to answer all prompts again.
- If you use more than 3 characters for the text prompt, you will be required to answer all prompts again.

# Testing

- To test, make sure the `jest` npm is installed
- In the terminal:
  ```
  npm run test
  ```


## Visual Example of Generated README

![Visual of Rendered Logo](./util/logo-examples/example-1.svg)



## Video Demo

[Link to Demo Video](https://watch.screencastify.com/v/RgutWQIgY9iayJUtEtbB)




AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete


GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```




(USE TO TEST DRIVE THE DEPLOYED APPLICATION)
## Getting Started

On the back end, the application should include a `db.json` file that will be used to store and retrieve notes using the `fs` module.

The following HTML routes should be created:

* `GET /notes` should return the `notes.html` file.

* `GET *` should return the `index.html` file.

The following API routes should be created:

* `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).


## Bonus

You haven’t learned how to handle DELETE requests, but this application offers that functionality on the front end. As a bonus, try to add the DELETE route to the application using the following guideline:

* `DELETE /api/notes/:id` should receive a query parameter that contains the id of a note to delete. To delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.






