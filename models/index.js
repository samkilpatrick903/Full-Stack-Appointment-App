const User = require('./User');
const appointments = require('./appointments');

User.hasMany(appointments, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

appointments.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, appointments };
