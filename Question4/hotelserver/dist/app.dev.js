"use strict";

var express = require('express');

var app = express();

var hotelLists = require('./hotels.json');

var cors = function cors(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
};

app.use(cors);
app.get("/showHotels", function (req, res) {
  res.status(200).send(hotelLists);
});
app.get('/showByCity', function (req, res) {
  var city = req.query.city;
  var newHotelList = [];
  hotelLists.forEach(function (hotel) {
    if (hotel.city == city) {
      newHotelList.push(hotel);
    }
  });
  res.status(200).send(newHotelList);
});
app.get('/showByType', function (req, res) {
  var type = req.query.type;
  var newHotelList = [];
  hotelLists.forEach(function (hotel) {
    if (hotel.type == type) {
      newHotelList.push(hotel);
    }
  });
  res.status(200).send(newHotelList);
});
app.listen('3000', function () {
  console.log('server listening to port 3000');
});