function createBarber(name, earnings = 0, cutsArray) {
  haircutsArray = []
  if (cutsArray == undefined) {
    haircutsArray = []
  } else {
    cutsArray.forEach(cut => {
      haircutsArray.push(cut)
    });
  }

  return {
    name,
    earnings,
    haircuts: haircutsArray
  }
}

function giveCompliment(haircut) {
  return `This ${haircut.style} looks great!`
}

function cutHair (barber, cut) {
  barberCuts = barber.haircuts
  barberCuts.push(cut)

  barber.earnings += cut.price
  return barber
}

function listStyles (barber, styleLength) {
  const barberCuts = barber.haircuts.slice();

  barberKnownCutNames = []
  barberCuts.forEach(cut => {
    if (cut.hairLength == styleLength) {
      barberKnownCutNames.push(cut.style)
    }
  });
  return barberKnownCutNames
}

module.exports = {
  createBarber,
  giveCompliment,
  cutHair,
  listStyles
};