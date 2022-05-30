import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _profile from  "./profile.js";
import _reset from  "./reset.js";
import _user from  "./user.js";

export default function initModels(sequelize) {
  const profile = _profile.init(sequelize, DataTypes);
  const reset = _reset.init(sequelize, DataTypes);
  const user = _user.init(sequelize, DataTypes);

  user.belongsTo(profile, { as: "u_profile_profile", foreignKey: "u_profile"});
  profile.hasMany(user, { as: "users", foreignKey: "u_profile"});
  reset.belongsTo(user, { as: "r_requested_by_user", foreignKey: "r_requested_by"});
  user.hasMany(reset, { as: "resets", foreignKey: "r_requested_by"});
  reset.belongsTo(user, { as: "r_user_user", foreignKey: "r_user"});
  user.hasMany(reset, { as: "r_user_resets", foreignKey: "r_user"});

  return {
    profile,
    reset,
    user,
  };
}
