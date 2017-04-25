// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('login', {
    url: '/login',
    cache : false,
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'

  })
  // // setup an abstract state for the tabs directive

.state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.tab', {
    url: '/tab',
    views: {
      'menuContent': {
        templateUrl: 'templates/tabs.html'
      }
    }
  })

  // Each tab has its own nav history stack:

  .state('app.tab.challenges', {
    url: '/challenges',
    views: {
      'challenges': {
        templateUrl: 'templates/challenges.html',
        controller: ''
      }
    }
  })

  .state('app.tab.invite', {
      url: '/invite',
      views: {
        'invite': {
          templateUrl: 'templates/invite.html',
          controller: ''
        }
      }
    })
    // .state('app.app.tab.chat-detail', {
    //   url: '/chats/:chatId',
    //   views: {
    //     'tab-chats': {
    //       templateUrl: 'templates/chat-detail.html',
    //       controller: 'ChatDetailCtrl'
    //     }
    //   }
    // })

  .state('app.tab.network', {
    url: '/network',
    views: {
      'network': {
        templateUrl: 'templates/network.html',
        controller: ''
      }
    }
  })
  .state('app.tab.redeem', {
    url: '/redeem',
    views: {
      'redeem': {
        templateUrl: 'templates/redeem.html',
        controller: ''
      }
    }
  })
  .state('app.tab.transaction-history', {
    url: '/transaction-history',
    views: {
      'transaction-history': {
        templateUrl: 'templates/transaction-history.html',
        controller: ''
      }
    }
  })
  .state('app.tab.achievers', {
    url: '/achievers',
    views: {
      'achievers': {
        templateUrl: 'templates/achievers.html',
        controller: ''
      }
    }
  })
  .state('register', {
    url: '/register',
        templateUrl: 'templates/register.html',
        controller: 'registerCtrl'
    })
  
  .state('installapp', {
    url: '/installapp',
        templateUrl: 'templates/installapp.html'
  })

  .state('app.member_tree', {
    url: '/member_tree',
    views: {
      'menuContent': {
        templateUrl: 'templates/member_tree.html'
      }
    }
  })

  .state('app.offer', {
    url: '/offer',
    views: {
      'menuContent': {
        templateUrl: 'templates/offer.html'
      }
    }
  })

  .state('app.notification', {
    url: '/notification',
    views: {
      'menuContent': {
        templateUrl: 'templates/notification.html'
      }
    }
  })

  .state('app.support', {
    url: '/support',
    views: {
      'menuContent': {
        templateUrl: 'templates/support.html'
      }
    }
  })

  .state('app.help', {
    url: '/help',
    views: {
      'menuContent': {
        templateUrl: 'templates/help.html'
      }
    }
  })

  .state('app.profile', {
    url: '/profile',
    views: {
      'menuContent': {
        templateUrl: 'templates/profile.html'
      }
    }
  })

  .state('app.terms', {
    url: '/terms',
    views: {
      'menuContent': {
        templateUrl: 'templates/terms.html'
      }
    }
  })

  .state('recharge', {
    url: '/recharge',
        templateUrl: 'templates/recharge.html',
        controller: ''
  });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
