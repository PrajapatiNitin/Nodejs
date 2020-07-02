var exp = require('express');

var rout = exp.Router();

var mongoose = require('mongoose');

var User = mongoose.model('User');


rout.get('/', (req, res) => {
    res.render("./dashbord");

});


rout.get('/add-user', (req, res) => {
    res.render("./insert_form");

});


rout.post('/add-user', (req, res) => {
    insertData(req, res);

});


function insertData(req, res) {
    var user = new User();

    user.studentfirstname = req.body.studentfirstname;
    user.studentlastname = req.body.studentlastname;

    user.gender = req.body.gender;

    user.hobby = req.body.hobby;

    user.branchname = req.body.branchname;

    user.studentumage = req.body.studentimage;

    user.address = req.body.address;

    user.save((err, doc) => 
	{
 
       if (!err) 
	{
            
		res.redirect('add-user');

        } else {
 
           console.log("error in inserting");

	        }

        });
	
}
		

rout.get('/list', (req, res) => 
		{
   
		 User.find((err, docs) =>
		 {
   
		     let data = 
		{
          
		  'data': docs
 
	       }
   
	     res.render("./home", data);

     });

     });


	rout.get('/update/:_id', (req, res) => 
	{

    
		var id = req.params._id;
    User.findOne({
        "_id": id
    }, 
		function(err, obj)
		 {

       
		 if (err) 
		{
   
	         console.log("error");
 
	       } else {
 
	           let update = {
 
	               'update_data': obj,
 
	               user_id: id
  
		          }
    
	        res.render("./update", update);
 
	       }
 
	   });
	
});
	

rout.post('/update/:_id', (req, res) =>
	 {
 
	   UpdateData(req, res);


	});
	

function UpdateData(req, res)
	 {
  
	  console.log(req.body);
	
    return false;
 
	   User.findOneAndUpdate({ studentfirstname: req.body.id },
	 { studentlarstname: req.body.studentlastname,studentfirstname: req.body.mail,
	 gender: req.body.gender,
	 hobby: req.body.hobby,
	 branchname: req.body.branchname,
	 studentimage: req.body.studentimage,
	 address: req.body.address },
	 function(err, user) 
	{
  
	      if (err)
		 {
 
	           console.log(err);
 
	         }
 
	       res.redirect('/list');

	    });


	}
	

rout.get('/delete/:_id', (req, res) => 
	{

	    var id = req.params._id;
	
    User.findOneAndRemove({
        _id: id
    },
	    function(err)
	    {
 
	       if (err)
		 {
 
	           console.log(err);
	
        }

	        res.redirect('/list');

	    });

	    });
	

module.exports = rout;
