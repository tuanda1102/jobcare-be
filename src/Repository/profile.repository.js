const { Profiles } = require("../models");

const findProfile = async (userId) => {
  const profile = await Profiles.findOne({
    where: {
      userId,
    },
  });
  return profile ? profile : false;
};

const createProfile = async (userId, data) => {
  const {
    gender,
    address,
    phoneNumber,
    avatar,
    description,
    birth,
    education,
  } = data;
  const newUserProfile = await Profiles.create({
    gender: gender ? gender : null,
    address: address ? address : null,
    phoneNumber: phoneNumber ? phoneNumber : null,
    avatar: avatar ? avatar : null,
    description: description ? description : null,
    birth: birth ? birth : null,
    education: education ? education : null,
    userId,
  });

  return newUserProfile ? newUserProfile : false;
};

const editProfile = async (userId, data) => {
  const {
    gender,
    address,
    phoneNumber,
    avatar,
    description,
    birth,
    education,
  } = data;

  const newProfile = await Profiles.update(
    {
      gender: gender ? gender : null,
      address: address ? address : null,
      phoneNumber: phoneNumber ? phoneNumber : null,
      avatar: avatar ? avatar : null,
      description: description ? description : null,
      birth: birth ? birth : null,
      education: education ? education : null,
    },
    {
      where: {
        userId,
      },
    }
  );
  return newProfile;
};

const deleteProfile = (userId) => {
  const isDelete = Profiles.destroy({
    where: {
      userId,
    },
  });

  return isDelete ? isDelete : false;
};

module.exports = { editProfile, createProfile, findProfile, deleteProfile };
