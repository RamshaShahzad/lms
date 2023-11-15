const { models } = require("../models/index");
const bcrypt = require("bcryptjs");
module.exports = {
  getusers: async () => {
    const users = await models.user.findAll();
    return users;
  },
  addusers: async (data) => {
    data.password = bcrypt.hashSync(data.password, 10);
    const user = await models.user.create(data);
    return user;
  },

  updateusers: async (body) => {
    if (!body.id) {
      throw new Error("User ID is required for updating.");
    }

    const { id, ...param } = body;

    try {
      const result = await models.user.update(
        { ...param },
        {
          where: {
            id: body.id,
          },
        }
      );

      if (result[0] === 1) {
        return "User updated successfully"; // You can return any appropriate success message
      } else {
        throw new Error("User not found or update failed");
      }
    } catch (error) {
      throw error;
    }
  },

  deleteusers: async (query) => {
    const result = await models.user.destroy({
      where: {
        id: query,
      },
    });
    return result;
  },
};
