/*

User Controller

*/
var usersService = require('../services/usersService.js'); 

exports.getUsers = function(eRequest, eResponse) {
    usersService.getUsers(function(data){
        eResponse.send(data);
    });
};

exports.getUserById = function(eRequest, eResponse) {
    usersService.getUserById(eRequest.params.user, function(data){
        eResponse.send(data);
    });
};

exports.newUser = function(eRequest, eResponse) {
    usersService.newUser(eRequest.body, function(data){
        eResponse.send(data);
    });
};

