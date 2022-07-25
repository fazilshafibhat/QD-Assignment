const Car= require('../models/user_cars');

module.exports.create= function(req, res){
    Car.create({
        carname: req.body.carname,
        regdnum: req.body.regdnum,
        topspeed: req.body.topspeed,
        range: req.body.range,
        torque: req.body.torque,
        power: req.body.power
    }, function(err, car){
        if(err){
            console.log("Error in creating car schema");
            return;
        }
        return res.redirect('back');
    });
}