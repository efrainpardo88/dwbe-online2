var DataTypes = require("sequelize").DataTypes;
var _album = require("./album");
var _bandamusical = require("./bandamusical");
var _cancion = require("./cancion");
var _pais = require("./pais");

function initModels(sequelize) {
  var album = _album(sequelize, DataTypes);
  var bandamusical = _bandamusical(sequelize, DataTypes);
  var cancion = _cancion(sequelize, DataTypes);
  var pais = _pais(sequelize, DataTypes);

  album.belongsTo(album, { as: "banda", foreignKey: "banda_id"});
  album.hasMany(album, { as: "albums", foreignKey: "banda_id"});
  cancion.belongsTo(album, { as: "album", foreignKey: "album_id"});
  album.hasMany(cancion, { as: "cancions", foreignKey: "album_id"});
  cancion.belongsTo(bandamusical, { as: "banda", foreignKey: "banda_id"});
  bandamusical.hasMany(cancion, { as: "cancions", foreignKey: "banda_id"});
  bandamusical.belongsTo(pais, { as: "pai", foreignKey: "pais_id"});
  pais.hasMany(bandamusical, { as: "bandamusicals", foreignKey: "pais_id"});

  return {
    album,
    bandamusical,
    cancion,
    pais,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
