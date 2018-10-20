var express = require('express'),
	cors = require('cors');
var app = express();

app.use(cors());

//var databaseUrl = "localhost:27017/fridge";
//var collections = ["process","items"]
var mongojs = require("mongojs")
var db = mongojs("fridge")

var obj_name;
var _status;


/*db.process.update({"weight":false},{$set:{"weight":true}});
db.process.update({"fridge":false},{$set:{"fridge":true}});*/


app.post('/',function(req,res){
	//console.log(req.headers.name);
	//console.log(req.headers.status);

	obj_name = req.headers.name;
	_status = req.headers.status;

	if(_status=="IN" || _status=="OUT")
	{
		db.process.update({"ultrasonic":true},{$set:{"obj_status":_status}});
		db.process.update({"ultrasonic":true},{$set:{"obj_color":obj_name}});
		db.process.update({"ultrasonic":true},{$set:{"weight":true}});
		db.process.update({"ultrasonic":true},{$set:{"fridge_still":true}});

	}

	db.process.find(function(err,process)
	{
	if(err || !process) console.log("no process db found");
	else
	{
		process.forEach(function ( i )
		{
			console.log(i)
		});
	}
	});

	_status = "none";
	obj_name = "none";
	
	res.send("hey "+req.headers.name+" !!");
});



//db.items.update({"object":"name"},{$set:{"object":"cyan"}});

//db.items.insert({"object":"magenta","weight":50});

/*db.process.find(function(err,process)
{
	if(err || !process) console.log("no process db found");
	else
	{
		process.forEach(function ( i )
		{
			console.log(i)
		});
	}
});

db.items.find(function(err,items){
	if(err || !items) console.log("items not found");
	else
	{
		items.forEach(function(i)
		{
			console.log(i)
		})
	}
})*/


app.listen(8082);
