const express = require('express');
const router = express.Router();
const cCompany = require('../controller/cCompany');

router.get('/', (req,res) => {
    res.send("this company data");
})

router.post('/add', cCompany.create_company);
router.get('/all', cCompany.get_all);
router.get('/by_id/:id', cCompany.get_by_id);
router.put('/update/:id', cCompany.update_company);
router.delete('/delete/:id', cCompany.delete_company);
router.get('/page/:limit&:offset', cCompany.get_limit);

module.exports = router;