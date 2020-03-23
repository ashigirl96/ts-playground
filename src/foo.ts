export const sum = (...args: number[]) => {
  return args.reduce((acc, value) => acc + value, 0);
};