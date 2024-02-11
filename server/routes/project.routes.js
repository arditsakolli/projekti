//importing ProjectController so we can call our functions 
const ProjectController = require('../controllers/project.controller');

module.exports = app => {
    //app.get()  get() is a method that takes 2 parameters the route and a
    // call back function in our case were callibg the function from controller
//get() - method '/api/project/' - route, ProjectController - file name were our function is declered, displayAll-our function 
    app.get('/api/project/', ProjectController.displayAll);
    // app.get('/products/:byname', ProjectController.displayByNames);
    app.get('/api/project/:id/', ProjectController.displayOne);   //id is a key name 
    app.post('/api/project/', ProjectController.createProject);
    app.delete('/api/project/:id', ProjectController.deleteProject);   //id is a key name 
    app.patch('/api/project/:id', ProjectController.editProject);
    app.put('/:id', ProjectController.updateProjectById);     //id is a key name 
};
