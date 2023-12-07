function createMaterial(name, unit, costPerUnit) {
  return {
    name,
    unit,
    costPerUnit
  }
}

function calculateMaterialCost(material, quantity) {
  totalPrice = material.costPerUnit * quantity
  
  return `${quantity} ${material.unit}s of ${material.name} costs $${totalPrice}.`
}

function createSupplyCloset(arr) {
  craftNames = []
  if (arr != undefined) {
    arr.forEach(craft => {
      craftNames.push(craft.name)
    });
  }
  return {
    supplies: craftNames
  }
}

function addSupply(closet, material) {
  newArray = closet.supplies
  if (newArray.includes(material.name)) {
    return `You already have ${material.name} in your closet!`
  } else {
    newArray.push(material.name)
    return newArray
  }
}

function createNewProject(materialsArr, status = 'not started') {
  return {
    materialsNeeded: materialsArr,
    status: status
  }
}

function compareMaterials(project, mySupplies) {
  materialsArray = []
  project.materialsNeeded.forEach(material => {
    materialsArray.push(material.name)
  });
  if (materialsArray.every(material => mySupplies.supplies.includes(material))) {
    return 'Yay! You can start this project!'
  } else {
    return 'Oh no! You need to go shopping before you can start this project!'
  }
}

module.exports = {
  createMaterial,
  calculateMaterialCost,
  createSupplyCloset,
  addSupply,
  createNewProject,
  compareMaterials
}