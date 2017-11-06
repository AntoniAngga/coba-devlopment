const db = require('../models');
const AWS = require('aws-sdk');
const uuid = require('uuid/v4');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

AWS.config.update({
    "accessKeyId": process.env.accessKeyId,
    "secretAccessKey": process.env.secretAccessKey,
    "region": process.env.region
});

const create_graduate = (req,res) => {
    // untuk create Graduate nya
    let newGraduate = req.body;
    let uuid_graduate = uuid();
    let http_location = "https://s3-us-west-2.amazonaws.com/hacktiv8-alumni/Data_Graduate"
    let pdf_base64 = newGraduate.cv.toString('base64');
    let img = new Buffer(newGraduate.photo.replace(/^data:image\/\w+;base64,/, ""), 'base64');
    let pdf = new Buffer(pdf_base64.replace(/^data:image\/\w+;base64,/, ""), 'base64');
    let convert_name = newGraduate.name.replace(/ /g, '+');

    var data_img = {
        Key: `${newGraduate.name}.jpg`,
        Body: img,
        Bucket: `hacktiv8-alumni/Data_Graduate/${uuid_graduate}`,
        ContentEncoding: 'base64',
        ContentType: 'image/jpeg',
        ACL: "public-read"
    };
    var data_pdf = {
        Key: `${newGraduate.name}.pdf`,
        Body: pdf,
        Bucket: `hacktiv8-alumni/Data_Graduate/${uuid_graduate}`,
        ContentEncoding: 'base64',
        ContentType: 'application/pdf',
        ContentDisposition: 'inline',
        ACL: "public-read"
    }
    s3.putObject(data_img, function (err_img, res_img) {
        if (err_img) {
            console.log(err_img);
            console.log('Error uploading data: ', res_img);
        } else {
            // console.log(data.getObjectUrl());
            s3.putObject(data_pdf, function (err_pdf, res_pdf) {
                if (err_pdf) {
                    console.log(err_pdf);
                    console.log('Error uploading data: ', res_pdf);
                } else {
                    let new_url_graduate_img = http_location + `/${uuid_graduate}/${convert_name}.jpg`;
                    let new_url_graduate_pdf = http_location + `/${uuid_graduate}/${convert_name}.pdf`;
                    console.log("ini link photo untuk : ", new_url_graduate_img);
                    console.log("ini link pdf untuk : ", new_url_graduate_pdf);
                    console.log('succesfully uploaded the image & pdf!');
                    db.Graduate.create({
                        id: uuid_graduate,
                        name: newGraduate.name,
                        phone_number: newGraduate.phone_number,
                        photo: new_url_graduate_img,
                        email: newGraduate.email,
                        history_education: newGraduate.history_education,
                        cv: new_url_graduate_pdf,
                        linkedin: newGraduate.linkedin,
                        github: newGraduate.github,
                        birthday: newGraduate.birthday,
                        final_project: newGraduate.final_project,
                        score: newGraduate.score,
                        award: newGraduate.award
                    })
                    .then(data => {
                        res.status(200).send(data);
                    })
                    .catch(err => {
                        console.log(err);
                    })
                }
            })
        }
    });
};

