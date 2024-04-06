const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Sales', {
    SaleID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field:'SaleID'
    },
    OrderID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Orders',
        key: 'OrderID',
      },
      field:'OrderID'
    },
    ProductID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Product',
        key: 'Product_ID'
      },
      field:'ProductID'
    },
    QuantitySold: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field:'QuantitySold'
    },
    SellingPrice: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      field:'SellingPrice'
    },
    SaleDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field:'SaleDate'
    }
  }, {
    sequelize,
    tableName: 'Sales',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Sales__1EE3C41FF4ED642C",
        unique: true,
        fields: [
          { name: "SaleID" },
        ]
      },
    ]
  });
};
