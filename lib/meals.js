'use strict';

const User = function (name, bornOn, calorieTarget, meals) {
  this.name = name;
  this.bornOn = bornOn;
  this.calorieTarget = calorieTarget;
  this.meals = meals;
};

const Meals = function (title, date, description, calories) {
  this.title = title;
  this.date = date;
  this.description = description;
  this.calories = calories;
};

const PersonMcFace = new User ('Person McFace',
                               '1988-11-15',
                               2000);

const MaximeDore = new User ('Maxime Dore',
                             '1984-12-05',
                             2300);

PersonMcFace.meals.push(new Meals('breakfast', '2017-01-13', 'salad', 300));
PersonMcFace.meals.push(new Meals('lunch', '2017-01-13', 'pizza', 900));
MaximeDore.runs.push(new Meals('breakfast', '2017-01-13', 'eggs', 200));
MaximeDore.runs.push(new Meals('lunch', '2017-01-13', 'burger', 800));

// const mealObj = {};

  // caloriesEatenOn, which accepts a date (in the format above)
  //and calculates the total number of calories consumed on that date.
const caloriesEatenOn = function (date) {
  let totalCalories = 0;
  for ( let i = 0; i < this.Meals.length; i++) {
    if (this.Meals[i].date === date) {
       totalCalories += this.Meals[i].calories;
        }
      }
return totalCalories;
  };

const avgDailyCalories = function (Meals.date.length) {
  //take caloriesEatenOn and
  const dailyCalories = caloriesEatenOn();
// calculate number of numOfDays
for (let i = 0; i < Meals.date.length; i++) {
  const
//divide caloriesEatenOn by numOfDays
  avgDailyCalories = dailyCalories()/totalDays;
}
  return avgDailyCalories;
};

const onTrack = function () {};

// A 'User' needs to have:
// a name (name)
// a date-of-birth (bornOn)
// a target daily calorie intake (calorieTarget)
// a list of 'Meals' that they've eaten (meals)
// Every 'Meal' must have:
// a title (title), e.g. 'breakfast', 'lunch', 'dinner'
// a date (date), represented as a string e.g. "2016-06-25"
// a description (description)
// a number of estimated calories (calories)
// Then, create the following methods for your instance of a 'User':
// caloriesEatenOn, which accepts a date (in the format above) and calculates the total number of calories consumed on that date.
// avgDailyCalories, which (as indicated), calculates the average number of calories consumed per day, rounded down to the nearest whole calorie.
// onTrack, which compares averageDailyCalories to the User's target daily calorie intake, and returns true if average caloric intake is at or below the target (or false if the reverse is true).
// Add your code to lib/meals.js, structured similarly to lib/runs.js.

module.exports = caloriesEatenOn;
module.exports = avgDailyCalories;
module.exports = onTrack;
