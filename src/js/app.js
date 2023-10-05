import GameSavingLoader from './GameSavingLoader';
import GameSaving from './GameSaving';

(async (data) => {
  try {
    const loaded = await GameSavingLoader.load(data);
    const saved = new GameSaving(loaded);
    console.log(saved);
  } catch (error) {
    console.log(error);
  }
})();
