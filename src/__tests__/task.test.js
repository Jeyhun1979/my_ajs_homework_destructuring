import extractSpecials from '../js/task';

describe('extractSpecials', () => {
  test('should extract all fields including default description', () => {
    const character = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
      special: [
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'http://icon-url/1.png',
          description: 'Двойной выстрел наносит двойной урон',
        },
        {
          id: 9,
          name: 'Нокаутирующий удар',
          icon: 'http://icon-url/2.png',
          // description отсутствует
        },
      ],
    };

    const expected = [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://icon-url/1.png',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://icon-url/2.png',
        description: 'Описание недоступно',
      },
    ];

    expect(extractSpecials(character)).toEqual(expected);
  });

  test('should handle empty special array', () => {
    const character = {
      special: [],
    };

    expect(extractSpecials(character)).toEqual([]);
  });

  test('should work when all descriptions are missing', () => {
    const character = {
      special: [
        {
          id: 1,
          name: 'Тайный удар',
          icon: 'http://icon-url/3.png',
        },
      ],
    };

    const expected = [
      {
        id: 1,
        name: 'Тайный удар',
        icon: 'http://icon-url/3.png',
        description: 'Описание недоступно',
      },
    ];

    expect(extractSpecials(character)).toEqual(expected);
  });
});
