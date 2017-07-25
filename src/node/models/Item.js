module.exports = function () {
  this
    .belongsTo('venue')
    .hasOne('space')
    .hasOne('product')
}