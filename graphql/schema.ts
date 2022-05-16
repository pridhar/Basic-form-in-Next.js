import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type User {
    id: Int
    firstname : String
    lastname : String
    email : String
    mobile : String
  }

  type Query {
    users: [User]!
  }
 
  type Mutation {
    createuser (firstname : String , lastname : String, email : String, mobile : String): User
}
`;