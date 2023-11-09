const {User, Thought} = require('../models');


const thoughtController = {
// get all thoughts
async getAllThoughts(req, res){
    try{
        let thoughts = await Thought.find({})
        res.json(thoughts)
    }
    catch (err){
        console.log(err);
        res.status(400).json(err)
    }
},

//get thought by id
async getThoughtById(req, res){
    try{
        let thought = await Thought.findOne({})
        if() {

        }
        res.json(thoughts)
    }
    catch (err){
        console.log(err);
        res.status(400).json(err)
    }
},

//create thoughts
async createThought(req, res){
    try{
        let thought = await Thought.create(body)
        if() {

        }
        res.json(thought)
    }
    catch (err){
        console.log(err);
        res.status(400).json(err)
    }
},

//update thoughts
async updateThought(req, res){
    try{
        let thought = await Thought.findOneAndUpdate({})
        if() {

        }
        res.json(thought)
    }
    catch (err){
        console.log(err);
        res.status(400).json(err)
    }
},

// delete thought
async deleteThought(req, res){
    try{
        let thought = await Thought.findOneAndDelete({})
        if() {

        }
        res.json(thought)
    }
    catch (err){
        console.log(err);
        res.status(400).json(err)
    }
}

}





module.exports = thoughtController;