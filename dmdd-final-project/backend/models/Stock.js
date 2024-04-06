const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Stock', {
    StockID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field:'StockID'
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
    WarehouseID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Warehouse',
        key: 'WarehouseID'
      },
      field:'WarehouseID'
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    field:'Quantity'
  }, {
    sequelize,
    tableName: 'Stock',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Stock__2C83A9E234E37DEF",
        unique: true,
        fields: [
          { name: "StockID" },
        ]
      },
    ]
  });
};
