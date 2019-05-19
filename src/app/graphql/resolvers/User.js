import User from "../../models/User";

const userResolvers = {
  Query: {
    users: async () => {
      const users = await User.find();

      return users;
    }
  },
  Mutation: {
    updateUser: async (_, args) => {
      const { id } = args;

      const user = await User.findByIdAndUpdate(id, args, {
        new: true
      });

      return user;
    },
    destroyUser: async (_, { id }) => {
      const user = await User.findByIdAndDelete(id);

      return user;
    }
  }
};

export default userResolvers;
