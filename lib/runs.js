'use strict';

const User = function (name, email) {
  this.name = name;
  this.email = email;
  this.runs = [];
};

const Run = function (date, distance, timeTaken) {
  this.date = date;
  this.distance = distance;
  this.timeTaken = timeTaken;
};

const PersonMcFace = new User ('Person McFace',
                           'wdi@personmcface.com');

const MaximeDore = new User ('Maxime Dore',
                           'wdi@maximedore.com');

PersonMcFace.runs.push(new Run('2015-05-25 15:00', 1200, 600));
MaximeDore.runs.push(new Run('2017-75-75 15:00', 1800, 800));
MaximeDore.runs.push(new Run('2017-75-75 15:00', 400, 400));
// const mcFaceRuns = {
//   name: 'Person McFace',
//   email: 'wdi@personmcface.com',
//   runs: [
//     {
//       date: '2015-05-25 15:00',
//       distance: 1200,
//       timeTaken: 600,
//     },
//     {
//       date: '2015-05-25 15:00',
//       distance: 1400,
//       timeTaken: 800,
//     },
//   ],
//   totalDistance: function () {
//   //got through all runs and add them
//   let result = 0;
//   for (let i = 0, max = this.runs.length; i < max; i++) {
//     result += this.runs[i].distance;
//   }
//   return result;
// },
//
//   longestRun: function () {},
//   averageSpeed: function () {},
// };

module.exports = PersonMcFace;
module.exports = MaximeDore;
