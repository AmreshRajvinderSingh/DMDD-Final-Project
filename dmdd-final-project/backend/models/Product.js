const { DataTypes } = require('sequelize');
const sequelize = require('../databaseConnection/connection');
const Category = require('./Category');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Product', {
    Product_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field:'Product_ID'
    },
    CategoryID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Category',
        key: 'CategoryID'
      },
      field:'CategoryID'
    },
    Name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field:'Name'
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true,
      field:'Description'
    },
    Price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      field:'Price'
    }
  }, {
    sequelize,
    tableName: 'Product',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Product__9834FB9A5C628DCB",
        unique: true,
        fields: [
          { name: "Product_ID" },
        ]
      },
    ]
  });
};
