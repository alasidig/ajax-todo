# AJAX Todo
Use `fetch` to consume The [ToDo API](https://github.com/alasidig/express-Todo-REST)

## How to run
- Clone and run the [ToDo API](https://github.com/alasidig/express-Todo-REST)
- Open index.html in the browser.

## Brief Explanation
- When the document loads is calls `showList` function which makes AJAX GET request to retrieve the list of tasks and 
add them to the `#tasksList` placeholder.
- `addTask` handles when pressing the add button. It sends AJAX POST request sending the content of the title.
- `deleteTask` handles when clicking the delete button.  It sends AJAX DELETE request using the `id` of the task to delete.
- `updateTask` listens for keyboard pressing on the editable `span` that holds the title. It sends AJAX PUT request sending the updated title when the user presses `Enter` 