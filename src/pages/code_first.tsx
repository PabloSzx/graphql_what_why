import { NextPage } from "next";
import { withUrqlClient } from "next-urql";
import { useQuery } from "urql";

import { HELLO_QUERY } from "../graphql/queries";

const CodeFirst: NextPage = () => {
  const [{ data, fetching }] = useQuery({
    query: HELLO_QUERY,
  });
  return <div>{fetching ? "Loading..." : JSON.stringify(data, null, 2)}</div>;
};

export default withUrqlClient({ url: "http://localhost:3003" })(CodeFirst);
