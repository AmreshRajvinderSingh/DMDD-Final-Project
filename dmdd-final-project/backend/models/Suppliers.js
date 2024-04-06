const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Suppliers', {
    SupplierID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CompanyName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ContactName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Address: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    City: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Country: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Phone: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Suppliers',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Supplier__4BE6669496748B1B",
        unique: true,
        fields: [
          { name: "SupplierID" },
        ]
      },
    ]
  });
};
