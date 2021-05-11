'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class memo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  memo.init({
    title: DataTypes.STRING,
    note: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'memo',
  });
  return memo;
};