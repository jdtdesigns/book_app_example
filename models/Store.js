const { Model, DataTypes } = require('sequelize');
const db = require('../config/connection');
const Book = require('./Book');

class Store extends Model { }

Store.init({
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  sequelize: db,
  modelName: 'store',
  timestamps: false
});

// Store.hasMany(Book);

// Book.hasOne(Store);

Store.belongsToMany(Book, { through: 'store_book' });
// Book.belongsToMany(Store, { through: 'store_book' });

module.exports = Store;