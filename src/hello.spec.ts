import 'jest';
import { helloFactory } from './hello';

it('should greet', () => {
  const log = jest.fn();
  const hello = helloFactory(log);
  const who = 'World';

  hello(who);

  expect(log).toBeCalledTimes(1);
  expect(log).toBeCalledWith(`Hello ${who}!`);
});
