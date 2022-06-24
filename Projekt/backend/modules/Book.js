const { Schema, model } = require('mongoose');

const bookSchema = new Schema({
    title: {
        type: String,
        required: [true, "can't be blank"]
    },
    author: {
        type: String,
        required: [true, "can't be blank"]
    },
    description: {
        type: String
    },
    genre: {
        type: String
    },
    release_date: {
        type: Date
    },
    image_url: {
        type: String
    },
    rating_count: {
        type: Number,
        default: 0
    },
    rating_sum: {
        type: Number,
        default: 0
    }
});

module.exports = model('Book', bookSchema);