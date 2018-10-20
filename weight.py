import pymongo
from pymongo import MongoClient
client = MongoClient()
db = client.fridge

import RPi.GPIO as GPIO
import time
import sys
from hx711 import HX711

def cleanAndExit():
    print "Cleaning..."
    GPIO.cleanup()
    print "Bye!"
    sys.exit()

hx = HX711(5, 6)

hx.set_reading_format("LSB", "MSB")

hx.set_reference_unit(92)

hx.reset()
hx.tare()

true = True
false = False

val = 0

db.process.update({"weight":false},{'$set':{"weight":true}})
db.process.update({"fridge":false},{'$set':{"fridge":true}});

while(1):

	try:
        
        val = hx.get_weight(5)
        #print val

        hx.power_down()
        hx.power_up()
        time.sleep(0.5)
        except (KeyboardInterrupt, SystemExit):
        cleanAndExit()
	#get reading from the weight sensor


	#value = 5;
	#for i in db.process.find({ '$or' : [{ '$and' : [{"weight":true},{"fridge":true}	]},	{  '$and' : [{"weight":true},{"fridge_still":true} ]}]}):
		#print("entered")

		#remove the comment quotes after getting actual readings from the sensor - removed
		
	for j in db.process.find({ '$and' : [{"weight":true},{"fridge":true}]}):
		db.process.update({"fridge":true},{'$set':{"ws_prev":val}})
		db.process.update({"weight":true},{'$set':{"weight":false}})
		db.process.update({"fridge":true},{'$set':{"fridge":false}})



	for k in db.process.find({ '$and' : [{"weight":true},{"fridge_still":true}]}):
		print(val);
		db.process.update({"fridge_still":true},{'$set':{"ws_new":val}})
		db.process.update({"weight":true},{'$set':{"weight":false}})


		#db.process.update({"weight":true},{'$set':{"weight":false}})


