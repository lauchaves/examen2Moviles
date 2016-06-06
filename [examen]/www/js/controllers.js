angular.module('app.controllers', [])
     
.controller('userRegistrationCtrl', function($scope) {

})
   
.controller('addTransactionCtrl', function($scope,  addTransactionService, $ionicPopup, $state) {
   
    $scope.data = {};
    
    var selectT = document.getElementById("selectT");
    var op = selectT.options[selectT.selectedIndex].value;
    //console.log(op); 
    
    var selectS = document.getElementById("selectStatus");
    var op2 = selectS.options[selectS.selectedIndex].value;
    //console.log(op2); 
    
    

})
   
.controller('editTransactionCtrl', function($scope) {

})
   
.controller('disableTransactionCtrl', function($scope) {

})
   
.controller('transactionListCtrl', function($scope) {

})
   
.controller('aboutCtrl', function($scope) {

})

.controller('loginCtrl', function($scope,  LoginService, $ionicPopup, $state) {
   
    $scope.data = {};
 
    $scope.login = function() {
        console.log("LOGIN user: " + $scope.data.username + " - PW: " + $scope.data.password);
        
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('menu.about');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }
})