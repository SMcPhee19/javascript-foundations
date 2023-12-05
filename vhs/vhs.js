function createTape(title, readyToPlay = false) {
  return {
    title,
    readyToPlay
  }
}

module.exports = { 
  createTape
}