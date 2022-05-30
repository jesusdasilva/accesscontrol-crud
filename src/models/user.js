import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class user extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    u_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    u_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    u_email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "user_un"
    },
    u_created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    u_updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    u_profile: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'profile',
        key: 'p_id'
      }
    },
    u_password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'user',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "user_pk",
        unique: true,
        fields: [
          { name: "u_id" },
        ]
      },
      {
        name: "user_un",
        unique: true,
        fields: [
          { name: "u_email" },
        ]
      },
    ]
  });
  }
}
