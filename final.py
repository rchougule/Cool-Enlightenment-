import pymongo
import time
from pymongo import MongoClient
client = MongoClient()
db = client.fridge


while(1):
	time.sleep(3);
	for i in db.process.find({"fridge_still":True}):
		weight_previous = i['ws_prev'];
		weight_new = i['ws_new'];
		_status = i['obj_status'];
		color = i['obj_color'];

		print("ws prev "+str(weight_previous));
		print("ws_new "+str(weight_new));
		print("_status "+_status);
		print("color "+color)
		print("==============")

		if _status == "IN":
			weight_object = weight_new; #- weight_previous;   #when the weights are from sensors, remove the comment - removed
			flag = 0;

			for j in db.items.find({"object":color}):
				flag = 1;
				db.items.update({"object":color},{"$inc":{"weight":weight_object}});
				print("updated an item")

				for k in db.items.find({"object":color}):	
					wt = k['weight'];
					wt_i = k['weight_initial'];

					# if(wt > 0.2*wt_i):
					# 	db.items.update({"object":color},{'$set':{"weight_critical":False}});
					# else:
					# 	db.items.update({"object":color},{'$set':{"weight_critical":False}});
			

			if flag == 0:
				db.items.insert({"object":color,"weight":weight_object,"weight_initial":weight_object});
				print("inserted an item")

		elif _status == "OUT":
			weight_object = weight_previous - weight_new;

			for k in db.items.find({"object":color}):
				db.items.update({"object":color},{"$inc":{"weight":-weight_object}});
				print("reduced the weight of an item")
			
			for k in db.items.find({"object":color}):	
				wt = k['weight'];
				wt_i = k['weight_initial'];

				# if(wt < 0.2*wt_i):
				# 	db.items.update({"object":color},{'$set':{"weight_critical":True}});
		

		for it in db.items.find({"object":color}):
			wt_num = it['weight'];
			wt_den = it['weight_initial'];

			wt_percent = (wt_num/wt_den)*100;
			db.items.update({"object":color},{'$set':{"weight_percent":wt_percent}});		

		db.process.update({"fridge_still":True},{'$set':{"ws_prev":weight_new}});
		db.process.update({"fridge_still":True},{'$set':{"obj_status":"IN/OUT"}});
		db.process.update({"fridge_still":True},{'$set':{"obj_color":"color"}});
		db.process.update({"fridge_still":True},{'$set':{"fridge_still":False}});




