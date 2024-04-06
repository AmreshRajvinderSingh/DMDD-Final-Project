const sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Category', {
    CategoryID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'CategoryID',
    },
    Name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'Name',
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'Description',
    }
  }, {
    sequelize,
    tableName: 'Category',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Category__19093A2B4639F7B0",
        unique: true,
        fields: [
          { name: "CategoryID" },
        ]
      },
    ]
  });
};
