/* global prompt:true */
'use strict';

var Pet = require('./models/pet');

var prompt = require('sync-prompt').prompt;

var response = prompt('Leave your pet with us? Y/N');
var pets = [];

while (response !== 'N'){
  var name = prompt('Name: ');
  var age = prompt('Age: ');
  var gender = prompt('Gender: ');
  var species = prompt('Species: ');

  var pet = new Pet(name, parseInt(age), gender, species);
  pets.push(pet);

  response = prompt('Leave your pet with us? Y/N');
}

if (pets.length > 1){
  //select 2 random pets to fight
  var p1 = pets[Math.floor(Math.random() * pets.length)];
  var p2 = pets[Math.floor(Math.random() * pets.length)];

  while (!p2.isZombie && !p1.isZombie){
    var random = Math.random();

    if (random > 0.5){
      //fighter one attacks fighter two
      p1.attack(p2);
      console.log(p1.name + ' attacks ' + p2.name);
    } else {
      //fighter two attacks fighter one
      p2.attack(p1);
      console.log(p2.name + ' attacks ' + p1.name);
    }

  }

  console.log('\nThe fight is over. ', p1.isZombie ? p1.name : p2.name, ' has lost.');
}
