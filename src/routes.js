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
          component: 'albums'
        },
        'album@landing': {
          component: 'albumAdd'
        }
      }
    })
    .state('albums', {
      url: '/albums',
      views: {
        header: {
          component: 'homeMain'
        },
        main: {
          component: 'albums'
        }
      }
    })
    // .state('villains', {
    //   url: '/villains',
    //   views: {
    //     header: {
    //       component: 'homeMain'
    //     },
    //     main: {
    //       component: 'villains'
    //     }
    //   }
    // })
    ;
    

  $urlRouterProvider.otherwise('/');
};