const update_graduate = (req,res) => {

    let updateGraduate = req.body;
    let id = req.params.id;
    let http_location = "https://s3-us-west-2.amazonaws.com/hacktiv8-alumni/Data_Graduate"
    let pdf_base64 = updateGraduate.cv.toString('base64');
    let img = new Buffer(updateGraduate.photo.replace(/^data:image\/\w+;base64,/, ""), 'base64');
    let pdf = new Buffer(pdf_base64.replace(/^data:image\/\w+;base64,/, ""), 'base64');
    let convert_name = updateGraduate.name.replace(/ /g, '+');

    var data_img = {
        Key: `${updateGraduate.name}.jpg`,
        Body: img,
        Bucket: `hacktiv8-alumni/Data_Graduate/${id}`,
        ContentEncoding: 'base64',
        ContentType: 'image/jpeg',
        ACL: "public-read"
    };
    var data_pdf = {
        Key: `${updateGraduate.name}.pdf`,
        Body: pdf,
        Bucket: `hacktiv8-alumni/Data_Graduate/${id}`,
        ContentEncoding: 'base64',
        ContentType: 'application/pdf',
        ContentDisposition: 'inline',
        ACL: "public-read"
    }

    s3.putObject(data_img, function (err_img, res_img) {
        if (err_img) {
            console.log(err_img);
            console.log('Error uploading data: ', res_img);
        } else {
            // console.log(data.getObjectUrl());
            s3.putObject(data_pdf, function (err_pdf, res_pdf) {
                if (err_pdf) {
                    console.log(err_pdf);
                    console.log('Error uploading data: ', res_pdf);
                } else {
                    let new_url_graduate_img = http_location + `/${id}/${convert_name}.jpg`;
                    let new_url_graduate_pdf = http_location + `/${id}/${convert_name}.pdf`;
                    console.log("ini link photo untuk : ", new_url_graduate_img);
                    console.log("ini link pdf untuk : ", new_url_graduate_pdf);
                    console.log('succesfully uploaded the image & pdf!');
                    db.Graduate.update({
                        name: updateGraduate.name,
                        phone_number: updateGraduate.phone_number,
                        photo: new_url_graduate_img,
                        history_education: updateGraduate.history_education,
                        cv: new_url_graduate_pdf,
                        email: updateGraduate.email,
                        linkedin: updateGraduate.linkedin,
                        github: updateGraduate.github,
                        birthday: updateGraduate.birthday,
                        final_project: updateGraduate.final_project,
                        score: updateGraduate.score,
                        award: updateGraduate.award
                    }, {
                            where: { id: id }
                        })
                        .then(data => {
                            res.status(200).send(data);
                        })
                        .catch(err => {
                            res.status(501).send(err);
                        });
                }
            })
        }
    });
}

const destroy_graduate = (req,res) => {
    let id = req.params.id;
    db.Graduate.destroy({
        where: {id:id}  
    })
    .then(data => {
        res.status(200).send("1 row deleted");
    })
    .catch(err => {
        res.status(503).send(err);
    })
} 

const get_all = (req,res) => {
    db.Graduate.findAll()
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(501).send(err)
    })
}

const get_by_id = (req,res) => {
    let id = req.params.id;
    db.Graduate.findAll({
        where: {
            id: id
        }
    })
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        console.log(err);
        res.status(504).send(err);
    })
}

const get_limit = (req,res) => {
    let limit = req.params.limit;
    let offset = req.params.offset;
    db.Graduate.findAll({
        offset: offset,
        limit: limit
    })
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(503).send(err);
    })
}

const coba_kirim_file = (req,res) => {
    const s3 = new AWS.S3({ apiVersion: '2006-03-01' });
    let http_location = "https://s3-us-west-2.amazonaws.com/hacktiv8-alumni/Data_Graduate"
    let uuid_graduate = uuid();
    let pdf_base64 = req.body.cv.toString('base64');
    let img = new Buffer(req.body.photo.replace(/^data:image\/\w+;base64,/, ""), 'base64');
    let pdf = new Buffer(pdf_base64.replace(/^data:image\/\w+;base64,/, ""), 'base64');
    let convert_name = req.body.name.replace(/ /g, '+');
    var data_img = {
        Key: `${convert_name}.jpg`,
        Body: img,
        Bucket: `hacktiv8-alumni/Data_Graduate/${uuid_graduate}`,
        ContentEncoding: 'base64',
        ContentType: 'image/jpeg',
        ACL: "public-read"
    };
    var data_pdf = {
        Key: `${convert_name}.pdf`,
        Body: pdf,
        Bucket: `hacktiv8-alumni/Data_Graduate/${uuid_graduate}`,
        ContentEncoding: 'base64',
        ContentType: 'application/pdf',
        ContentDisposition: 'inline',
        ACL: "public-read"
    }
    s3.putObject(data_img, function (err_img, res_img) {
        if (err_img) {
            console.log(err_img);
            console.log('Error uploading data: ', res_img);
        } else {
            // console.log(data.getObjectUrl());
            s3.putObject(data_pdf, function(err_pdf, res_pdf) {
                if(err_pdf){
                    console.log(err_pdf);
                    console.log('Error uploading data: ', res_pdf);
                } else {
                    let new_url_graduate_img = http_location + `/${uuid_graduate}/${req.body.name}.jpg`;
                    let new_url_graduate_pdf = http_location + `/${uuid_graduate}/${req.body.name}.pdf`;
                    console.log("ini link photo untuk : ", new_url_graduate_img);
                    console.log("ini link pdf untuk : ", new_url_graduate_pdf);
                    console.log('succesfully uploaded the image & pdf!');
                }
            })
        }
    });
}

module.exports = {
    create_graduate,
    update_graduate,
    destroy_graduate,
    get_all,
    get_by_id,
    get_limit,
    coba_kirim_file
}