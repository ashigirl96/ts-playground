import testFunc from "./api/test";
import axios from "axios";

let mockError = false;

jest.mock("axios", () => ({
  get:  (url: string, body: string) => {
    return new Promise(resolve => {
      if (mockError) throw Error("Mock Error");
      resolve({ url, body })
    });
  }
}));

test("async", async () => {
  const res = await testFunc("https://example.com");
  const expected = 1;
  expect(res).toEqual(expected);
});


