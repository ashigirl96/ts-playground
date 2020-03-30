import axios from "axios";

const request = async (url: string) => {
  const res = await axios.get(url);
  console.log(res);
  return res
};

export default request;