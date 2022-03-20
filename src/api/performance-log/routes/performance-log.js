'use strict';

/**
 * performance-log router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::performance-log.performance-log');
