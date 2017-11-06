const express = require('express');
const router = express.Router();
const cUser = require('../controller/cUser');

router.get('/', (req,res) => {
    res.send("Hellooo USer");
});

router.post('/add', cUser.create_user);
router.put('/update/:id', cUser.update_user);
router.get('/all', cUser.get_all);
router.get('/by_id/:id', cUser.get_by_id);
router.delete('/delete/:id', cUser.delete_user);
router.get('/page/:limit&:offset', cUser.get_limit);

module.exports = router;
