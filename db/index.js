const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://SeanMcCarthy3223:fecnavbar@FEC-Nav-Bar-vjds2.mongodb.net/fec-nav-bar?retryWrites=true&w=majority';

mongoose.connect(connectionString, {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB is connected');
});

const schema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  Photo: Array,
  ProductId: Number,
  ItemName: String,
  Price: Number,
  Rating: Number,
  Category: String,
  Video: String
}, {collection: 'fec-products'});

const searchItems = mongoose.model('searchItems', schema);

module.exports = { searchItems };