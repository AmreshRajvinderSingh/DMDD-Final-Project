const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Orders', {
    OrderID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field:'OrderID'
    },
    CustomerID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Customer',
        key: 'CustomerID'
      },
      field:'CustomerID'
    },
    EmployeeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Employee',
        key: 'EmployeeID'
      },
      field:'EmployeeID'
    },
    OrderDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field:'OrderDate'
    },
    ShipDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field:'ShipDate'
    },
    ShippingAddress: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field:'ShippingAddress'
    },
    Status: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field:'Status'
    }
  }, {
    sequelize,
    tableName: 'Orders',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Orders__C3905BAF4FB928EE",
        unique: true,
        fields: [
          { name: "OrderID" },
        ]
      },
    ]
  });
};
