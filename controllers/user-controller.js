const {User, Thought} = require('../models');

const userController = {
//get all users
    async getAllUsers(req, res){
        try{
            let users = await User.find({})
        }
        catch (err){
            console.log(err);
            res.status(400).json(err)
        }
    },

//get user by id
async getUserById(req, res){
    try{
        let user = await User.findOne({})
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