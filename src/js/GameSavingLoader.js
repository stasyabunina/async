import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load(data) {
    const readData = await read(data);
    const jsonData = await json(readData);
    return JSON.parse(jsonData);
  }
}
