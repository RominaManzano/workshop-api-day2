'use strict'

const low = require('lowdb')
const Moment = require('moment')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('services/contactData.json')
const db = low(adapter)

exports.create = (contact, callback) => {
  // Add new contact to contacts array
  // Handle error scenario

  db.defaults({ contacts: [] })
    .write()

  return;
}
