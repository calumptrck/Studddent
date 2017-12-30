import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const postSchema = new Schema({
    name: String,
    url: String,
    feature: String,
    features: [String],
    votes: {
        up: {
            type: Number,
            default: 0
        },
        down: {
            type: Number,
            default: 0
        },
    },
    image: {
        type: String,
        default: 'https://i.imgur.com/HLBILGL.png'
    },
});

let Post = module.exports = mongoose.model('Post', postSchema);
