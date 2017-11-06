const db = require('../models');
const uuid = require('uuid/v4');

const get_all = (req,res) => {
    db.User.findAll()
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(501).send(err);
    })
}

const create_user = (req,res) => {
    const new_data = req.body;
    db.User.create({
        id: uuid(),
        name: new_data.name,
        type: new_data.type,
        email: new_data.email,
        phone_number: new_data.phone_number,
        email_verification: new_data.email_verification,
        status: new_data.status,
        id_company: new_data.id_company
    })
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(501).send(err);
    })
};

const update_user = (req,res) => {
    const update_data = req.body;
    const id = req.params.id;
    db.User.update({
        id: uuid(),
        name: update_data.name,
        type: update_data.type,
        email: update_data.email,
        phone_number: update_data.phone_number,
        email_verification: update_data.email_verification,
        status: update_data.status,
        id_company: update_data.id_company
    }, {
        where : {
            id : id
        }
    })
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(501).send(err);
    })
};

const delete_user = (req,res) => {
    const id = req.params.id;
    db.User.destroy({
        where: {
            id: id
        }
    })
    .then(() => {
        res.status(200).send("1 Row Deleted");
    })
    .catch(err => {
        res.status(501).send(err)
    })
};

const get_by_id = (req,res) => {
    const id = req.params.id;
    db.User.findAll({
        where : {
            id: id
        }
    })
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(501).send(err);
    })
};

const get_limit = (req,res) => {
    let offset = req.params.offset;
    let limit = req.params.limit;
    db.User.findAll({
        offset: offset,
        limit: limit
    })
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(501).send(err);
    })
};

module.exports = {
    create_user,
    update_user,
    delete_user,
    get_by_id,
    get_limit,
    get_all
}
