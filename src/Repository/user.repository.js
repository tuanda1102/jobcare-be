const { Users } = require("../models");

const updateProfile = async (userId, payload) => {
  const newUserProfile = await Users.update(payload, {
    where: {
      id: userId,
    },
  });
  return newUserProfile;
};

module.exports = { updateProfile };
