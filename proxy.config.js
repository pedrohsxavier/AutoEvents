const proxy = [
  {
    context: '/api',
    target: 'http://autoevents-backend.herokuapp.com',
    pathRewrite: {'^/api' : ''}
  }
];
module.exports = proxy;
