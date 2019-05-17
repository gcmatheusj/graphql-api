import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Tool {
    id: ID!
    title: String!
    link: String!
    description: String!
    tags: String!
  }

  type Query {
    tools: [Tool!]!
  }

  type Mutation {
    createTool(title: String!, link: String!, description: String!, tags: String!): Tool!
  }
`;

export default typeDefs;
