'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Santri extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Ustadz, {through:models.UstadzSantri})
      this.hasMany(models.UstadzSantri)
    }
  };
  Santri.init({
    name: DataTypes.STRING,
    parent: DataTypes.STRING,
    birth_year: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Santri',
  });
  return Santri;
};