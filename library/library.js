function issueCard(name, age, numBooksCheckedOut = 0, isChild) {
  if (age < 18) {
    isChild = true
  } else {
    isChild = false
  }

  return {
    name,
    age,
    numBooksCheckedOut,
    isChild
  }
}

function searchByAuthor(collectionArray, name) {
  returnedCollection = [];

  collectionArray.forEach(book => {
    if (book.author == name) {
      returnedCollection.push(book);
    }
  });

  if (returnedCollection.length === 0) {
    return 'No book found for search criteria';
  } else {
    return returnedCollection;
  }
}


module.exports = { 
  issueCard,
  searchByAuthor
};