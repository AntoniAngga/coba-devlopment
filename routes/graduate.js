const express = require('express');
const router = express.Router();
const cGraduate = require('../controller/cGraduate');

router.get('/', (req, res) => {
    res.send("this graduate data");
})

router.post('/add', cGraduate.create_graduate);
router.get('/all', cGraduate.get_all);
router.get('/by_id/:id', cGraduate.get_by_id);
router.put('/update/:id', cGraduate.update_graduate);
router.delete('/delete/:id', cGraduate.destroy_graduate);
router.get('/page/:limit&:offset', cGraduate.get_limit);
router.post('/kirim_file', cGraduate.coba_kirim_file);

module.exports = router;
