import {APIRequest, sum} from "./foo";
import fetchMock, {enableFetchMocks} from "jest-fetch-mock";
enableFetchMocks();


test("1 + 2", () => {
  expect(1 + 2).not.toEqual(4);
});

test("basic", async () => {
  expect(sum()).toBe(0);
});

test("basic again", async () => {
  expect(sum(1, 2)).toBe(3);
});

describe("testing api", () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })

  it("calls google and returns data to me", () => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: "123456"}))

    APIRequest("google").then(res => {
      expect(res.data).toEqual("123456")
    })

    expect(fetchMock.mock.calls.length).toEqual(1)
    expect(fetchMock.mock.calls[0][0]).toEqual("https://google.com")
  })
})

// it('should beforeEach make mock', function () {
//   fetchMockMock.mockIf(/^https:?:\/\/example.com.*$/, req => {
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