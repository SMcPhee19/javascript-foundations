function createCollection(name, description, tracks = []) {
  return {
    name,
    description,
    tracks
  }
}

function createTrack(title, artist, duration) {
  if (title == undefined || artist == undefined || duration == undefined) {
    return {
      title: 'unknown',
      artist: 'unknown',
      duration: 0
    }
  } else {
    return {
      title,
      artist,
      duration
    }
  }
}

function reviewTrack(track) {
  if (track.artist == 'Red Hot Chili Peppers') {
    return `The song ${track.title} rules!`
  } else {
    return 'I wish this was a Red Hot Chili Peppers song.'
  }
}

function addTrack(collection, track) {
  collection.tracks.push(track)
  return collection
}

function getTotalDuration(collection) {
  totalDuration = 0
  collection.tracks.forEach(track => {
    totalDuration += track.duration
  });
  return totalDuration
}

function findTracksByArtist(collection, performer) {
  songsByArtist = []
  collection.tracks.forEach(track => {
    if (track.artist == performer) {
      songsByArtist.push(track)
    }
  });
  return songsByArtist
}

module.exports = {
  createCollection,
  createTrack,
  reviewTrack,
  addTrack,
  getTotalDuration,
  findTracksByArtist
}