const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Purchase_Order_Detail', {
    Purchase_Order_DetailID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field:'Purchase_Order_DetailID'
    },
    PurchaseOrderID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Purchase_Order',
        key: 'PurchaseOrderID',
        
      },
      field:'PurchaseOrderID'
    },
    ProductID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Product',
        key: 'Product_ID',
        
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
    tableName: 'Purchase_Order_Detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Purchase__956D6979EC55E8E9",
        unique: true,
        fields: [
          { name: "Purchase_Order_DetailID" },
        ]
      },
    ]
  });
};
