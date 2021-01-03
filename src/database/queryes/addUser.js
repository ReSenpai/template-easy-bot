const UserModel = require('../models/UserSchema');

const addUser = async (ctx) => {
    try {
        await new UserModel({
            userId: ctx.from.id,
            userName: ctx.from.username
        })
        .save()
        .then(() => {
            console.log('Add user succsess')
        });
    } catch (error) {
        console.log('Add user succsess', error)
    } 
}

module.exports = addUser;