const { Schema, model, Types} = require('mongoose');

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: String,
            required: true,
            max: 280
        },
        reactionBOdy:{
            type: String,
            required: true,
            max: 280
        },
        username:{
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timeStamp => formatDate(timeStamp)
        }
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min: 1,
            max: 280
        },
        createdAt:{
            type: Date,
            default: Date.now,
            get: timeStamp => formatDate(timeStamp)
        },
        username:{
            type: String,
            required: true
        },
        userId: {
            type: String,
            required: true
        },
        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        },
        id: false
    }
);

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length
})

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;