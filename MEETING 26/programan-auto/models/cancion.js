const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cancion', {
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
    duracion: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    banda_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'bandamusical',
        key: 'id'
      }
    },
    album_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'album',
        key: 'id'
      }
    },
    fechaPublicacion: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cancion',
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
        name: "fk_cancion_banda_idx",
        using: "BTREE",
        fields: [
          { name: "banda_id" },
        ]
      },
      {
        name: "fk_cancion_album_idx",
        using: "BTREE",
        fields: [
          { name: "album_id" },
        ]
      },
    ]
  });
};
