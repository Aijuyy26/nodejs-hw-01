import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/todos.js';

export const removeLastTodo = async () => {
  try {
    const fileContent = await fs.readFile(PATH_DB, 'utf8');
    const todos = JSON.parse(fileContent);

    if (todos.length === 0) {
      console.log('No todos to remove.');
      return;
    }

    const updatedTodos = todos.slice(0, -1);

    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updatedTodos, null, 2),
      'utf8',
    );

    console.log('Successfully removed the last todo.');
  } catch (error) {
    console.error('Error removing the last todo:', error);
  }
};

removeLastTodo();
