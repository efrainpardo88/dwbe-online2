const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bandamusical', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    integrantes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fechaInicio: {
      type: DataTypes.DATE,
      allowNull: false
    },
    fechaSeparacion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    pais_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pais',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'bandamusical',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "fk_banda_pais_idx",
        using: "BTREE",
        fields: [
          { name: "pais_id" },
        ]
      },
    ]
  });
};
