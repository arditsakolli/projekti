const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: [true, "*projectName is required"],
        minlength: [2, "projectName must be longer than 2 characters"],
    },
    description: {
        type: String,
        required: [true, "*Value must be between 1-10"],
    },
    title: {
        type: String,
        required: [true, "*Value must be between 1-10"],
    },
    price: {
        type: Number,
    },
    offers: {
        type: Number,
    },
    produced: {
        type: String,
    },
    detailsList: {
        type: [String],
    },
    selectedOption: {
        type: String
    },
    serialNumber: {
        type: String
    },
    // image: {
    //     type: Buffer, // Buffer type for binary data
    //     required: true
    // },
    savedByUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);
