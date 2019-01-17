# es6-iterator-set-todo-list

### Example Build at usarneme-todo-vanilla-es6.surge.sh

Working test.js covers all functions in todo.js. 

`git clone ` this repo, `cd` this repo, and `npm install` to get the application running. You can test on localhost a myriad of ways; `python -m SimpleHTTPServer 8000` will work for this project (Python 2 version of the command).

Todo.js acts as a model for an inline script tag in index.html. 

The inline script includes functionality for working with the DOM (event listeners and delegation) and also strips out the Class structure defined in Todo.js and replaces it with a functional, browser-compatible approach.

`npm test` (or `npm run test`) will run the test.js scripts for all functions in todo.js.

Typical test output:

Mocha
-    ✓ should run tests using Mocha

  Task List tests
-    ✓ A new Todos this.items should be an empty Set
-    ✓ should increase in size when a new item is created
-    ✓ should continually increase in size as items are added
-    ✓ a Set should be returned when read is called
-    ✓ should return all entries when read is called
-    ✓ should return all entries in order when read is called. Test item 0
-    ✓ should return all entries in order when read is called. Test item 1
-    ✓ should return all entries in order when read is called. Test item 2
-    ✓ should decrease in size when an item is removed
-    ✓ should remove a task when remove is called
-    ✓ should delete the old item when update is called
-    ✓ should replace with a new item when update is called
-    ✓ when toggleDone is called the task description should not change
-    ✓ when toggleDone is called the task done property should change
-    ✓ when toggleDone is called twice the task done property should change back

  16 passing (23ms)

