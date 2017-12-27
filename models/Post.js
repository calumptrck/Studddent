import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const postSchema = new Schema({
    name: String,
    url: String,
    feature: String,
    features: [String],
    votes: {
        up: Number,
        down: Number
    },
    image: String
});

let Post = module.exports = mongoose.model('Post', postSchema);
