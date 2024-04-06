const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Shipment', {
    ShipmentID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field:'ShipmentID'
    },
    OrderID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Orders',
        key: 'OrderID',
      },
      field:'OrderID'
    },
    ShippedDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field:'ShippedDate'
    },
    EstimatedArrivalDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field:'EstimatedArrivalDate'
    },
    Carrier: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field:'Carrier'
    },
    TrackingNumber: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field:'TrackingNumber'
    },
    Status: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field:'Status'
    }
  }, {
    sequelize,
    tableName: 'Shipment',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Shipment__5CAD378DB380239B",
        unique: true,
        fields: [
          { name: "ShipmentID" },
        ]
      },
    ]
  });
};
