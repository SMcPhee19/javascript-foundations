function createMeal(name, specialRequests = [], tableNumber, complete = false) {
  return {
    name,
    specialRequests,
    tableNumber,
    complete
  }
}

function getMade(meal) {
  meal.complete = true
  return meal
}

function announceMeal(meal) {
  if (meal.complete == true) {
    return `Order up - ${meal.name} for table ${meal.tableNumber}!`
  } else {
    return `This ${meal.name} is not completed yet`
  }
}

function createOrder(hash) {
  return {
    tableNumber: hash.name,
    meals: hash.meals,
    completedMeals: []
  }
}

function cookMeal(order, meal) {
  if (meal.tableNumber == order.tableNumber) {
    order.completedMeals.push(meal.name)
  }
  return order
}

function listOrders(order) {
  orderNames = []
  order.meals.forEach(meal => {
   orderNames.push(meal.name)
  });
  return orderNames
}

function listSpecialRequests(order) {
  orderSpecialRequests = []
  order.meals.forEach(meal => {
    orderSpecialRequests.push(meal.specialRequests)
  });

  return orderSpecialRequests.flat()
}

module.exports = { 
  createMeal, 
  getMade, 
  announceMeal,
  createOrder, 
  cookMeal, 
  listOrders, 
  listSpecialRequests
};
