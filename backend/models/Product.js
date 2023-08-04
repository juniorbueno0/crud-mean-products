const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Product', productSchema);