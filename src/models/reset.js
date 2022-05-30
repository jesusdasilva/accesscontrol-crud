import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class reset extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    r_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    r_code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    r_user: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'user',
        key: 'u_id'
      },
      unique: "reset_un"
    },
    r_requested_by: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'user',
        key: 'u_id'
      }
    },
    r_created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    r_updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    r_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      unique: "reset_un"
    }
  }, {
    sequelize,
    tableName: 'reset',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "reset_pk",
        unique: true,
        fields: [
          { name: "r_id" },
        ]
      },
      {
        name: "reset_un",
        unique: true,
        fields: [
          { name: "r_user" },
          { name: "r_active" },
        ]
      },
    ]
  });
  }
}
