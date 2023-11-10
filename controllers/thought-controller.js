const {User, Thought} = require('../models');


const thoughtController = {
// get all thoughts
async getAllThoughts(req, res){
    try{
        let thoughts = await Thought.find({}).populate({path: 'reaction', select: '-__v'}).select('-__v').sort({_id: -1})
        res.json(thoughts)
    }
    catch (err){
        console.log(err);
        res.status(400).json(err)
    }
},

//get thought by id
async getThoughtById({params}, res){
    try{
        let thought = await Thought.findOne({_id: params.thoughtId}).populate({path: 'reaction', select: '-__v'}).select('-__v')
        if(!thought) {
            res.status(404).json({message: ' theres no thought with this id'});
            return;
        }
        res.json(thought)
    }
    catch (err){
        console.log(err);
        res.status(400).json(err)
    }
},

//create thoughts
async createThought({params, body}, res){
    try{
        let thought = await Thought.create(body)
        let update = await User.findOneAndUpdate({_id: params.userId}, {$push: {thoughts: thought._id}}, {new: true})
        if(!update) {
            res.status(404).json({ message: 'no user with this id'})
            return;
        }
        res.json(thought)
    }
    catch (err){
        console.log(err);
        res.status(400).json(err)
    }
},

//update thoughts
async updateThought({params}, res){
    try{
        let thought = await Thought.findOneAndUpdate({})
        if(!thought) {
            res.staus(404).json({ message: 'no thought wih this id'})
        }
        res.json(thought)
    }
    catch (err){
        console.log(err);
        res.status(400).json(err)
    }
},

// delete thought
async deleteThought({params}, res){
    try{
        let thought = await Thought.findOneAndDelete({})
        if(!thought) {

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