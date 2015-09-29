const BaseModel = require('../../classes/base_model');

const instanceProps = {
  tableName: 'channel',
  hasTimestamps: true,
  location: function () {
    return this.belongsToMany(require('../locations/model'), 'location_channel');
  }
};

const classProps = {
  typeName: 'channel',
  filters: {
    location_id: function (qb, value) {
      return qb.whereIn('location_id', value);
    },
    name: function (qb, value) {
      return qb.whereIn('name', value);
    }
  },
  relations: [
    'location'
  ]
};

module.exports = BaseModel.extend(instanceProps, classProps);
