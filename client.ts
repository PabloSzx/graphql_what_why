import axios from "axios";
import { print } from "graphql";
import { request } from "graphql-request";
import gql from "graphql-tag";
import waitOn from "wait-on";

const restAPI = "http://localhost:3002";
const graphqlAPI = "http://localhost:3001/graphql";
const typeGraphqlAPI = "http://localhost:3003/graphql";

waitOn({
  resources: ["tcp:3001", "tcp:3002", "tcp:3003"],
}).then(async () => {
  try {
    const HELLO_QUERY = gql`
      query {
        helloWorld {
          hello
        }
      }
    `;

    const [{ data: rest }, graphQL, typeGraphQL] = await Promise.all([
      axios.get(`${restAPI}/helloWorld`),
      request(graphqlAPI, print(HELLO_QUERY)),
      request(typeGraphqlAPI, print(HELLO_QUERY)),
    ]);

    console.log({
      rest,
      graphql: graphQL,
      typeGraphQL,
    });
  } catch (err) {
    console.error(err);
  }
});
