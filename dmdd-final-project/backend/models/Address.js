const sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Address', {
    AddressID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field:'AddressID'
    },
    CustomerID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field:'CustomerID'
    },
    Street: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field:'Street'
    },
    City: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field:'City'

    },
    State: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field:'State'
    },
    ZipCode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field:'ZipCode'
    },
    Country: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field:'Country'
    }
  }, {
    sequelize,
    tableName: 'Address',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Address__091C2A1BFB7D7259",
        unique: true,
        fields: [
          { name: "AddressID" },
        ]
      },
    ]
  });
};
