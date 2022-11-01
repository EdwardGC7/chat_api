const db = require("../utils/database");
const Users = require('./users.models');

const { DataTypes } = require("sequelize");

const Conversations = db.define("conversations", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "image_url",
  },
  createdBy: {
    type: DataTypes.UUID,
    allowNull: false,
    field: "created_by",
    references: {
      key: 'id',
      model: Users
   }
  },
});


module.exports = Conversations