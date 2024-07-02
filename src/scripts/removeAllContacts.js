import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/todos.js';

export const removeAllTodos = async () => {
  try {
    const fileContent = await fs.readFile(PATH_DB, 'utf8');
    const todos = JSON.parse(fileContent);

    todos.length = 0;

    await fs.writeFile(PATH_DB, JSON.stringify(todos, null, 2), 'utf8');

    console.log('Successfully cleared all todos.');
  } catch (error) {
    console.error('Error clearing todos:', error);
  }
};

removeAllTodos();
