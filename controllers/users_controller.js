const Car= require('../models/user_cars')

const User = require('../models/user');
module.exports.profile= function(req, res){
    Car.find({}, function(err, cars){
   return res.render('user_profile',{
       title:"Cars | Profile",
       cars: cars
   });
});

}

// Render the sign up page 
module.exports.signUp= function(req, res){
    return res.render('user_sign_up',{
        title:"Cars | Sign Up"
    });
}


 // Render the sign in page 
module.exports.signIn= function(req, res){
    return res.render('user_sign_in',{
        title:"Cars | Sign In"
    });
}

// Get the sign up data
module.exports.create= function(req, res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({
        email: req.body.email
    }, function(err, user){
        if(err){
            console.log("Error in signing up!");
            return;
        }
        if(!user){
            User.create(req.body, function(err, user){
                if(err){
                    console.log("Error in creating user while signing up");
                    return;
                }
                return res.redirect('/users/sign-in');
            });
        }else{
            return res.redirect('back');
        }
    });
}

// Sign in and create a session for the user 
module.exports.createSession= function(req, res){
    // return res.redirect('/users/profile');
    return res.redirect('/');
}


//Sign out
module.exports.destroySession= function(req,res,next){
    req.logout(function(err){
        if(err){
            return next(err);
        }
        return res.redirect('/'); 
    });
    
}