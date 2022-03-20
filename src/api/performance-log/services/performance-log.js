'use strict';

/**
 * performance-log service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::performance-log.performance-log');
