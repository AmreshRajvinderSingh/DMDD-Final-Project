const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Supplier', {
    SupplierID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field:'SupplierID'
    },
    CompanyName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field:'CompanyName'
    },
    ContactName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field:'ContactName'
    },
    Address: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field:'Address'
    },
    City: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field:'City'
    },
    Country: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field:'Country'
    },
    Phone: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field:'Phone'
    },
    Email: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field:'Email'
    }
  }, {
    sequelize,
    tableName: 'Supplier',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Supplier__4BE66694301EFBDF",
        unique: true,
        fields: [
          { name: "SupplierID" },
        ]
      },
    ]
  });
};
