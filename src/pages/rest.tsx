import useAxios from "axios-hooks";
import { NextPage } from "next";

const REST: NextPage = () => {
  const [{ data, loading, error }] = useAxios(
    "http://localhost:3002/helloWorld",
  );

  console.log({
    data,
    error,
  });
  if (error) {
    throw error;
  }

  return <div>{loading ? "Loading..." : JSON.stringify(data, null, 2)}</div>;
};

export default REST;
