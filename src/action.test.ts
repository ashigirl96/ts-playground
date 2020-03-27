import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk";
import {login, LoginParams} from "./index";
import {enableFetchMocks} from "jest-fetch-mock";
enableFetchMocks();

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Access token action creators", () => {
  it("dispatches the correct actions on successful fetch requrest", () => {
    fetchMock.mockResponse(JSON.stringify({ result: {
      result: "hoge"
      } }));
    const store = mockStore({ userToken: { token: "" }});

    return (
      store.dispatch(login({ type: "login", email: "hoge", password: "hage"} as LoginParams)));
  })
})

