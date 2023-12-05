function createTape(title, readyToPlay = false) {
  return {
    title,
    readyToPlay
  }
}

function reset(movie) {
  if (movie.readyToPlay == false) {
    movie.readyToPlay = true
    return movie
  } else {
    return movie
  }
}

function createCollection(...movies) {
  if (movies.length === 0) {
    return 'Your collection is empty.'
  } else {
    collection = movies
    return collection
  }
}

function previewCollection(collection) {
  collectionTitles = []
  collection.forEach(movie => {
    collectionTitles.push(movie.title)
  });
  return collectionTitles
}

module.exports = { 
  createTape,
  reset,
  createCollection,
  previewCollection
}