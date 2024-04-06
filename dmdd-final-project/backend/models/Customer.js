const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Customer', {
    CustomerID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field:'CustomerID'
    },
    FirstName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field:'FirstName'
    },
    LastName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field:'LastName'
    },
    Email: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field:'Email'
    },
    Phone: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field:'Phone'
    },
    Address: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field:'Address'
    },
    City: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field:'City'
    },
    Country: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field:'Country'
    }
  }, {
    sequelize,
    tableName: 'Customer',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Customer__A4AE64B80D5EAEA9",
        unique: true,
        fields: [
          { name: "CustomerID" },
        ]
      },
    ]
  });
};
