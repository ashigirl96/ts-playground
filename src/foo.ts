export const sum = (...args: number[]) => {
  return args.reduce((acc, value) => acc + value, 0);
};

export const APIRequest = (who: string) => {
  if (who === "google") {
    return fetch("https://google.com").then(res => res.json());
  } else {
    return Promise.resolve("no argument provided");
  }
};