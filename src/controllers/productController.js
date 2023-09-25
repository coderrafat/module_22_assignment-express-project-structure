//!Create Product Controller
exports.createProduct = async (req, res) => {
    try {

        res.status(200).json({ status: 'Success', data: 'Can contain any information' })

    } catch (error) {
        console.log(error);
        res.status(200).json({ status: 'fail', error: 'Something went wrong' })
    }
};

//!Read Product Controller
exports.readProduct = async (req, res) => {
    try {

        res.status(200).json({ status: 'Success', data: 'Can contain any information' })

    } catch (error) {
        console.log(error);
        res.status(200).json({ status: 'fail', error: 'Something went wrong' })
    }
};

//!Delete Product Controller
exports.deleteProduct = async (req, res) => {
    try {

        res.status(200).json({ status: 'Success', data: 'Can contain any information' })

    } catch (error) {
        console.log(error);
        res.status(200).json({ status: 'fail', error: 'Something went wrong' })
    }
};

//!Update Product Controller
exports.updateProduct = async (req, res) => {
    try {

        res.status(200).json({ status: 'Success', data: 'Can contain any information' })

    } catch (error) {
        console.log(error);
        res.status(200).json({ status: 'fail', error: 'Something went wrong' })
    }
};