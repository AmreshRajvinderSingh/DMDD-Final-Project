const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Profit_Loss', {
    PnLID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field:'PnLID'
    },
    PeriodStartDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field:'PeriodStartDate'
    },
    PeriodEndDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field:'PeriodEndDate'
    },
    TotalRevenue: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false,
      field:'TotalRevenue'
    },
    CostOfGoodsSold: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false,
      field:'CostOfGoodsSold'
    },
    OperatingExpenses: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false,
      field:'OperatingExpenses'
    },
    OtherIncome: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: 0.00,
      field:'OtherIncome'
    },
    OtherExpenses: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: 0.00,
      field:'OtherExpenses'
    },
    NetProfit: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true,
      field:'NetProfit'
    }
  }, {
    sequelize,
    tableName: 'Profit_Loss',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Profit_L__0E4BB499F0591D47",
        unique: true,
        fields: [
          { name: "PnLID" },
        ]
      },
    ]
  });
};
