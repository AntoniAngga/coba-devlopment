const AmazonCognitoIdentity = require("amazon-cognito-identity-js");
const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-southeast-1" });
require("dotenv").config();

const cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();

const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
const poolData = {  
	UserPoolId: process.env.UserPoolId,
	ClientId: process.env.ClientId
};
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
const dynamodb = new AWS.DynamoDB();

// ini untuk Reset Password
let resetPassword = (req,res) => {
    let cognitoUser = new AmazonCognitoIdentity.CognitoUser({
        Username: req.body.username,
        Pool: userPool
    });
    cognitoUser.forgotPassword({
        onSuccess: function (result) {
            res.send(result);
        },
        onFailure: function (err) {
            res.send(err);
        }
    });
};

// ini untuk confirm Password
let confirmPassword = (req,res) => {
    // 3 paramater (username, verification_code(dari email), new_password )
    let data = req.body;
        cognitoUser = new AmazonCognitoIdentity.CognitoUser({
            Username: data.username,
            Pool: userPool
        });
        cognitoUser.confirmPassword(data.verification_code, data.new_password, {
            onSuccess: function (data) {
                console.log("berhasil ganti password nya");
                res.redirect('/login')
            },
            onFailure: function(err){
                res.send(err)
             }
        });
};

// ini untuk Disable User
let disableUser = (req,res) => {
    var params = {
        UserPoolId: poolData.UserPoolId,
        Username: req.body.username
    };
    cognitoidentityserviceprovider.adminDisableUser(params, function (err, data) {
        if (err) {
            res.send(err)
        } else {
            res.send(`Enable User ${req.body.username} done :D`);
        }
    });
};

// ini untuk Enable User
let enableUser = (req,res) => {
    var params = {
        UserPoolId: poolData.UserPoolId,
        Username: req.body.username
    };
    cognitoidentityserviceprovider.adminEnableUser(params, function(err,data){
        if(err){
            res.send(err)
        } else {
            res.send(`Enable User ${req.body.username} done :D`);
        }
    });
};


let checkLogin = (req,res) => {
    // let cognitoUser = userPool.getCurrentUser();
    // if(cognitoUser != null){
    //     cognitoUser.getSession(function(err,session) {
    //         res.send(session.isValid());
    //     })
    // } else {
    //     res.send("you must login first")
    // }
    res.send("Masukkk brooo");
};

let isLoggedIn = function (req, res, next) {
    var cognitoUser = userPool.getCurrentUser();
    if (req.session.login_user != undefined) {
        return next();
    } else {
        res.redirect('/login');
    }
};


module.exports = {
    isLoggedIn,
    checkLogin,
    resetPassword,
    confirmPassword,
    disableUser,
    enableUser
};