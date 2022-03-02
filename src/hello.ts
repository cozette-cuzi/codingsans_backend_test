export const helloFactory = (log: Console['log']) => (who: string) => log(`Hello ${who}!`);
