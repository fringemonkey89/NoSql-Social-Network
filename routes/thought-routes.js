const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought
} = require('../controllers/thought-controller');


router.route('/').get(getAllThoughts)
       
router.route('/:userId').post(createThought)

router.route('/:thoughtId').get(getThoughtById).put(updateThought).delete(deleteThought)

module.exports = router;