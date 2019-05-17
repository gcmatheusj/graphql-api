import Tool from '../../models/Tool';

const resolvers = {
  Query: {
    tools: async () => {
      const tools = await Tool.find();

      return tools;
    },
  },
  Mutation: {
    createTool: async (_, args) => {
      const tool = await Tool.create(args);

      return tool;
    },
  },
};

export default resolvers;
