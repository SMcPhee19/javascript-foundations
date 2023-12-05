function createIngredient(name, price) {
  if (name == undefined || price == undefined) {
    return {
      name: 'unknown',
      price: 0.00
    }
  } else {
    return {
      name,
      price
    }
  }
}

function createTaco(name, ingredients = []) {
  if (name == undefined) {
    return {
      name: 'custom'
    }
  } else {
    return {
      name,
      ingredients
    }
  }
}

function addIngredientToTaco(taco, newIngredient) {
  tacoIngredientsArray = taco.ingredients
  tacoIngredientsArray.push(newIngredient)
  return taco
}

function calculatePrice(taco) {
  tacoPrice = 0
  tacoIngredientsArray = taco.ingredients

  tacoIngredientsArray.forEach(ingredient => {
    tacoPrice += ingredient.price
  });
  return tacoPrice
}

module.exports = {
  createIngredient,
  createTaco,
  addIngredientToTaco,
  calculatePrice
}
