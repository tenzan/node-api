const BaseModel = require('../../classes/base_model');

const instanceProps = {
  tableName: 'location',
  hasTimestamps: true,
  channel: function () {
    return this.belongsToMany(require('../channels/model'), 'location_channel');
  }
};

const classProps = {
  typeName: 'location',
  filters: {
    channel_id: function (qb, value) {
      return qb.whereIn('channel_id', value);
    },
    name: function (qb, value) {
      return qb.whereIn('name', value);
      }
  },
  relations: [
    'channel'
  ]
};

module.exports = BaseModel.extend(instanceProps, classProps);
