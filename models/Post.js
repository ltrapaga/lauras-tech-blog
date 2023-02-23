const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Model for Post
class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    post_title: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    post_content: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    comment_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;
