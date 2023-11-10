const {User, Thought} = require('../models');

const userController = {
//get all users
    async getAllUsers(req, res){
        try{
            let users = await User.find({}).populate({path: 'thoughts', select: '-__v'}).select('-__v').sort({_id: -1});
            res.json(users)
        }
        catch (err){
            console.log(err);
            res.status(400).json(err)
        }
    },

//get user by id
async getUserById({params}, res){
    try{
        let user = await User.findOne({_id: params.id}).populate({path: 'thoughts', select: '-__v'}).select('-__v')
        if(!user) {
            res.status(404).jon({message: 'no user with this id'})
            return;
        }
        res.json(user)
    }
    catch (err){
        console.log(err);
        res.status(400).json(err)
    }

},

//create user
async createUser(req, res){
    try{
        let user = await User.create(body)
        res.json(user)
    }
    catch (err){
        console.log(err);
        res.status(400).json(err)
    }

},

//update user
async updateUser(req, res){
    try{
        let users = await User.findOneAndUpdate({})
        if() {

        }
        res.json(user)
    }
    catch (err){
        console.log(err);
        res.status(400).json(err)
    }

},


//delete user
async deleteUser(req, res){
    try{

    }
    catch (err){
        console.log(err);
        res.status(400).json(err)
    }

},

//add friend
async addFriend(req, res){
    try{
        let users = await User.findOneAndDelete({})
        if (){

        }
        res.json(user)
    }
    catch (err){
        console.log(err);
        res.status(400).json(err)
    }

},

// delete friend
async deleteFriend(req, res){
    try{

    }
    catch (err){
        console.log(err);
        res.status(400).json(err)
    }

},

}


module.exports = userController;