import User from "../../models/User";

const authResolvers = {
  Mutation: {
    signup: async (_, args) => {
      const { email } = args;

      if (await User.findOne({ email })) {
        throw new Error("User already exists");
      }

      const user = await User.create(args);

      const token = User.generateToken(user);

      return {
        user,
        token
      };
    },
    signin: async (_, args) => {
      const { email, password } = args;

      const user = await User.findOne({ email });

      if (!user) {
        throw new Error("User not found");
      }

      if (!user.comparePassword(password)) {
        throw new Error("Invalid password");
      }

      const token = User.generateToken(user);

      return {
        user,
        token
      };
    }
  }
};

export default authResolvers;
