import {enableFetchMocks} from "jest-fetch-mock";
import { sum } from "./foo";

enableFetchMocks();



test("1 + 2", () => {
  expect(1 + 2).not.toEqual(4);
});

test("basic", async () => {
  expect(sum()).toBe(0);
});

test("basic again", async () => {
  expect(sum(1, 2)).toBe(3);
}, 1000);

// it('should beforeEach make mock', function () {
//   fetchMock.mockIf(/^https:?:\/\/example.com.*$/, req => {
//     if (req.url.endsWith("/path1")) {
//       return "some response body"
//     } else if (req.url.endsWith("/path2")) {
//       return {
//         body: "another response body",
//         headers: {
//           "X-Some-Response-Header": "Some header value"
//         }
//       }
//     } else {
//       return {
//         status: 404,
//         body: "Not Found"
//       }
//     }
//   })
// });