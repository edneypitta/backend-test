test('should validate Space', () => {
  const space = new Space()

  expect(space.validate()).resolves.toBe(false)
  expect(space.errors).toBeDefined()
  expect(space.errors.item_id[0]).toBe('not valid')
  expect(space.errors.hour_price[0]).toBe('not valid')

  space.item_id = 5
  space.hour_price = 5
  expect(space.validate()).resolves.toBe(true)
})

