const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Addresses', {
    AddressID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CustomerID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Street: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    City: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    State: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ZipCode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Country: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Addresses',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Addresse__091C2A1B7015F63F",
        unique: true,
        fields: [
          { name: "AddressID" },
        ]
      },
    ]
  });
};
