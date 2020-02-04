import { NextPage } from "next";
import { withUrqlClient } from "next-urql";
import { useQuery } from "urql";

import { HERO_QUERY, IHeroData } from "../graphql/queries";
import omitDeep from "../utils/omitDeep";

const SchemaFirst: NextPage = () => {
  const [{ data, fetching }] = useQuery<IHeroData>({
    query: HERO_QUERY,
  });
  return (
    <div>
      {fetching || !data
        ? "Loading..."
        : JSON.stringify(omitDeep(data, ["__typename"]), null, 2)}
    </div>
  );
};

export default withUrqlClient({ url: "http://localhost:3001" })(SchemaFirst);
