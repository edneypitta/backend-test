test('should validate Venue', () => {
  const venue = new Venue()
  
  expect(venue.validate()).resolves.toBe(false)
  expect(venue.errors).toBeDefined()
  expect(venue.errors.name[0]).toBe('not valid')

  venue.name = 'name'
  expect(venue.validate()).resolves.toBe(true)
})

