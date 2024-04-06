const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Purchase_Orders', {
    PurchaseOrderID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SupplierID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Suppliers',
        key: 'SupplierID'
      }
    },
    OrderDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Status: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Purchase_Orders',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Purchase__036BAC44F2EEA8C9",
        unique: true,
        fields: [
          { name: "PurchaseOrderID" },
        ]
      },
    ]
  });
};
