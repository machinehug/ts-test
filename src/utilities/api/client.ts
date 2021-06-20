import ApolloClient, { gql } from "apollo-boost";
import { sortBy } from "lodash";

const client = new ApolloClient({ uri: "https://rickandmortyapi.com/graphql" });

client
  .query({
    query: gql`
        query {
            characters(page: 1) {
              results {
                name
                image
              }
            }
          }`
  }).then((json => getCharacters(json)));

function getCharacters(json: any): void {

  const getResults = json.data.characters.results;
  const characters = sortBy(getResults, ["name"], ["desc"]);

  console.log(characters);
};