const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Purchase_Order_Details', {
    Purchase_Order_DetailID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PurchaseOrderID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Purchase_Orders',
        key: 'PurchaseOrderID'
      }
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    Product_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Products',
        key: 'ProductID'
      }
    }
  }, {
    sequelize,
    tableName: 'Purchase_Order_Details',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Purchase__956D697995FEE5F0",
        unique: true,
        fields: [
          { name: "Purchase_Order_DetailID" },
        ]
      },
    ]
  });
};
