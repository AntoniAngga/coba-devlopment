const express = require('express');
const router = express.Router();
const cUser_Regis = require('../controller/cUser_Regis');

/* GET home page. */
router.get('/', cUser_Regis.isLoggedIn,function(req, res, next) {
    res.render("index", {user: req.session.login_user})
});

// router.post('/registration', cUser_Regis.register);
router.get('/login', function (req,res) {
    res.render("login");
})
// router.post('/login',cUser_Regis.login);
router.post('/reset_password', cUser_Regis.resetPassword);
router.post('/confirm_password', cUser_Regis.confirmPassword);
router.post('/disable_user', cUser_Regis.disableUser);
router.post('/enable_user', cUser_Regis.enableUser);

//middleware

module.exports = router;
