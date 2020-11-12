const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      for (let i = 0; i < newCollection.length; i++)
        iteratee(newCollection[i])

        return collection
    },

    map: function(collection, iteratee) {
      if (!(collection instanceof Array))
      collection = Object.values(collection)

      const newArr = []

      for (let i = 0; i < collection.length; i++)
      newArr.push(iteratee(collection[i]))

      return newArr
    },

    reduce: function(c = [], callback = () => {}, acc) {
			let collection = c.slice(0)

			if (!acc) {
				acc = collection[0]
				collection = collection.slice(1)
			}

			let len = collection.length;

			for (let i = 0; i < len; i++) {
				acc = callback(acc, collection[i], collection)
			}
			return acc;
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
