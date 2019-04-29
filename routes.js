const routes = require('next-routes')();

routes
    .add('/campaigns/new', '/campaigns/new')
    .add('/dashboard','/dashboard')
    .add('/campaigns/getcandidate', '/campaigns/getcandidate')
    .add('/campaigns/totalvotes', '/campaigns/total');


module.exports = routes;