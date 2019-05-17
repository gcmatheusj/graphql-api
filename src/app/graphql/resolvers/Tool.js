import Tool from '../../models/Tool';

const resolvers = {
  Query: {
    tool: () => Tool.find(),
  },
  Mutation: {
    createTool: async (_, args) => {
      const tool = await Tool.create(args);

      return tool;
    },
  },
};

export default resolvers;
