const {User, Thought} = require('../models');


const thoughtController = {
// get all thoughts
async getAllThoughts(req, res){
    try{

    }
    catch (err){
        console.log(err);
        res.status(400).json(err)
    }
},

//get thought by id
async getThoughtById(req, res){
    try{

    }
    catch (err){
        console.log(err);
        res.status(400).json(err)
    }
},

//create thoughts
async createThought(req, res){
    try{

    }
    catch (err){
        console.log(err);
        res.status(400).json(err)
    }
},

//update thoughts
async updateThought(req, res){
    try{

    }
    catch (err){
        console.log(err);
        res.status(400).json(err)
    }
},

// delete thought
async deleteThought(req, res){
    try{

    }
    catch (err){
        console.log(err);
        res.status(400).json(err)
    }
}

}





module.exports = thoughtController;