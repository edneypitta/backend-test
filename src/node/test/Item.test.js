test('should validate Item', () => {
  const item = new Item()
  
  expect(item.validate()).resolves.toBe(false)
  expect(item.errors).toBeDefined()
  expect(item.errors.venue_id[0]).toBe('not valid')
  expect(item.errors.name[0]).toBe('not valid')

  item.venue_id = 5
  item.name = 'name'
  expect(item.validate()).resolves.toBe(true)
})

