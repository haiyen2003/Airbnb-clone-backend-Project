'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spot extends Model {
    static associate(models) {
      // define association here
      Spot.belongsTo(models.User, {foreignKey: 'ownerId'});
      Spot.hasMany(models.Booking, {foreignKey: 'id'});
      Spot.hasMany(models.Image, {foreignKey: 'id'});
      Spot.hasMany(models.Review, {foreignKey: 'id'});
    }
  }
  Spot.init({
    ownerId: {
      type: DataTypes.INTEGER,
      //allowNull: false
    },
    address: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.STRING
    },
    country: {
      type: DataTypes.STRING
    },
    lat: {
      type: DataTypes.DECIMAL
    },
    lng: {
      type: DataTypes.DECIMAL
    },
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Spot',
  });
  return Spot;
};
