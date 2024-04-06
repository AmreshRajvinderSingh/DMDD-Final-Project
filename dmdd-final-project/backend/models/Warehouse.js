const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Warehouse', {
    WarehouseID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field:'WarehouseID'
    },
    Location: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field:'Location'
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
    }
  }, {
    sequelize,
    tableName: 'Warehouse',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Warehous__2608AFD90E536056",
        unique: true,
        fields: [
          { name: "WarehouseID" },
        ]
      },
    ]
  });
};
