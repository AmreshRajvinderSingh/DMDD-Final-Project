const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Employees', {
    EmployeeID: {
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
    Position: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Department: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Employees',
    schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "PK__Employee__7AD04FF1ADB6CB5F",
        unique: true,
        fields: [
          { name: "EmployeeID" },
        ]
      },
    ]
  });
};
