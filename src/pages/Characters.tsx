import React from 'react';
import { useQuery } from 'urql';

import { CharacterCard } from '../components/CharacterCard';
import { graphql } from '../gql';
import { CharactersQueryQuery } from '../gql/graphql';

const CharactersQueryDocument = graphql(
  `
    query CharactersQuery {
      characters {
        results {
          id
          name
        }
      }
    }
  `,
);

function Characters() {
  const [result] = useQuery<CharactersQueryQuery>({
    query: CharactersQueryDocument,
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <ul>
      {data?.characters?.results?.map((character) => {
        return <CharacterCard key={character?.id} character={character} />;
      })}
    </ul>
  );
}

export default Characters;
