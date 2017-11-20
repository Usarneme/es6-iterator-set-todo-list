// The todo class represents an object that holds a Set property called this.items 
// and methods to create, read, update, delete, and toggleDone each item
// If a method's operation was successful, true is returned
// except for Todo.read() which returns the this.items Set.
class Todo {
  constructor() {
    this.items = new Set();
  }
  contains(item) {
    let bool = false;
    this.items.forEach(todoItem => {
      if (todoItem.task === item.task) {
        bool = true;
      }
    })
    return bool;
  }
  create(item) {
    // If it already exists in the set, return false. No duplicate entries allowed.
    if (this.contains(item)) return false;
    this.items.add(item)
    return true;
  }
  read() {
    return this.items || false;
  }
  remove(item) {
    let bool = false;
    this.items.forEach(todoItem => {
      if(todoItem.task === item.task) {
        this.items.delete(todoItem)
        bool = true;
      }
    })
    return bool;
  }
  toggleDone(item) {
    if (!this.contains(item)) return false;
    let doneItem = item;
    doneItem.done = !item.done;
    return this.update(item, doneItem)
  }
  update(item, newItem) {
    if (!this.contains(item)) return false;    
    this.items.delete(item)
    this.items.add(newItem)
    return true;
  }
}

module.exports = Todo;
