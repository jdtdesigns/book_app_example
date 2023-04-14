const { Model, DataTypes } = require('sequelize');
const db = require('../config/connection');

class Book extends Model { }

Book.init({
  title: { // title VARCHAR(255) NOT NULL UNIQUE
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  in_stock: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  // store_id: {
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: 'store',
  //     key: 'id'
  //   }
  // }
}, {
  sequelize: db,
  modelName: 'book',
  timestamps: false
});

module.exports = Book;