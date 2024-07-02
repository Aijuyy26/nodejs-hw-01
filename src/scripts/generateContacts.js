import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/todos.js';
import { createFakeTodo } from '../utils/createFakeTodo.js';

const generateTodos = async (number) => {
  try {
    const fileContent = await fs.readFile(PATH_DB, 'utf8');
    const todos = JSON.parse(fileContent);

    const newTodos = Array.from({ length: number }, createFakeTodo);

    todos.push(...newTodos);

    await fs.writeFile(PATH_DB, JSON.stringify(todos, null, 2), 'utf8');

    console.log(`Successfully added ${number} new todos.`);
  } catch (error) {
    console.error('Error generating todos:', error);
  }
};

generateTodos(5);
