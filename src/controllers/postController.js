//!Create Post Controller
exports.createPost = async (req, res) => {
    try {

        res.status(200).json({ status: 'Success', data: 'Can contain any information' })

    } catch (error) {
        console.log(error);
        res.status(200).json({ status: 'fail', error: 'Something went wrong' })
    }
};

//!Read Post Controller
exports.readPost = async (req, res) => {
    try {

        res.status(200).json({ status: 'Success', data: 'Can contain any information' })

    } catch (error) {
        console.log(error);
        res.status(200).json({ status: 'fail', error: 'Something went wrong' })
    }
};

//!Delete Post Controller
exports.deletePost = async (req, res) => {
    try {

        res.status(200).json({ status: 'Success', data: 'Can contain any information' })

    } catch (error) {
        console.log(error);
        res.status(200).json({ status: 'fail', error: 'Something went wrong' })
    }
};

//!Update Post Controller
exports.updatePost = async (req, res) => {
    try {

        res.status(200).json({ status: 'Success', data: 'Can contain any information' })

    } catch (error) {
        console.log(error);
        res.status(200).json({ status: 'fail', error: 'Something went wrong' })
    }
};