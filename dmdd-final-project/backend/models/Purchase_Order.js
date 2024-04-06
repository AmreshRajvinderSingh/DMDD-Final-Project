const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Purchase_Order', {
    PurchaseOrderID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field:'PurchaseOrderID'
    },
    SupplierID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Supplier',
        key: 'SupplierID'
      },
      field:'SupplierID'
    },
    OrderDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field:'OrderDate'
    },
    Status: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field:'Status'
    }
  }, {
    sequelize,
    tableName: 'Purchase_Order',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Purchase__036BAC44D25A901E",
        unique: true,
        fields: [
          { name: "PurchaseOrderID" },
        ]
      },
    ]
  });
};
