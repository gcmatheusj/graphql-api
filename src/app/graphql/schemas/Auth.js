import { gql } from "apollo-server-express";

const authSchema = gql`
  type AuthPayload {
    token: String
    user: User
  }

  extend type Mutation {
    signup(email: String!, password: String!, name: String!): AuthPayload
    signin(email: String!, password: String!): AuthPayload
  }
`;

export default authSchema;
