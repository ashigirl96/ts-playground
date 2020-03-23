import {enableFetchMocks} from "jest-fetch-mock";

enableFetchMocks();

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