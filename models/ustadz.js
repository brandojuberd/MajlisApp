'use strict';
const {
  Model, STRING
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ustadz extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Santri, {through:models.UstadzSantri})
      this.hasMany(models.UstadzSantri)

    }
  };
  Ustadz.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    skill: DataTypes.STRING,
    phone_number: {
      type: STRING,
      validate:{
        isNumeric: {msg: "Phone Number yang anda masukkan salah"}
      }
    },
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ustadz',
  });
  return Ustadz;
};