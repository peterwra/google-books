// Import mongoose for the model
import { Schema, model } from "mongoose";

// Book schema
let BookSchema = Schema({
    title: {
        type: String,
        required: true
    },

    authors: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    link: {
        type: String,
        required: true
    }
});

// Create the model with the above schema
let Book = model("Book", BookSchema);

// Export book model
module.exports = Book;
