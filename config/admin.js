module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd02064955b3a589d3ecfb54217a5d5c2'),
  },
});
