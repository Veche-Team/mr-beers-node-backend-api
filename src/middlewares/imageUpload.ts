import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {

        const imagePath = file.fieldname === 'beverageImage' ? 'beverages' : 'snacks';

        cb(null, `./images/${imagePath}`)
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    } 
});

const upload = multer({ storage: storage });

export default upload;