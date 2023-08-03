# Note Taker (Module 11 Homework - Express)

The goal was to create a note taking application so that the user can keep themself organized. The requirements were:
  - Present a landing page with a link to a notes page.
  - The link to the notes page presents a page with existing notes and empty fields that can be used to enter a new note
  - When a title and body are created for a note, a Save icon appears in the navigation bar
  - Clicking the Save button saves the new note to the existing notes column
  - Existing notes can be clicked on to display in the column on the right
  - Clicking the Write (plus) icon presents empty fields to enter a new note
  - The delete button on an existing note allows the user to delete the note

## Usage

1. To use the application, navigate to the notes page with:
    ```
    Get Started
    ``` 
2. If you are loading the application for the first time, click on existing note on the left titled:
    ```
    Usage Directions
    ```
3. To create a new note, click the "+" button in the header and add a title and body text for your note.

4. To save a note (once you have a title and body text), click the "save" icon in the header.

5. To view an existing note, click on the note title in the left column of the page.

6. To delete an existing note, press the "red trash can" button of the note you want to delete.


## Visual Example

![Landing Page Visual Example](./util/images/visual-1.png)

![Notes Page Visual Example](./util/images/visual-2.png)



## Deployed Application (Heroku)

[Link to Demo Video](https://a-down-note-taker-a4f5d9c37c25.herokuapp.com/)





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






