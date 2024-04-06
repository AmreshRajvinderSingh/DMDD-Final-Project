const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Products', {
    ProductID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CategoryID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Categories',
        key: 'CategoryID'
      }
    },
    Name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Products',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Products__B40CC6ED69DEC028",
        unique: true,
        fields: [
          { name: "ProductID" },
        ]
      },
    ]
  });
};
