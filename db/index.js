const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nav', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB is connected');
});

const schema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  searchId: Number,
  itemName: String
}, {collection: 'items'});

const searchItems = mongoose.model('searchItems', schema);

module.exports = { searchItems };