const db = require('../data/db-config.js');

module.exports = {
  find,
  findById,
  add,
  findPosts,
  update,
  remove
}

function find() {
  return db('users')
}

function findById(id) {
  return db('users').where({ id })
}

function add(userData) {
  return db('users').insert(userData)
}

function findPosts(id) {
  return db('posts as p')
    .join('users as u', 'u.id', 'p.user_id')
    .select('p.id', 'u.username', 'p.contents')
    .where({ user_id: id })
}

function update(id, changes) {
  return db('users').where({ id }).update(changes)
}

function remove(id) {
  return db('users').where({ id }).del()
}