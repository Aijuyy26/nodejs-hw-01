import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/todos.js';

export const getAllTodos = async () => {
  try {
    const fileContent = await fs.readFile(PATH_DB, 'utf8');
    return fileContent;
  } catch (error) {
    console.error('Error reading todos:', error);
    throw error;
  }
};

(async () => {
  try {
    const todos = await getAllTodos();
    console.log(todos);
  } catch (error) {
    console.error('Failed to get todos:', error);
  }
})();
