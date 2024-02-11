const { response } = require('express');
const Project = require('../models/project.model');

module.exports.createProject = (req, res) => {
    // if (req.body.position === 'Captain') {

    //     Project.findOne({ position: 'Captain' })
    //         .then(project => {
    //             if (project) {
    //                 return res.status(400).json({ errors: { position: { message: "There Is a Captain Already" } }})                
    //             }
    //             else {
    //                 Project.create(req.body)
    //                     .then(project => res.json(project))
    //                     .catch(err => res.status(400).json(err))
    //             }
    //         })
    // }
    // else {
        // Project: This likely refers to a model or database schema representing pirates 
        // in some kind of data storage system (e.g., MongoDB,
        //      MySQL). It suggests that there is a method called create associated with the Pirate model or database object.
        // req.body: This represents the data sent in the HTTP request body. 
        // In a server application, 
        // req typically stands for the request object, and req.body contains the data sent from the client.
        // In this case, it's assumed that the data sent in the request body 
        // is expected to contain information needed to create a new pirate entry in the database.
        Project.create(req.body)
        // .then(pirate => ...): This is part of a Promise chain.
        //  The create method likely returns a Promise. When the creation is successful, 
        //  the function inside then will be executed, and it receives the created pirate as a parameter.
        // res.json(pirate): This is sending a JSON response to the client.
        //  It takes the created pirate object and sends it back as the response.
        .then(project => res.json(project))

            // .catch(err => ...): This is the error handling part of the Promise chain. 
            // If there's an error during the creation process, the function inside catch will be executed,
            //  and it receives the err parameter, which represents the error that occurred.
            // res.status(400).json(err): This is sending a JSON response to the client in case of an error.
            //  It sets the HTTP status code to 400 (Bad Request) and sends the err object as the response,
            //   which could contain details about the error.
        .catch(err => res.status(400).json(err)) 
    // }
}

//Create C in CRUD
module.exports.createProject = (req, res) => {
    //create method for creating, all forms data goes to req.body 
Project.create(req.body)
//new project is the newest project created 
.then(newProject => res.status(201).json(newProject))
.catch(err => res.status(400).json(err)) 

}

//Read all  R in Crud
module.exports.displayAll = (req, res) => {
    // project for the schema name,find() is the method,
    //sort() for sorting the array of projects based on their name
    //find evry model inside of that model
    Project.find({}).sort({name:'asc'})
    //.then sucsesfully result 
    //project is an array of all documents in our db
    .then(project => res.status(200).json(project))
    //catching an error 
    .catch(err => res.status(500).json(err))
}
// module.exports.displayByNames = (req, res) => {
//     const { name } = req.params;

//     Project.find({ projectName: { $regex: new RegExp(name, 'i') } })
//         .then(products => {
//             if (!products || products.length === 0) {
//                 return res.status(404).json({ message: 'No products found with that name.' });
//             }
//             res.status(200).json(products);
//         })
//         .catch(err => res.status(500).json({ message: 'Internal server error', error: err }));
// };
//read One 
module.exports.displayOne = (req, res) => {
    //find one,find that project with that id that matches the params.id
    console.log(req.params)
    Project.findOne({_id: req.params.id})
        .then(project => res.status(200).json(project))
        .catch(err => res.status(500).json(err))
}

module.exports.deleteProject = (req, res) => {
    Project.deleteOne({_id: req.params.id})
        .then(deletedProject => res.json(deletedProject))
        .catch(err => res.json(err))
}


module.exports.editProject = (req, res) => {
    Project.findOne({ _id: req.params.id })
        .then(project => {
            if (!project) {
                return res.status(404).json({ error: "Poject not found" });
            }
            project.projectName = req.body.projectName || project.projectName;
            // pirate.img = req.body.img || pirate.img;
            project.description = req.body.description || project.description;
            project.price = req.body.price || project.price;
            project.save = req.body.save || project.save;
            // pirate.position = req.body.position || pirate.position;
            // pirate.pegLeg = req.body.pegLeg !== undefined ? req.body.pegLeg : pirate.pegLeg;
            // pirate.eyePatch = req.body.eyePatch !== undefined ? req.body.eyePatch : pirate.eyePatch;
            // pirate.hookHand = req.body.hookHand !== undefined ? req.body.hookHand : pirate.hookHand;

            return poject.save();
        })
        .then(updatedProject => {
            res.json(updatedProject);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
};
module.exports.updateProjectById = async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }
        res.json(project);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
  
// app.get('/api/album/:id', (request, response) => {
//     // Accessing the album ID from request.params
                            //params  is an object params is for url parameter
//     const id = request.params.id;
  
//     // Filtering albums array based on the provided ID
//krijojm nje variabel album ku do te mbajm objektin me id e specifikuar id qe shkon si parameter dhe filtrojm nga 
//array 'albums' me te gjith objektet 
// we are filtering the album => were album.id matches the request.params.id;
//     const album = albums.filter((album) => album.id == id);
  
//     // Sending the filtered album as JSON response
//     response.json(album);
//   });
  //request is an object with a informatin is made with request to the server
  //response.json will sent response to the client
 // response.json() can take in an object as argument and will send that objct s a json response to the client
//request.body to capture any form data is send