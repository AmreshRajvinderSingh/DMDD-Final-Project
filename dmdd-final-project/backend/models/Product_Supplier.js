const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Product_Supplier', {
    Product_Supplier_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field:'Product_Supplier_ID'
    },
    Product_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Product',
        key: 'Product_ID',
        
      },
      field:'Product_ID'
    },
    SupplierID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Supplier',
        key: 'SupplierID',
        
      },
      field:'SupplierID'
    }
  }, {
    sequelize,
    tableName: 'Product_Supplier',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Product___2394A16076A3692F",
        unique: true,
        fields: [
          { name: "Product_Supplier_ID" },
        ]
      },
    ]
  });
};
