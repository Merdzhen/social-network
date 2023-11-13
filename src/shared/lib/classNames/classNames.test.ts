import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('with first param only', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional class', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'someClass hovered scrollable';
    expect(classNames('someClass', { hovered: true, scrollable: true })).toBe(expected);
  });

  test('with mods false', () => {
    const expected = 'someClass hovered class1 class2';
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: false },
      ['class1', 'class2'],
    )).toBe(expected);
  });
});
