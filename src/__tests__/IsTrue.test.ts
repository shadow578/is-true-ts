import { isTrue } from '../index';

describe('isTrue', () => {
  test('true -> true', () => {
    expect(isTrue(true)).toBeTruthy();
  });

  test('false -> false', () => {
    expect(isTrue(false)).toBeFalsy();
  });
});
