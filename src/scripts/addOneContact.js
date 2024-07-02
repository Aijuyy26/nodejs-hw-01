import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/todos.js';
import { createFakeTodo } from '../utils/createFakeTodo.js';

const addOneTodo = async () => {
  try {
    const fileContent = await fs.readFile(PATH_DB, 'utf8');
    const todos = JSON.parse(fileContent);

    const newTodo = createFakeTodo();

    todos.push(newTodo);

    await fs.writeFile(PATH_DB, JSON.stringify(todos, null, 2), 'utf8');

    console.log('Successfully added one new todo.');
  } catch (error) {
    console.error('Error adding one todo:', error);
  }
};

addOneTodo();
