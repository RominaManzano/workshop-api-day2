'use strict'

const responder = require('helpers/response.helper')

// Require api-docs routes
const index = require('routes/index')

// Require routes
const moviesRoutes = require('routes/v1/movies.routes')

module.exports = function (app) {

	// app routes
	app.use('/v1/movies', moviesRoutes)

	app.use(responder.notFound)
	app.use(responder.error)
}
