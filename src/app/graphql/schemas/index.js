import { gql } from "apollo-server-express";

import ToolSchema from "./Tool";
import UserSchema from "./User";
import AuthSchema from "./Auth";

const linkSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [linkSchema, ToolSchema, UserSchema, AuthSchema];
