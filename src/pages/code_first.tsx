import { NextPage } from "next";
import { withUrqlClient } from "next-urql";
import { useQuery } from "urql";

import { HERO_QUERY } from "../graphql/queries";
import omitDeep from "../utils/omitDeep";

const CodeFirst: NextPage = () => {
  const [{ data, fetching }] = useQuery({
    query: HERO_QUERY,
  });
  return (
    <div>
      {fetching
        ? "Loading..."
        : JSON.stringify(omitDeep(data, ["__typename"]), null, 2)}
    </div>
  );
};

export default withUrqlClient({ url: "http://localhost:3003" })(CodeFirst);
