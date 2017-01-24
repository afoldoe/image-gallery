configRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function configRoutes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('landing', {
      url: '/',
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