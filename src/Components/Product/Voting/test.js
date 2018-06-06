import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './Voting';

const product = {
    "_id": "5a9c3bfc1f50583c497f0ee9",
    "name": "Student Developer Pack",
    "email": "calum@calum.co",
    "url": "https://education.github.com/pack",
    "feature": "Free While You're a Student",
    "__v": 0,
    "image": "https://dwa5x7aod66zk.cloudfront.net/assets/sdp-backpack-a64038716bf134f45e809ff86b9611fb97e41bbd2ccfa3181da73cf164d3c200.png",
    "votes": {
    "down": 22,
    "up": 391
    },
    "tags": [
    "development",
    "bundle"
    ],
    "features": [
    "GitHub Developer Account",
    "$50 DigitalOcean Credit",
    "Free Namecheap Domain"
    ],
    "accepted": true
  }

const upVote = jest.fn()
const downVote = jest.fn()
const vote = jest.fn()

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Voting product={product} upVote={upVote} downVote={downVote} vote={vote} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

