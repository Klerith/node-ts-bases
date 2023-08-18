const { getUUID } = require('../plugins/get-id.plugin');
const { getAge }  = require('../plugins/get-age.plugin');

const { http } = require('../plugins/http-client.plugin');
const buildLogger = require('../plugins/logger.plugin');

module.exports = {
  getAge, 
  getUUID,
  http,
  buildLogger,
}