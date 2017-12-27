import dbpost from './../models/Post';

const postController = {};

postController.post = (req, res) => {
    const { name, url, feature, features, votes, image } = req.body;

    const post = new dbpost({
        name,
        url,
        feature,
        features,
        votes,
        image
    });

    post.save().then((newPost) => {
        res.status(200).json({
            success: true,
            data: newPost,
        });
    }).catch((err) => {
        res.status(500).json({
            message: err,
        });
    });
};

export default postController;