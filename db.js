var mongoose =require('mongoose');


mongoose.connect('mongodb://localhost/xongolab',
{useNewUrlParser:true},
(err)=>{
if(!err)
{
console.log("DbConnection Success")
}

else

	{
console.log("DbConnection Success"+err)
	};

});

require('./usr.model')