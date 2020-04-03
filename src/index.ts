import axios from "axios";
import MockAdapter from "axios-mock-adapter";

// // 基本的な書き方
// axios.get("http://example.com")
//   .then(response => {
//     console.log("status:", response.status);
//     console.log("data:", response.data);
//   })
//   .catch(error => {
//     console.log("Error: ", error);
//   });
//
// // メソッドをコンフィグで指定できる
// axios({url: "http://example.com", method: "GET"})
//   .then(response => {
//     console.log("status:", response.status);
//     console.log("data:", response.data);
//   })
//   .catch(error => {
//     console.log("Error: ", error);
//   });
//
// // query parameterも指定できる
// axios({method: "GET", url: "https://example.com", params: {name: "hoge"}})
//   .then(response => {
//     console.log("url", response.headers);
//     console.log("request path:", response.request["path"]);
//     console.log("status:", response.status);
//     console.log("data:", response.data);
//   })
//   .catch(error => {
//     console.log("Error: ", error);
//   });
//
// // POSTのとき、送るものはconfigのdataに突っ込む
// axios({
//   method: "POST",
//   url: "https://example.com",
//   data: { name: "HOGE" }
// })
//   .then(response => {
//     console.log("url", response.headers);
//     console.log("request path:", response.request["path"]);
//     console.log("status:", response.status);
//     console.log("data:", response.data);
//   })
//   .catch(error => {
//     console.log("Error: ", error);
//   });
//
//
// config毎回書くのめんどくさいから、固定する
const axiosInstance = axios.create({
  xsrfHeaderName: "X-XSRF-Token",
  withCredentials: true
});

axiosInstance.interceptors.request.use(request => {
    // ココに割り込み処理が書ける
  return request;
});

axiosInstance.interceptors.response.use(response => {
  // ココに割り込み処理が書ける
  // response.data = "HOGEHOGEHOGEHO";
  return response;
});

const mock = new MockAdapter(axiosInstance);

mock.onGet("http://example.com/hoge").reply(200, {
  users: [{ id: 1, name: "John Smith"}]
});

axiosInstance.request({ url: "http://example.com/hoge", method: "GET"})
  .then(response => {
    console.log("request path:", response.request["path"]);
    console.log("status:", response.status);
    console.log("data:", response.data);
  })
  .catch(error => {
    console.log("Error: ", error);
  });


// // 複数APIの並列処理
// axios.all([
//   axiosInstance.request({ url: "https://google.com", method: "GET" }),
//   axiosInstance.request({ url: "https://yahoo.com", method: "GET" }),
// ]).then(axios.spread( (api1Result, api2Result) => {
//   console.log(api1Result.status, api1Result.data);
//   console.log(api2Result.status, api2Result.data);
// }));
