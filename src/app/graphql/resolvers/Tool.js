import Tool from "../../models/Tool";

const toolResolvers = {
  Query: {
    tools: async () => {
      const tools = await Tool.find();

      return tools;
    }
  },
  Mutation: {
    createTool: async (_, args) => {
      const tool = await Tool.create(args);

      return tool;
    },
    updateTool: async (_, args) => {
      const { id } = args;

      const tool = await Tool.findByIdAndUpdate(id, args, {
        new: true
      });

      return tool;
    },
    destroyTool: async (_, { id }) => {
      const tool = await Tool.findByIdAndDelete(id);

      return tool;
    }
  }
};

export default toolResolvers;
