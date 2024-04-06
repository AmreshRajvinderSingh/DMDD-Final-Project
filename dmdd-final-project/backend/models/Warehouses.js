const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Warehouses', {
    warehouse_i_d: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    country: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Warehouses',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Warehous__75497F8AB235CF45",
        unique: true,
        fields: [
          { name: "warehouse_i_d" },
        ]
      },
    ]
  });
};
