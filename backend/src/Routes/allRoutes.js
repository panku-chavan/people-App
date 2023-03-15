const express = require('express');
const People = require('../Model/peoples');
const router = express.Router();

router.route('/peoples').get(async (req, res, next) => {
    try {
        let peoples = await People.find({});
        res.status(200).json(peoples);
    }
    catch (err) {
        res.status(500);
        next(err);
    }
});

router.route('/peoples/names').get(async (req, res, next) => {
    try {
        let peoples = await People.find({}).select("name");
        res.status(200).json(peoples);
    } catch (err) {
        res.status(500);
        next(err);
    }
});

router.route("/peoples/:id").get(async (req, res, next) => {
    const id = req.params.id;
    try {
        const people=await People.findById(id);
        res.status(200).json(people);

    } catch (err) {
        res.status(404).json({ messege: "Sorry....! You enter wrong ID, No such subscriber found in this ID." })
        next(err);
    }

});

router.route('/peoples').post(async (req, res, next) => {
    let people= new People({
        name:req.body.name,
        email:req.body.email,
        mobile:req.body.mobile,
        dob:req.body.dob,
        gender:req.body.gender
    });
    await people.save();
    res.send(people);
});


module.exports = router;