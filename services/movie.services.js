'use strict'

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('services/moviesData.json')
const db = low(adapter)
const _ = require('underscore')

exports.getSearch = (options, callback) => {
  try {
    const search = options.search
    let movies = []

    if (search){
      db._.mixin({
        search: function(movies) {
          return _.filter(movies, function(movie){ return movie.Title.toLowerCase().includes(search.toLowerCase());});
        }
      })

      movies = db.get('movies').search().value()
    } else {
      movies = db.get('movies')
    }

    return callback(null, movies)
  } catch(error){
    __logger.error('movieServices->getSearch: Error get search', error)
    return callback(error, null)
  }
}

// Get one movie by imdbID

/*
  Create a function "getOne" that receives an "id" and a "callback".
  Find the movie by the given id and return it
*/
