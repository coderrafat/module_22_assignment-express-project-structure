//!Create Admin Controller
exports.createAdmin = async (req, res) => {
    try {
        res.status(200).json({ status: 'Success', data: 'Can contain any information' })
    } catch (error) {
        console.log(error);
        res.status(200).json({ status: 'fail', error: 'Something went wrong' })
    }
};

//!Read Admin Controller
exports.readAdmin = async (req, res) => {
    try {
        res.status(200).json({ status: 'Success', data: 'Can contain any information' })

    } catch (error) {
        console.log(error);
        res.status(200).json({ status: 'fail', error: 'Something went wrong' })
    }
};

//!Delete Admin Controller
exports.deleteAdmin = async (req, res) => {
    try {
        res.status(200).json({ status: 'Success', data: 'Can contain any information' })

    } catch (error) {
        console.log(error);
        res.status(200).json({ status: 'fail', error: 'Something went wrong' })
    }
};

//!Update Admin Controller
exports.updateAdmin = async (req, res) => {
    try {
        res.status(200).json({ status: 'Success', data: 'Can contain any information' })

    } catch (error) {
        console.log(error);
        res.status(200).json({ status: 'fail', error: 'Something went wrong' })
    }
};