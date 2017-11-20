const expect = require('chai').expect;
const Todo = require('./todo.js');

// Sanity Check
describe('Mocha', () => {
  it('should run tests using Mocha', () => {
    expect(true).to.be.ok;
  });
});

// Functional Tests
describe('Task List tests', () => {
  let todo;

  beforeEach(() => {
    todo = new Todo();
  })
  
  it('A new Todos this.items should be an empty Set', () => {
    expect(todo.items instanceof Set).to.be.true;
  })

  // Add/Create
  it('should increase in size when a new item is created', () => {
    todo.create({task:"Test Task 0", done:false})
    expect(todo.items.size === 1).to.be.true;
  })

  it('should continually increase in size as items are added', () => {
    todo.create({task:"Test Task 0", done:false})
    todo.create({task:"Test Task 1", done:false})
    todo.create({task:"Test Task 2", done:false})
    expect(todo.items.size).to.be.eql(3);
  })

  // Read
  it('a Set should be returned when read is called', () => {
    todo.create({task:"Test Task 0", done:false})
    const todoSet = todo.read()
    expect(todoSet instanceof Set).to.be.true;
  })

  it('should return all entries when read is called', () => {
    todo.create({task:"Test Task 0", done:false})
    todo.create({task:"Test Task 1", done:false})
    todo.create({task:"Test Task 2", done:false})
    const entries = todo.read()
    expect(entries.size).to.be.eql(3);
  })

  it('should return all entries in order when read is called. Test item 0', () => {
    todo.create({task:"Test Task 0", done:false})
    const setIterator = todo.read().entries()
    expect( setIterator.next().value[0] ).to.be.eql({task:"Test Task 0", done:false});
  })

  it('should return all entries in order when read is called. Test item 1', () => {
    todo.create({task:"Test Task 0", done:false})
    todo.create({task:"Test Task 1", done:false})
    const setIterator = todo.read().entries()
    setIterator.next();
    expect( setIterator.next().value[0] ).to.be.eql({task:"Test Task 1", done:false});
  })

  it('should return all entries in order when read is called. Test item 2', () => {
    todo.create({task:"Test Task 0", done:false})
    todo.create({task:"Test Task 1", done:false})
    todo.create({task:"Test Task 2", done:false})
    const setIterator = todo.read().entries()
    setIterator.next();
    setIterator.next();
    expect( setIterator.next().value[0] ).to.be.eql({task:"Test Task 2", done:false});
  })

  // Remove/delete
  it('should decrease in size when an item is removed', () => {
    todo.create({task:"Test Task 0", done:false})
    todo.remove({task:"Test Task 0", done:false})
    expect(todo.items.size === 0).to.be.true;
  })

  it('should remove a task when remove is called', () => {
    const task = {task:"Test Task 0", done:false}
    todo.create(task)
    todo.remove(task)
    expect(todo.contains(task)).to.be.false;
  })

  // Update/replace
  it('should delete the old item when update is called', () => {
    const oldTask = {task:"Test Task 0", done:false}
    const newTask = {task:"Test Task 0.1", done:false}
    todo.create(oldTask)
    todo.update(oldTask, newTask)
    expect( todo.contains(oldTask) ).to.be.false;
  })

  it('should replace with a new item when update is called', () => {
    const oldTask = {task:"Test Task 0", done:false}
    const newTask = {task:"Test Task 0.1", done:false}
    todo.create(oldTask)
    todo.update(oldTask, newTask)
    expect( todo.contains(newTask) ).to.be.true;
  })

  it('when toggleDone is called the task description should not change', () => {
    let task = {task:"Test Task 0", done:false}
    todo.create(task)
    todo.toggleDone(task)
    expect( todo.contains(task) ).to.be.true;
  })

  it('when toggleDone is called the task done property should change', () => {
    let task = {task:"Test Task 0", done:false}
    todo.create(task)
    todo.toggleDone(task)
    const setIterator = todo.read().entries()
    const retrievedTask = setIterator.next()
    // retrievedTask => [{task:"Test Task 0", done:true}, {task:"Test Task 0", done:true}]
    expect( retrievedTask.value[0].done ).to.be.true;
  })

  it('when toggleDone is called twice the task done property should change back', () => {
    let task = {task:"Test Task 0", done:false}
    todo.create(task)
    todo.toggleDone(task)
    todo.toggleDone(task)
    const setIterator = todo.read().entries()
    const retrievedTask = setIterator.next()
    // retrievedTask => [{task:"Test Task 0", done:false}, {task:"Test Task 0", done:false}]
    expect( retrievedTask.value[0].done ).to.be.false;
  })

});

// describe('Local Storage tests', () => {

//   // tempAlert;
//   // saveTasks;
//   // storageAvailable;

// });
