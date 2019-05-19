import { gql } from "apollo-server-express";

const toolSchema = gql`
  type Tool {
    id: ID!
    title: String!
    link: String!
    description: String!
  }

  extend type Query {
    tools: [Tool!]!
  }

  extend type Mutation {
    createTool(title: String!, link: String!, description: String!): Tool!
    updateTool(id: ID!, title: String, link: String, description: String): Tool!
    destroyTool(id: ID!): Tool!
  }
`;

export default toolSchema;
