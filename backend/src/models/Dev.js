const { Schema, model } = require('mongoose');
const DevSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    bio: String,
    avatar: {
        type: String,
        required: true,
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev', //Como se fosse uma chave estrangeira
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev', //Como se fosse uma chave estrangeira
    }],
},{
    timestamps: true,  //Timestamp: true (createdAt {armazena a data de criação}, updatedAt {armazena a data da ultima alteração})
});

module.exports = model('Dev', DevSchema);