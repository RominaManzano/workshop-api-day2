'use strict'

const messages = require('catalogs/messages')
const contactHelper = require('helpers/contact.helper')
const responder = require('helpers/response.helper')
const contactServices = require('services/contact.services')

exports.create = async (req, res, next) => {
	const body = req.body

	// Validate body data

	contactServices.create(body, (error, data) => {
		// Handle error scenario

		return responder.respondData(res, data);
	})
}
