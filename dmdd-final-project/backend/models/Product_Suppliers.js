const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Product_Suppliers', {
    Product_Supplier_ID: {
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
    tableName: 'Product_Suppliers',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Product___2394A160B6B09B6F",
        unique: true,
        fields: [
          { name: "Product_Supplier_ID" },
        ]
      },
    ]
  });
};
