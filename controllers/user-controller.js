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
async createUser({body}, res){
    try{
        let user = await User.create(body)
        res.json(user)
    }
    catch (err){
        console.log(err);
        res.status(400).json(err)
    }

},

//elete user
async updateUser({params, body}, res){
    try{
        let user = await User.findOneAndUpdate({_id: params.id}, body, {new: true, runValidators: true })
        if(!user) {
            res.status(404).json({ message: 'no user found with this Id'})
            return;
        }
        res.json(user)
    }
    catch (err){
        console.log(err);
        res.status(400).json(err)
    }

},


//delete user
async deleteUser({params}, res){
    try{
        let user = await User.findOneAndelete({_id: params.id})
        if(!user) {
            res.status(404).json({ message: 'no user with this id!'})
            return;
        }
         let thought = await Thought.deleteMany({userId: params.Id})
         if (!thought) {
            res.json(user, {message: 'no thoughts connected with this user found'})
            return;
         }
        res.json(user)
    }
    catch (err){
        console.log(err);
        res.status(400).json(err)
    }

},

//add friend
async addFriend({params}, res){
    try{
        let friend = await User.findOneAndUpdate({_id: params.id}, {$addToSet: {friends: params.friendId}}, {new: true })
        if (!friend){
            res.status(404).json({ message: 'no user with this Id'});
            return;
        }
        res.json(friend)
    }
    catch (err){
        console.log(err);
        res.status(400).json(err)
    }

},

// delete friend
async deleteFriend({params}, res){
    try{

    }
    catch (err){
        console.log(err);
        res.status(400).json(err)
    }

},

}


module.exports = userController;