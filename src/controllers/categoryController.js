//!Create Category Controller
exports.createCategory = async (req, res) => {
    try {

        res.status(200).json({ status: 'Success', data: 'Can contain any information' })

    } catch (error) {
        console.log(error);
        res.status(200).json({ status: 'fail', error: 'Something went wrong' })
    }
};

//!Read Category Controller
exports.readCategory = async (req, res) => {
    try {

        res.status(200).json({ status: 'Success', data: 'Can contain any information' })

    } catch (error) {
        console.log(error);
        res.status(200).json({ status: 'fail', error: 'Something went wrong' })
    }
};

//!Delete Category Controller
exports.deleteCategory = async (req, res) => {
    try {

        res.status(200).json({ status: 'Success', data: 'Can contain any information' })


    } catch (error) {
        console.log(error);
        res.status(200).json({ status: 'fail', error: 'Something went wrong' })
    }
};

//!Update Category Controller
exports.updateCategory = async (req, res) => {
    try {

        res.status(200).json({ status: 'Success', data: 'Can contain any information' })

    } catch (error) {
        console.log(error);
        res.status(200).json({ status: 'fail', error: 'Something went wrong' })
    }
};