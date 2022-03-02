import { startApp } from './app';

const thrower = (err: unknown): void => {
  throw err;
};
const throwToGlobal = (err: unknown): NodeJS.Immediate => setImmediate(() => thrower(err));

process.on('unhandledRejection', throwToGlobal);

startApp().catch(throwToGlobal);
