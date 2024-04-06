const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Employee', {
    EmployeeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field:'EmployeeID'
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
    Position: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field:'Position'
    },
    Department: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field:'Department'
    }
  }, {
    sequelize,
    tableName: 'Employee',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Employee__7AD04FF1BA830854",
        unique: true,
        fields: [
          { name: "EmployeeID" },
        ]
      },
    ]
  });
};
