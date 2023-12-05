function createElevator(building, floors, currentFloor, passengers) {
  return {
    building,
    floors,
    currentFloor,
    passengers
  }
}

function changeFloors(elevator, newFloor) {
  if (elevator.currentFloor == newFloor) {
    return `You're already on floor ${elevator.currentFloor}!`
  }

  if (newFloor > elevator.floors) {
    return `Floor ${newFloor} does not exist!`
  } else {
    return `Taking you to floor ${newFloor}!`
  }
}

function dropOffPassenger(elevator, person) {
  remainingPassengers = elevator.passengers
  remainingPassengers.splice(remainingPassengers.indexOf(person), 1)
  return remainingPassengers
}

module.exports = {  
  createElevator,
  changeFloors,
  dropOffPassenger
};
