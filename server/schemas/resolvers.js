const { AuthenticationError } = require('@apollo/server');
const { User, Todo } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (_, args) => {
      return User.findOne({ _id: args.id }).populate('todos').exec();
    },
    me: async (_, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate({
          path: 'todos',
        });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    getTodos: async (_, args) => {
      return Todo.find({userId: args.userId});
    },
    getTodo: async (_, args) => {
      return Todo.findOne({_id: args.todoId});
    },
  },

  Mutation: {
    addUser: async (_, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addTodo: async (_, args, { user }) => {
      if (user) {
        const todo = await Todo.create(args);
        await User.findByIdAndUpdate(user._id, { $push: { todos: todo._id} }, { new: true });
        return todo;
      }
      throw AuthenticationError;
    },
    updateTodo: async (_, args, { user }) => {
      if (user) {
        const todo = await Todo.findOneAndUpdate(
          { _id: args.todoId }, 
          { $set: { complete: !args.complete } },
          { new: true }
          );
          return todo;
      }
      throw AuthenticationError;
    },
    deleteTodo: async (_, args, { user }) => {
      if (user) {
        const todo = await Todo.findByIdAndDelete(args.todoId)
        await User.findByIdAndUpdate(user._id, { $pull: { todos: { _id: args.todoId }}});
        return todo;
      }
      throw AuthenticationError;
    }
  }
};

module.exports = resolvers;
