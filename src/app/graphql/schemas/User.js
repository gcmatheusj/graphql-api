import { gql } from "apollo-server-express";

const userSchema = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }

  extend type Query {
    users: [User!]!
  }

  extend type Mutation {
    updateUser(id: ID!, name: String, email: String, password: String): User!
    destroyUser(id: ID!): User!
  }
`;

export default userSchema;
