const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Customers', {
    CustomerID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FirstName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    LastName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Phone: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    City: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Country: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Customers',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Customer__A4AE64B8FDB3DD0C",
        unique: true,
        fields: [
          { name: "CustomerID" },
        ]
      },
    ]
  });
};
