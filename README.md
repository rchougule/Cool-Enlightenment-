# CoolEnlightenment
A smart add on for any refrigerator, which keeps track of food items and it’s quantity, and sends prompts to the user’s phone via a mobile application whenever a particular stock is running low.
If a new item is kept in the refridgerator, the device adds it to the database and keeps a record of it's initial weight. Whenever that particular item is subsequently removed and kept back, the change in weight is noted. When the quantity of the item falls below 30 %, a notification is sent on the mobile app so that the user is alerted about the same. Using the app, the user can always check the inventory of the fridge 

The device consisted of a Raspberry Pi connected to a webcam. We used tracking.js to quickly implement Computer Vision, to detect motion and identify objects. 

Microcontroller:-Raspberry Pi 3 with loadcells 
Server: Node.js
DB: MongoDB

This project was presented in the ICANN India Hasckathon 2016 Hyderabad. My team was part of the final top 10 teams in the hackathon. A video of our final submission is attached.
