const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Stocks', {
    StockID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ProductID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    WarehouseID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Stocks',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Stocks__2C83A9E245FBE2CA",
        unique: true,
        fields: [
          { name: "StockID" },
        ]
      },
    ]
  });
};
