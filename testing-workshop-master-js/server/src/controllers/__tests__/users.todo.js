import * as userController from '../users.js'
test('getUser', async () => {
  const req = {
    params: {
      id: 123,
    },
  }
  const res = {
    json: jest.fn(),
  }
  await userController.getUser(req, res)

  expect(res.json).toHaveBeenCalledTimes(1)
})
