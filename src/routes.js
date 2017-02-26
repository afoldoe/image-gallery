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
        },
      },
      resolve: {
        albums: ['albumsService', albums => {
          return albums.getAll();
        }]
      }    
    })
    .state('album', {
      url: '/albums/:id',
      views: {
        header: {
          component: 'homeHeader'
        },
        main: {
          component: 'album'
        }
      },
      resolve: {
        album: [ 'albumsService', '$transition$', (albums, t) => {
          return albums.get(t.params().id);
        }]
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