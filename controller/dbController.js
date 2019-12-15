const UserModel = require('../model/UserModel')

exports.createUser = function(){
    return UserModel.create({vkontakteId : "Ну да ну да"})
}