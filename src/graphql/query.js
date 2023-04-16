import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query($gender: String, $species: String, $status: String) {
    characters(filter: { gender: $gender, species: $species, status: $status }) {
      results {
        id
        name
        species
        image
        status
        gender
        location {
          name
        }
      }
    }
  }
`;