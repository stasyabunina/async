import GameSavingLoader from '../GameSavingLoader';

test('testing if the result of GameSavingLoader is correct', async () => {
  const data = await GameSavingLoader.load();
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };

  expect(data).toEqual(expected);
});
