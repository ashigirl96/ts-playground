import request from "./request";

const test = async (url: string) => {
  return await request(url)
};

export default test;