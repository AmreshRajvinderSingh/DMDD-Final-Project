const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Categories', {
    CategoryID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Categories',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Categori__19093A2B597E0E0E",
        unique: true,
        fields: [
          { name: "CategoryID" },
        ]
      },
    ]
  });
};
