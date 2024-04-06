const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Order_Details', {
    OrderDetailID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field:'OrderDetailID'
    },
    OrderID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Orders',
        key: 'OrderID'
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
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field:'Quantity'
    },
    Price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      field:'Price'
    }
  }, {
    sequelize,
    tableName: 'Order_Details',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Order_De__D3B9D30CC9D0183A",
        unique: true,
        fields: [
          { name: "OrderDetailID" },
        ]
      },
    ]
  });
};
