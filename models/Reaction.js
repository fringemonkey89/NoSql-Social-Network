const { Schema, Types } = require('mongoose')
const formatDate = require('../util/date')

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody:{
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

module.exports = ReactionSchema;