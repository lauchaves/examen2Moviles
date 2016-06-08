
/**

Gobal vars

CurrentUser: get the current user's info
listTrans: get the current transaction's info, for edit functions.

**/

var currentUser;
var listTrans;
angular.module('app.controllers', [])

/*
User Registration Controller

*/
     
.controller('userRegistrationCtrl', function($scope, $ionicPopup, $http, $state) {
    $scope.userRegister = {};
    console.log("userRegistrationCtrl");
    
    $scope.registrar = function() {
    $http.post("http://localhost/apiExamenMoviles/public/users", $scope.userRegister)
        .success(function(response){
            console.log(response);
            var alertPopup = $ionicPopup.alert({
                                title: 'User Register!',
                                template: 'Succesfully Register!!'
                                });
            //$state.go('menu.about');
            
            }).error(function(response){
            var alertPopup = $ionicPopup.alert({
                                title: 'User Register!',
                                template: 'Error!!'
                                });
            //$state.go('menu.about');
        });
        
        
        
    }
    })
 
/*
Add Transaction Controller

*/
   
.controller('addTransactionCtrl', function($scope, $http, $ionicPopup, $state) {
   
    
    $scope.addTrans = {};
    console.log("addTransactionCtrl");

    
    $scope.transRegister = function() {
    
    var selectT = document.getElementById("selectT");
    var type = selectT.options[selectT.selectedIndex].value;
    //console.log(op); 
    
    var selectS = document.getElementById("selectStatus");
    var status = selectS.options[selectS.selectedIndex].value;
    //console.log(op2); 
    
    $scope.addTrans.type=type;
    $scope.addTrans.status=status;
    $scope.addTrans.idUser=currentUser.id;
    
    console.log($scope.addTrans);
    

    $http.post("http://localhost/apiExamenMoviles/public/createTransaction", $scope.addTrans)
        .success(function(response){
            console.log(response);
            var alertPopup = $ionicPopup.alert({
                                title: 'Add Transaction!',
                                template: 'Succesfully Added!!'
                                });
            //$state.go('menu.about');
            
            }).error(function(response){
            var alertPopup = $ionicPopup.alert({
                                title: 'Add Transaction!',
                                template: 'Error!!'
                                });
            //$state.go('menu.about');
        });     
    
    }
})

/*
Transaction List Controller

*/

.controller('transactionListCtrl', function($scope, $http, $ionicPopup, $state) {
    
   $scope.getList = function() {
       console.log(currentUser.id);
   
   $http.get("http://localhost/apiExamenMoviles/public/getTransaction/"+currentUser.id)
        .success(function(response){
            console.log(response);
       
            $scope.myTransList=response;
            listTrans=response;
       });
   }
   
   $scope.getCurrentTrans=function(mycurrentTrans){
        console.log(mycurrentTrans);
        listTrans=mycurrentTrans;
   }
   
    $scope.popup = function() {
          var myPopup = $ionicPopup.show({
            template: 'Choose an option:',
            title: 'More Options',
            scope: $scope,
            
            buttons: [
              { text: 'Cancel',
                type:'button button-small button-outline button-light'
              }, 
              { text: 'Edit',
                type: 'button button-small button-outline icon-right ion-edit button-energized',
                onTap: function(e){
                    
                    $state.go('menu.editTransaction');
              }               
              },
              {
                text: 'Change Status',
                type: 'button button-small button-outline icon-right ion-unlocked button-balanced',
                onTap: function(e) {
                    $state.go('menu.disableTransaction');
                  }
                }             
            ]
          });
         myPopup.then(function(res) {
         // Custom functionality....
             
             
         });
    }
})


/*
Edit transaction Controller

*/
.controller('editTransactionCtrl', function($scope, $http, $ionicPopup, $state) {
    $scope.editTransactionCtrl=false;
    $scope.editTrans = {};
    console.log("editTransactionCtrl");

    $scope.transEdit = function() {
        
        //console.log(listTrans);
    
    var selectT = document.getElementById("selectT");
    var type = selectT.options[selectT.selectedIndex].value;
    //console.log(op); 
    
    $scope.editTrans.type=type;
    $scope.editTrans.status=listTrans.status;
    $scope.editTrans.idUser=currentUser.id;
    $scope.editTrans.id=listTrans.id;
    
    //console.log($scope.editTrans);
    
    $http.put("http://localhost/apiExamenMoviles/public/editTransaction/"+ listTrans.id,$scope.editTrans)
        .success(function(response){
            console.log(response);
            var alertPopup = $ionicPopup.alert({
                                title: 'Edit Transaction!',
                                template: 'Succesfully Edited!!'
                                });
            //$state.go('menu.about');      
            }).error(function(response){
            var alertPopup = $ionicPopup.alert({
                                title: 'Edit Transaction!',
                                template: 'Error!!'
                                });
            //$state.go('menu.about');
        });   
         console.log(currentUser.id);
   
   $http.get("http://localhost/apiExamenMoviles/public/getTransaction/"+currentUser.id)
        .success(function(response){
       console.log(response);
       $scope.myTransList=response;
       listTrans=response;
       });
        
    }       

})

/*
Disable Transaction Controller
*/
.controller('disableTransactionCtrl', function($scope,$http, $ionicPopup, $state) {
    $scope.disableTransactionCtrl=false;
    
    $scope.editStatusTrans = {};
    console.log("disableTransactionCtrl");

    $scope.changeStatus = function() {
        
        console.log("change");
        console.log(listTrans);
    
    var selectT = document.getElementById("selectT");
    var status = selectT.options[selectT.selectedIndex].value;
    console.log(status); 
    
    $scope.editStatusTrans.type=listTrans.type;
    $scope.editStatusTrans.status=status;
    $scope.editStatusTrans.idUser=currentUser.id;
    $scope.editStatusTrans.id=listTrans.id;
    
    //console.log($scope.editTrans);
    
    $http.put("http://localhost/apiExamenMoviles/public/editStatus/"+ listTrans.id,$scope.editStatusTrans)
        .success(function(response){
            console.log(response);
            var alertPopup = $ionicPopup.alert({
                                title: 'Edit Status Transaction!',
                                template: 'Succesfully Edited!!'
                                });
        
            transactionListCtrl.getlist();
            //$state.go('menu.about');      
            }).error(function(response){
            var alertPopup = $ionicPopup.alert({
                                title: 'Edit Status Transaction!',
                                template: 'Error!!'
                                });
            //$state.go('menu.about');
        });       
    }   
})

 /*
About Controller

*/  
.controller('aboutCtrl', function($scope) {

})

/*
Login Controller
*/
.controller('loginCtrl', function($scope, $ionicPopup, $state, $http, $state ) {

    $scope.data = {};
    $scope.entro=false;
 
    $scope.login = function() {
        console.log("LOGIN user: " + $scope.data.email + " - PW: " + $scope.data.password);
         //$state.go('menu.about');

    $http.post("http://localhost/apiExamenMoviles/public/login", $scope.data)
        .success(function(response){
            //console.log(response);
        
            if(response.email!=null){
                currentUser=response;
                //console.log(currentUser);
                $state.go('menu.about');
            }
            else{
                var alertPopup = $ionicPopup.alert({
                                title: 'Login!',
                                template: 'Login Fail!!'
                                });        
            }
            
        })
            
            //$state.go('menu.about');
    };
        
});