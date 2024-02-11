const UserController = require('../controllers/user.controller');
const {authenticate} = require('../config/jwt.config')

module.exports = (app) => {
    app.post('/api/registerUser', UserController.register);
    app.post('/api/login', UserController.login)
    app.post('/api/logout', authenticate, UserController.logout)
    app.get('/api/accounts/', UserController.displayAll);
    app.get('/api/user/:id/', UserController.displayOne);
}













// const UserController = require('../controllers/user.controller');

// module.exports = (app) => {
//     app.post('/api/registerUser', UserController.registerUser);
// };



