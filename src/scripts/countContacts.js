import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/todos.js';

export const countTodos = async () => {
  const fileContent = await fs.readFile(PATH_DB, 'utf8');
  const todos = JSON.parse(fileContent);

  return todos.length;
};

console.log(await countTodos());
