import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class profile extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    p_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    p_name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: "profile_un"
    },
    p_created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    p_updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    p_description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'profile',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "profile_pk",
        unique: true,
        fields: [
          { name: "p_id" },
        ]
      },
      {
        name: "profile_un",
        unique: true,
        fields: [
          { name: "p_name" },
        ]
      },
    ]
  });
  }
}
