'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UstadzSantri extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Ustadz)
      this.belongsTo(models.Santri)
    }
  };
  UstadzSantri.init({
    result: DataTypes.STRING,
    UstadzId: DataTypes.INTEGER,
    SantriId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UstadzSantri',
  });
  return UstadzSantri;
};