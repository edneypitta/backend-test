const OpenRecord = require('openrecord')

module.exports = {
  init() {
    return new OpenRecord({
      type: 'sqlite3',
      file: 'sqlite.db',
      global: true,
      models: __dirname + '/models/*'
    })
  },
  async getAllVenues() {
    return await Venue.include('items').exec()
  },
  async getVenue(id) {
    const venue = await Venue
      .include({ items: ['space', 'product'] })
      .where({ id })
      .exec()

    return venue[0]
  }
} 