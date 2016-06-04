angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.userRegistration', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/userRegistration.html',
        controller: 'userRegistrationCtrl'
      }
    }
  })

  .state('menu.addTransaction', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addTransaction.html',
        controller: 'addTransactionCtrl'
      }
    }
  })

  .state('menu.editTransaction', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/editTransaction.html',
        controller: 'editTransactionCtrl'
      }
    }
  })

  .state('menu.disableTransaction', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/disableTransaction.html',
        controller: 'disableTransactionCtrl'
      }
    }
  })

  .state('menu.transactionList', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/transactionList.html',
        controller: 'transactionListCtrl'
      }
    }
  })

  .state('menu.about', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/about.html',
        controller: 'aboutCtrl'
      }
    }
  })

  .state('login', {
    url: '/page11',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

$urlRouterProvider.otherwise('/page11')

  

});