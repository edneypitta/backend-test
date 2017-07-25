test('should validate Product', () => {
  const product = new Product()

  expect(product.validate()).resolves.toBe(false)
  expect(product.errors).toBeDefined()
  expect(product.errors.item_id[0]).toBe('not valid')
  expect(product.errors.price[0]).toBe('not valid')

  product.item_id = 5
  product.price = 5
  expect(product.validate()).resolves.toBe(true)
})

