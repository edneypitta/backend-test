const db = require('../db')

beforeAll(done => db.init().ready(() => done()))