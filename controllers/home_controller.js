const Car= require('../models/user_cars')
module.exports.home= function(req,res){

    Car.find({}, function(err, cars){
        return res.render('home',{
        title: "Cars | Home",
        cars: cars
    });
});

}