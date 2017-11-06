const db = require('../models')
const uuidv4 = require("uuid/v4");

const create_company = (req,res) => {
    const data = req.body;
    console.log(data);
    db.Company.create({
        id: uuidv4(),
        title: data.title,
        phone_number: data.phone_number,
        email: data.email,
        address: data.address,
        website: data.website,
        agrement_sign: generateDate(data.agrement_sign),
        link_agrement: data.link_agrement,
        type: data.type,
        id_graduate: data.id_graduate
    })
    .then(data => {
        res.status(200).send(data)
    })
    .catch(err => {
        res.status(501).send(err)
    })
}

function generateDate(date) {
    var d = new Date(date);
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDate();
    var c = new Date(year + 2, month, day)

    var full_agrementsign = `${d} - ${c}`

    return full_agrementsign
    
}


const get_all = (req,res) => {
    db.Company.findAll()
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(501).send(err);
    })  
} 

const update_company = (req,res) => {
    const data = req.body;
    const id = req.params.id;
    db.Company.update({
        title: data.title,
        phone_number: data.phone_number,
        email: data.email,
        address: data.address,
        website: data.website,
        agrement_sign: generateDate(data.agrement_sign),
        link_agrement: data.link_agrement,
        type: data.type,
        id_graduate: data.id_graduate
    }, {
        where : {id:id}
    })
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(501).send(err);
    })
}

const get_by_id = (req,res) => {
    const id = req.params.id;
    db.Company.findAll({
        where: {
            id:id
        }
    })
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(501).send(err);
    })
}

const get_limit = (req,res) => {
    const limit = req.params.limit;
    const offset = req.params.offset;
    db.Company.findAll({
        offset : offset,
        limit  : limit
    })
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(501).send(err);
    })
}

const delete_company = (req,res) => {
    const id = req.params.id;
    db.Company.destroy({
        where : {
            id: id
        }
    })
    .then( () => {
        res.status(200).send("1 Row Deleted");
    })
    .catch(err => {
        res.status(501).send(err)
    })
}

module.exports = {
    create_company,
    update_company,
    get_by_id,
    delete_company,
    get_all,
    get_limit
};
