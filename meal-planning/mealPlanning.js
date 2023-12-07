function createMeal(type, calorieGoal, dishes = []) {
  return {
    type,
    calorieGoal,
    dishes
  }
}

function addDish(meal, dish) {
  if (meal.calorieGoal >= dish.calories) {
    meal.calorieGoal -= dish.calories
    meal.dishes.push(dish)
  }
  return meal
}

function calculateCalories(meal) {
  totalCalories = 0
  meal.dishes.forEach(dish => {
    totalCalories += dish.calories
  });
 
  return `${meal.type} has a total of ${totalCalories} calories.`
}

module.exports = {
  createMeal,
  addDish,
  calculateCalories
}