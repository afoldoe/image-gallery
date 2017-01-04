configRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function configRoutes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('landing', {
      url: '/',
      // default: '.add',
      views: {
        header: {
          component: 'homeHeader'
        },
        main: {
          component: 'homeMain'
        },
        'album@landing': {
          component: 'albumAdd'
        }
      }
    })
    // .state('landing.add', {
    //   url: '/album',
    //   component: 'albumAdd'
    // })
    .state('superheroes', {
      url: '/superheroes',
      views: {
        header: {
          component: 'homeMain'
        },
        main: {
          component: 'heroes'
        }
      }
    })
    .state('villains', {
      url: '/villains',
      views: {
        header: {
          component: 'homeMain'
        },
        main: {
          component: 'villains'
        }
      }
    });
    

  $urlRouterProvider.otherwise('/');
};